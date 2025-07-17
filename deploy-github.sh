#!/bin/bash

# 🚀 Neon Murer GitHub Deployment Script
# Automatisches Deployment vom GitHub Container Registry

set -e

echo "🚀 Neon Murer Website - GitHub Deployment"
echo "========================================="

# Farben für Output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Prüfe ob Docker läuft
if ! docker info >/dev/null 2>&1; then
    echo -e "${RED}❌ Docker läuft nicht! Bitte starten Sie Docker und versuchen Sie es erneut.${NC}"
    exit 1
fi

echo -e "${BLUE}📦 Ziehe neueste Version vom GitHub Container Registry...${NC}"
docker pull ghcr.io/crypticbae/nm-new:latest

echo -e "${BLUE}🔧 Stoppe laufende Container...${NC}"
docker-compose -f docker-compose-github.yml down 2>/dev/null || true

echo -e "${BLUE}🚀 Starte Website...${NC}"
docker-compose -f docker-compose-github.yml up -d

echo -e "${GREEN}✅ Deployment erfolgreich!${NC}"
echo ""
echo -e "${YELLOW}📊 Container Status:${NC}"
docker-compose -f docker-compose-github.yml ps

echo ""
echo -e "${GREEN}🌐 Website verfügbar unter:${NC}"
echo -e "${BLUE}   http://localhost:3000${NC}"
echo ""

echo -e "${YELLOW}📋 Nützliche Befehle:${NC}"
echo -e "${BLUE}   Logs anzeigen:${NC}    docker-compose -f docker-compose-github.yml logs -f"
echo -e "${BLUE}   Neu starten:${NC}     docker-compose -f docker-compose-github.yml restart"
echo -e "${BLUE}   Stoppen:${NC}         docker-compose -f docker-compose-github.yml down"
echo -e "${BLUE}   Status:${NC}          docker-compose -f docker-compose-github.yml ps"

echo ""
echo -e "${GREEN}🎉 Deployment abgeschlossen!${NC}" 