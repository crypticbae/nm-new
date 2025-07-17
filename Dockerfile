# Optimierter Dockerfile für schnelle GitHub Actions Builds
FROM node:18-alpine AS base

# 1. Dependencies installieren
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Package files kopieren
COPY package.json package-lock.json* ./

# Dependencies installieren (mit Cache)
RUN npm ci

# 2. Build Stage
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Environment variables
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

# Build für Produktion
RUN npm run build

# 3. Production Stage
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

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

# Start command
CMD ["node", "server.js"] 