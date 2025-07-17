# 🚀 Neon Murer AG - Deployment Anleitung

## 📋 Übersicht

Diese Anleitung zeigt, wie du die Neon Murer Website komplett über Docker deployest **ohne das Repository klonen zu müssen**.

## 🎯 Ziel-Setup

- ✅ Automatisches Docker Image Build via GitHub Actions
- ✅ Image wird auf GitHub Container Registry gepusht
- ✅ Externe Verwendung nur mit `docker-compose.yml`
- ✅ Keine lokalen Builds oder Git-Klone nötig

## 🏗️ 1. GitHub Setup & Push

### Repository vorbereiten
```bash
# In den new/ Ordner wechseln
cd new/

# Git Repository initialisieren (falls nicht vorhanden)
git init

# Remote Repository hinzufügen
git remote add origin https://github.com/crypticbae/nm-new.git

# Alle Dateien stagen
git add .

# Commit erstellen
git commit -m "🚀 Initial commit: Neon Murer AG Website mit Docker Setup"

# Push zum GitHub Repository
git push -u origin main
```

## 🤖 2. GitHub Actions aktivieren

Nach dem Push startet automatisch die GitHub Action:

1. **Navigiere zu**: https://github.com/crypticbae/nm-new/actions
2. **Überwache** den Build-Prozess
3. **Warte** bis "Build and Push Docker Image" ✅ grün ist
4. **Docker Image** ist verfügbar unter: `ghcr.io/crypticbae/nm-new:latest`

## 🐳 3. Externe Verwendung (Das was du willst!)

### Option A: Direkt mit docker-compose.yml

**Schritt 1:** Docker Compose Datei herunterladen
```bash
curl -o docker-compose.yml https://raw.githubusercontent.com/crypticbae/nm-new/main/docker-compose.external.yml
```

**Schritt 2:** Website starten
```bash
docker-compose up -d
```

**Schritt 3:** Website aufrufen
```
http://localhost:3000
```

### Option B: Manuell mit Docker

```bash
# Image pullen
docker pull ghcr.io/crypticbae/nm-new:latest

# Container starten
docker run -d \
  --name neon-murer-website \
  --restart unless-stopped \
  -p 3000:3000 \
  -e NODE_ENV=production \
  -e NEXT_TELEMETRY_DISABLED=1 \
  ghcr.io/crypticbae/nm-new:latest
```

## 🔄 4. Updates & Wartung

### Neue Version deployen
```bash
# Stoppe aktuelle Container
docker-compose down

# Hole neueste Version
docker-compose pull

# Starte mit neuer Version
docker-compose up -d
```

### Logs überwachen
```bash
# Alle Logs anzeigen
docker-compose logs -f

# Nur Website Logs
docker logs -f neon-murer-website
```

### Container Status prüfen
```bash
# Status aller Services
docker-compose ps

# Detaillierte Container Info
docker inspect neon-murer-website
```

## 🌐 5. Production Setup

### Mit Domain/SSL (Empfohlen)

**nginx.conf** erstellen:
```nginx
server {
    listen 80;
    server_name deine-domain.com;
    
    location / {
        proxy_pass http://neon-murer-website:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

**docker-compose.prod.yml** erweitern:
```yaml
services:
  neon-murer-website:
    image: ghcr.io/crypticbae/nm-new:latest
    # ... (siehe docker-compose.external.yml)

  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/conf.d/default.conf:ro
    depends_on:
      - neon-murer-website
```

## 🛠️ 6. Troubleshooting

### Container startet nicht
```bash
# Logs prüfen
docker logs neon-murer-website

# Container neu starten
docker-compose restart neon-murer-website
```

### Image nicht verfügbar
```bash
# Manuell pullen
docker pull ghcr.io/crypticbae/nm-new:latest

# GitHub Actions Status prüfen
# https://github.com/crypticbae/nm-new/actions
```

### Port bereits belegt
```bash
# Port ändern in docker-compose.yml
ports:
  - "8080:3000"  # Verwendet Port 8080 statt 3000
```

## ✅ 7. Erfolgreich deployed!

Nach erfolgreichem Setup hast du:

- ✅ Website läuft auf `http://localhost:3000`
- ✅ Automatische Updates via GitHub Actions
- ✅ Produktions-ready Docker Setup
- ✅ Keine lokalen Builds mehr nötig
- ✅ Skalierbar und wartbar

## 📞 Support

Bei Fragen oder Problemen:
- GitHub Issues: https://github.com/crypticbae/nm-new/issues
- Docker Logs: `docker logs neon-murer-website` 