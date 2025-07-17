#!/bin/bash

# 🚀 NEON MURER QUICK DEPLOY
# Einfachstes Deployment - nur Repository URL angeben!

set -e

echo "🚀 Neon Murer Quick Deploy gestartet..."

# Parameter prüfen
if [ $# -eq 0 ]; then
    echo "❌ Fehler: Repository URL erforderlich!"
    echo ""
    echo "Verwendung:"
    echo "  ./quick-deploy.sh <repository-url>"
    echo ""
    echo "Beispiel:"
    echo "  ./quick-deploy.sh https://github.com/username/neon-murer-website.git"
    echo ""
    exit 1
fi

REPO_URL=$1
echo "📝 Repository: $REPO_URL"

# Docker-Compose Datei erstellen
echo "📝 Docker-Compose Konfiguration erstellen..."
cat > docker-compose-auto-generated.yml << EOF
version: '3.8'

services:
  neon-murer-auto:
    build:
      context: $REPO_URL
      dockerfile: Dockerfile
    container_name: neon-murer-auto
    restart: unless-stopped
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - PORT=3000
      - HOSTNAME=0.0.0.0
    healthcheck:
      test: ["CMD", "wget", "--no-verbose", "--tries=1", "--spider", "http://localhost:3000"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 40s
EOF

# Container starten
echo "🔨 Container bauen und starten..."
docker-compose -f docker-compose-auto-generated.yml up -d --build

# Status prüfen
echo "📊 Container Status:"
docker-compose -f docker-compose-auto-generated.yml ps

# Health Check
echo "🔍 Health Check (45 Sekunden warten)..."
sleep 45

if curl -f http://localhost:3000 > /dev/null 2>&1; then
    echo "✅ ERFOLG! Website läuft!"
    echo ""
    echo "🌐 Website verfügbar unter:"
    echo "   http://$(hostname -I | awk '{print $1}'):3000"
    echo "   http://localhost:3000"
    echo ""
else
    echo "❌ Website antwortet nicht. Logs prüfen:"
    docker-compose -f docker-compose-auto-generated.yml logs --tail=20
fi

echo "📋 Nützliche Befehle:"
echo "  Status: docker-compose -f docker-compose-auto-generated.yml ps"
echo "  Logs:   docker-compose -f docker-compose-auto-generated.yml logs -f"
echo "  Stop:   docker-compose -f docker-compose-auto-generated.yml down"
echo ""
echo "🎉 Deployment abgeschlossen!" 