# Dockerfile für Neon Murer Next.js App
FROM node:18-alpine AS base

# 1. Dependencies installieren
FROM base AS deps
RUN apk add --no-cache libc6-compat wget
WORKDIR /app

# Package files kopieren
COPY package.json package-lock.json* ./

# ALLE Dependencies installieren (inkl. devDependencies für Build)
RUN npm ci --verbose

# 2. Build Stage
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Next.js telemetry deaktivieren
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

# Debug: Zeige Dateien an
RUN ls -la
RUN ls -la src/

# Build mit verbose output
RUN npm run build --verbose

# Debug: Zeige Build-Ergebnis
RUN ls -la .next/

# 3. Production Stage
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# wget für health check installieren
RUN apk add --no-cache wget

# Benutzer für Sicherheit erstellen
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Build files kopieren
COPY --from=builder /app/public ./public

# Standalone files für optimierte Deployment
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

# Port exposieren
EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000 || exit 1

# Start command
CMD ["node", "server.js"] 