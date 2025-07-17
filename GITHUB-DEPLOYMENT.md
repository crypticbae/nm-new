# 🚀 GitHub Actions Automatisches Deployment

## 📋 Übersicht

Dieses Repository ist mit GitHub Actions konfiguriert, die automatisch ein Docker Image bauen und publizieren, sobald Sie Code pushen.

## 🔧 Setup (Einmalig)

### 1. Dateien ins Repository hochladen

Kopieren Sie diese Dateien in Ihr Repository:
```
.github/
  workflows/
    docker-build.yml
docker-compose-github.yml
docker-compose-production-github.yml
nginx.conf
```

### 2. GitHub Container Registry aktivieren

GitHub Actions verwendet automatisch `ghcr.io` (GitHub Container Registry). Keine weitere Konfiguration erforderlich!

## 🐳 Verwendung

### Option 1: Einfaches Deployment
```bash
# Image herunterladen und starten
docker-compose -f docker-compose-github.yml up -d

# Status überprüfen
docker-compose -f docker-compose-github.yml ps

# Logs anzeigen
docker-compose -f docker-compose-github.yml logs -f
```

### Option 2: Production Deployment mit Nginx
```bash
# Mit Nginx Reverse Proxy
docker-compose -f docker-compose-production-github.yml up -d
```

## 🔄 Automatischer Build Process

**Trigger:**
- Jeder Push auf `main` oder `master` Branch
- Pull Requests

**Was passiert:**
1. ✅ Code wird ausgecheckt
2. 🔧 Docker Buildx wird eingerichtet
3. 🏗️ Image wird für AMD64 und ARM64 gebaut
4. 📦 Image wird auf `ghcr.io/crypticbae/nm-new:latest` gepusht
5. 🎉 Deployment-Informationen werden angezeigt

## 📦 Image Informationen

**Image:** `ghcr.io/crypticbae/nm-new:latest`
**Registry:** GitHub Container Registry (ghcr.io)
**Platforms:** linux/amd64, linux/arm64
**Update:** Automatisch bei jedem Push

## 🔧 Befehle

### Neueste Version ziehen
```bash
docker pull ghcr.io/crypticbae/nm-new:latest
docker-compose -f docker-compose-github.yml up -d
```

### Container neu starten
```bash
docker-compose -f docker-compose-github.yml restart
```

### Logs anzeigen
```bash
docker-compose -f docker-compose-github.yml logs -f neonmurer-website
```

### Stoppen
```bash
docker-compose -f docker-compose-github.yml down
```

## 🌐 URLs

- **Development:** http://localhost:3000
- **Production (mit Nginx):** http://localhost

## ⚡ Vorteile

✅ **Automatisch:** Neues Image bei jedem Code-Update
✅ **Sicher:** Privates Repository möglich
✅ **Schnell:** Fertige Images sofort verfügbar
✅ **Kostenlos:** GitHub Actions & Container Registry
✅ **Multi-Platform:** AMD64 und ARM64 Support

## 🔧 Troubleshooting

### Image nicht gefunden?
```bash
# Login in GitHub Container Registry
echo $GITHUB_TOKEN | docker login ghcr.io -u USERNAME --password-stdin
```

### Aktuelle Tags anzeigen
GitHub Repository → Packages → nm-new

### Cache löschen
```bash
docker system prune -a
docker pull ghcr.io/crypticbae/nm-new:latest
```

## 📊 Status Monitoring

GitHub Actions zeigt den Build-Status an:
- ✅ Grün: Build erfolgreich
- ❌ Rot: Build fehlgeschlagen
- 🟡 Gelb: Build läuft

Überprüfen Sie: https://github.com/crypticbae/nm-new/actions 