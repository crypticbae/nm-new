# Einfacher statischer Build mit nginx
FROM node:18-alpine AS builder

WORKDIR /app

# Package files kopieren
COPY package.json ./
COPY package-lock*.json ./

# Dependencies installieren
RUN npm install --legacy-peer-deps

# Source code kopieren
COPY . .

# Environment variables
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

# Statischen Build erstellen
RUN npm run build

# Production Stage mit nginx
FROM nginx:alpine AS runner

# nginx Konfiguration
RUN echo 'server { \
    listen 3000; \
    server_name localhost; \
    location / { \
        root /usr/share/nginx/html; \
        index index.html index.htm; \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

# Statische Dateien kopieren
COPY --from=builder /app/out /usr/share/nginx/html

# Port exposieren
EXPOSE 3000

# nginx starten
CMD ["nginx", "-g", "daemon off;"] 