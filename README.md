# 🌟 Neon Murer AG - Moderne Website

Moderne Next.js Website für die Neon Murer AG - Lichtwerbung & Werbetechnik seit 1949.

## 🚀 Features

- **Next.js 15** mit TypeScript
- **Responsive Design** mit TailwindCSS & DaisyUI
- **SEO optimiert** mit Meta-Tags
- **Performance optimiert** mit Image Optimization
- **Docker ready** für einfaches Deployment

## 📱 Seiten

- **Homepage** - Hero, Services, About
- **Lichtwerbung** - 5 Unterkategorien (Leuchtschriften, Leuchttransparente, etc.)
- **Beschriftungen** - 6 Unterkategorien (Fahrzeug, Fenster, Tafel, etc.)
- **Digital Signage** - LED Displays & Systeme
- **Dienstleistungen** - 6 Services (Beratung, Bewilligung, Montage, etc.)
- **Über uns** - 4 Unterkategorien (Fachkompetenzen, Geschichte, Team, Jobs)

## 🛠 Lokale Entwicklung

```bash
# Dependencies installieren
npm install

# Development Server starten
npm run dev

# Website unter http://localhost:3000
```

## 🐳 Docker Deployment

### Schnell-Start (Einfach)
```bash
# Repository klonen
git clone https://github.com/IHR-USERNAME/neon-murer-website.git
cd neon-murer-website

# Docker Container starten
docker-compose -f docker-compose.simple.yml up -d --build

# Website unter http://server-ip:3000
```

### Professionell (mit Nginx)
```bash
# Mit Nginx Reverse Proxy
docker-compose up -d --build

# Website unter http://server-ip
```

### Automatisches Deployment
```bash
# Deployment Script verwenden
chmod +x deploy.sh
./deploy.sh simple    # oder
./deploy.sh full
```

## 📋 Detaillierte Anleitung

Siehe **[DEPLOYMENT.md](DEPLOYMENT.md)** für die komplette Schritt-für-Schritt Anleitung.

## 🏗 Architektur

```
neon-murer-website/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── lichtwerbung/    # Lichtwerbung + 5 Unterkategorien
│   │   ├── beschriftungen/  # Beschriftungen + 6 Unterkategorien
│   │   ├── digital-signage/ # Digital Signage
│   │   ├── dienstleistungen/# Services
│   │   └── ueber-uns/       # Über uns + 4 Unterkategorien
│   └── components/          # React Components
│       ├── Header.tsx       # Navigation
│       ├── Footer.tsx       # Footer
│       └── Hero.tsx         # Hero Section
├── public/images/           # Bilder & Assets
├── Dockerfile              # Multi-stage Docker Build
├── docker-compose.yml      # Nginx + App
├── docker-compose.simple.yml # Nur App
├── nginx.conf              # Nginx Konfiguration
└── deploy.sh               # Deployment Script
```

## 🎨 Design System

- **Primärfarbe:** #112357 (Neon Murer Blau)
- **Sekundärfarbe:** #ffd401 (Neon Murer Gelb)
- **Typography:** Inter Font
- **Framework:** TailwindCSS + DaisyUI
- **Theme:** Custom "neon-murer" Theme

## 📞 Kontakt

**Neon Murer AG**
- 📞 +41 55 225 50 25
- 📧 neon@neonmurer.ch
- 🌐 Rapperswil-Jona & Uznach

## 📄 Lizenz

© 2024 Neon Murer AG. Alle Rechte vorbehalten.
