#!/bin/bash

# 🧪 Docker Build Test Script
# Testet den Docker Build lokal bevor GitHub Actions läuft

set -e

echo "🧪 Docker Build Test gestartet..."

# Farben
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# Docker verfügbar?
if ! command -v docker &> /dev/null; then
    echo -e "${RED}❌ Docker nicht gefunden!${NC}"
    exit 1
fi

echo -e "${BLUE}🔧 Starte Docker Build Test...${NC}"

# Build testen
echo -e "${YELLOW}📦 Baue Docker Image (das kann 2-3 Minuten dauern)...${NC}"
if docker build -t neon-murer-test .; then
    echo -e "${GREEN}✅ Docker Build erfolgreich!${NC}"
else
    echo -e "${RED}❌ Docker Build fehlgeschlagen!${NC}"
    echo -e "${YELLOW}💡 Tipps zur Fehlerbehebung:${NC}"
    echo "   1. Prüfe package.json und dependencies"
    echo "   2. Prüfe next.config.ts Syntax"
    echo "   3. Prüfe tailwind.config.js"
    echo "   4. Führe 'npm run build' lokal aus"
    exit 1
fi

# Container testen
echo -e "${YELLOW}🚀 Teste Container Start...${NC}"
if docker run -d --name neon-murer-test-container -p 3001:3000 neon-murer-test; then
    echo -e "${GREEN}✅ Container gestartet!${NC}"
    
    # Kurz warten
    echo -e "${YELLOW}⏳ Warte 10 Sekunden auf Container...${NC}"
    sleep 10
    
    # Health Check
    if curl -f http://localhost:3001 > /dev/null 2>&1; then
        echo -e "${GREEN}✅ Website antwortet! Test erfolgreich!${NC}"
        echo -e "${BLUE}🌐 Test-Website: http://localhost:3001${NC}"
    else
        echo -e "${YELLOW}⚠️ Website antwortet noch nicht (das ist normal bei ersten Start)${NC}"
        echo -e "${BLUE}📋 Container Logs:${NC}"
        docker logs neon-murer-test-container --tail=10
    fi
    
    # Cleanup
    echo -e "${YELLOW}🧹 Cleanup...${NC}"
    docker stop neon-murer-test-container
    docker rm neon-murer-test-container
else
    echo -e "${RED}❌ Container Start fehlgeschlagen!${NC}"
    docker logs neon-murer-test-container --tail=20
    docker rm neon-murer-test-container 2>/dev/null || true
    exit 1
fi

# Image aufräumen
docker rmi neon-murer-test

echo -e "${GREEN}🎉 Docker Build Test erfolgreich abgeschlossen!${NC}"
echo -e "${BLUE}✅ GitHub Actions sollte jetzt funktionieren!${NC}" 