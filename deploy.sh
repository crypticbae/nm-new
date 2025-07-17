#!/bin/bash

# 🚀 Neon Murer Website Deployment Script
# Verwendung: ./deploy.sh [simple|full]

set -e

echo "🚀 Neon Murer Website Deployment gestartet..."

# Parameter prüfen
DEPLOY_TYPE=${1:-"simple"}

if [ "$DEPLOY_TYPE" != "simple" ] && [ "$DEPLOY_TYPE" != "full" ]; then
    echo "❌ Fehler: Deployment-Typ muss 'simple' oder 'full' sein"
    echo "Verwendung: ./deploy.sh [simple|full]"
    exit 1
fi

echo "📝 Deployment-Typ: $DEPLOY_TYPE"

# Git Updates laden
echo "📥 Code aktualisieren..."
git pull origin main

# Container stoppen
echo "🛑 Container stoppen..."
if [ "$DEPLOY_TYPE" == "simple" ]; then
    docker-compose -f docker-compose.simple.yml down
else
    docker-compose down
fi

# Alte Images aufräumen (optional)
echo "🧹 Alte Docker Images aufräumen..."
docker image prune -f

# Container neu bauen und starten
echo "🔨 Container neu bauen und starten..."
if [ "$DEPLOY_TYPE" == "simple" ]; then
    docker-compose -f docker-compose.simple.yml up -d --build
    echo "✅ Website verfügbar unter: http://$(hostname -I | awk '{print $1}'):3000"
else
    docker-compose up -d --build
    echo "✅ Website verfügbar unter: http://$(hostname -I | awk '{print $1}')"
fi

# Status prüfen
echo "📊 Container Status:"
if [ "$DEPLOY_TYPE" == "simple" ]; then
    docker-compose -f docker-compose.simple.yml ps
else
    docker-compose ps
fi

# Health Check
echo "🔍 Health Check..."
sleep 10

if [ "$DEPLOY_TYPE" == "simple" ]; then
    if curl -f http://localhost:3000 > /dev/null 2>&1; then
        echo "✅ Website läuft erfolgreich!"
    else
        echo "❌ Website antwortet nicht. Logs prüfen:"
        docker-compose -f docker-compose.simple.yml logs --tail=20
    fi
else
    if curl -f http://localhost/health > /dev/null 2>&1; then
        echo "✅ Website läuft erfolgreich!"
    else
        echo "❌ Website antwortet nicht. Logs prüfen:"
        docker-compose logs --tail=20
    fi
fi

echo "🎉 Deployment abgeschlossen!"
echo ""
echo "📋 Nützliche Befehle:"
echo "  Logs anzeigen: docker-compose logs -f"
echo "  Status prüfen: docker-compose ps"
echo "  Container stoppen: docker-compose down"
echo "" 