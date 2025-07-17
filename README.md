# 🌟 Neon Murer AG - Moderne Website

Moderne Next.js Website für die **Neon Murer AG** - Lichtwerbung & Werbetechnik seit 1949.

## 🚀 Quick Start (Externe Verwendung)

**Ohne Repository klonen** - nur mit Docker:

```bash
# 1. Docker Compose Datei herunterladen
curl -o docker-compose.yml https://raw.githubusercontent.com/crypticbae/nm-new/main/docker-compose.external.yml

# 2. Website starten  
docker-compose up -d

# 3. Website läuft auf http://localhost:3000
```

Das war's! 🎉

## 📱 Website Features

* **Responsive Design** mit TailwindCSS & DaisyUI
* **SEO optimiert** mit Next.js 15
* **Performance optimiert** mit Image Optimization
* **Docker ready** für einfaches Deployment

### 📂 Haupt-Seiten

* **Homepage** - Hero, Services, About
* **Lichtwerbung** - 5 Unterkategorien (Leuchtschriften, Leuchttransparente, etc.)
* **Beschriftungen** - 6 Unterkategorien (Fahrzeug, Fenster, Tafel, etc.)
* **Digital Signage** - LED Displays & Systeme
* **Dienstleistungen** - 6 Services (Beratung, Bewilligung, Montage, etc.)
* **Über uns** - 4 Unterkategorien (Fachkompetenzen, Geschichte, Team, Jobs)

## 🐳 Docker Deployment

### Einfach (für externe Verwendung)
```bash
# Direkt vom GitHub Container Registry
docker run -d \
  --name neon-murer-website \
  -p 3000:3000 \
  ghcr.io/crypticbae/nm-new:latest
```

### Entwicklung (lokal)
```bash
# Dependencies installieren
npm install

# Development Server starten
npm run dev

# Website unter http://localhost:3000
```

## 🤖 Automatisches Deployment

- **GitHub Actions** baut automatisch Docker Images
- **Push to main** triggert neuen Build
- **Image verfügbar**: `ghcr.io/crypticbae/nm-new:latest`
- **Keine lokalen Builds** nötig für Deployment

## 📋 Komplette Anleitung

Siehe **[DEPLOYMENT.md](./DEPLOYMENT.md)** für die komplette Schritt-für-Schritt Anleitung.

## 🎨 Design System

* **Primärfarbe:** #112357 (Neon Murer Blau)
* **Sekundärfarbe:** #ffd401 (Neon Murer Gelb)  
* **Typography:** Inter Font
* **Framework:** TailwindCSS + DaisyUI
* **Theme:** Custom "neon-murer" Theme

## 🏗 Tech Stack

* **Frontend:** Next.js 15, TypeScript, TailwindCSS, DaisyUI
* **Deployment:** Docker, GitHub Actions, GitHub Container Registry
* **Development:** ESLint, PostCSS, Responsive Design

## 🔄 Updates

```bash
# Container stoppen
docker-compose down

# Neueste Version holen
docker-compose pull

# Mit neuer Version starten
docker-compose up -d
```

## 📞 Kontakt

**Neon Murer AG**
* 📞 +41 55 225 50 25
* 📧 neon@neonmurer.ch  
* 🌐 Rapperswil-Jona & Uznach

---

## 📄 Lizenz

© 2024 Neon Murer AG. Alle Rechte vorbehalten.
