# 🚀 Deployment Anleitung: Neon Murer Website

Diese Anleitung führt Sie durch das komplette Deployment der Neon Murer Website auf einem externen Server mit Docker.

## 📋 Voraussetzungen

### Server Requirements:
- Linux Server (Ubuntu 20.04+ empfohlen)
- Mindestens 2GB RAM
- 10GB freier Speicher
- Docker & Docker Compose installiert
- Git installiert
- Internetverbindung

### Lokale Requirements:
- Git Account (GitHub, GitLab, etc.)
- SSH Zugang zum Server

## 🔧 1. Repository Setup

### 1.1 Repository erstellen
```bash
# Bei GitHub oder GitLab ein neues Repository erstellen
# Name: neon-murer-website
```

### 1.2 Code hochladen
```bash
# Im Projekt-Ordner (nm-modern/new/)
cd new/
git init
git add .
git commit -m "Initial commit: Neon Murer Website"
git branch -M main
git remote add origin https://github.com/IHR-USERNAME/neon-murer-website.git
git push -u origin main
```

## 🐳 2. Server Vorbereitung

### 2.1 Server-Verbindung
```bash
ssh username@ihr-server-ip
```

### 2.2 Docker Installation (falls nicht installiert)
```bash
# System update
sudo apt update && sudo apt upgrade -y

# Docker installieren
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER

# Docker Compose installieren
sudo curl -L "https://github.com/docker/compose/releases/download/v2.23.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Neustart für Gruppenberechtigung
sudo reboot
```

### 2.3 Projekt klonen
```bash
# Nach Neustart wieder einloggen
ssh username@ihr-server-ip

# Repository klonen
git clone https://github.com/IHR-USERNAME/neon-murer-website.git
cd neon-murer-website
```

## 🚀 3. Deployment Optionen

### Option A: VOLLAUTOMATISCH (Empfohlen!)
```bash
# Nur eine Datei herunterladen und Repository URL anpassen:
wget https://raw.githubusercontent.com/IHR-USERNAME/neon-murer-website/main/docker-compose.auto.yml

# URL in Datei anpassen (Zeile 10):
nano docker-compose.auto.yml
# context: https://github.com/IHR-USERNAME/neon-murer-website.git

# Starten - FERTIG!
docker-compose -f docker-compose.auto.yml up -d

# Website verfügbar unter: http://ihr-server-ip:3000
```

### Option B: Super-Quick Script
```bash
# Script herunterladen
wget https://raw.githubusercontent.com/IHR-USERNAME/neon-murer-website/main/quick-deploy.sh
chmod +x quick-deploy.sh

# Mit Repository URL ausführen - FERTIG!
./quick-deploy.sh https://github.com/IHR-USERNAME/neon-murer-website.git

# Website verfügbar unter: http://ihr-server-ip:3000
```

### Option C: Manuell klonen (wie vorher)
```bash
# Repository klonen
git clone https://github.com/IHR-USERNAME/neon-murer-website.git
cd neon-murer-website

# Mit vereinfachter Konfiguration
docker-compose -f docker-compose.simple.yml up -d --build

# Website verfügbar unter: http://ihr-server-ip:3000
```

### Option D: Professionelles Deployment mit Nginx
```bash
# Repository klonen
git clone https://github.com/IHR-USERNAME/neon-murer-website.git
cd neon-murer-website

# Mit Nginx Reverse Proxy
docker-compose up -d --build

# Website verfügbar unter: http://ihr-server-ip
```

## 🔧 4. Konfiguration anpassen

### 4.1 Domain konfigurieren (Option B)
```bash
# Nginx Konfiguration bearbeiten
nano nginx.conf

# Zeile ändern:
server_name ihr-domain.com;  # Statt "_"
```

### 4.2 SSL/HTTPS aktivieren (Optional)
```bash
# SSL Zertifikate erstellen (Let's Encrypt)
sudo apt install certbot
sudo certbot certonly --standalone -d ihr-domain.com

# Zertifikate kopieren
sudo mkdir -p ssl
sudo cp /etc/letsencrypt/live/ihr-domain.com/fullchain.pem ssl/cert.pem
sudo cp /etc/letsencrypt/live/ihr-domain.com/privkey.pem ssl/key.pem

# Nginx Konfiguration SSL-Sektion aktivieren
nano nginx.conf
# HTTPS server block auskommentieren
```

## 📊 5. Container Management

### 5.1 Status prüfen
```bash
# Container Status
docker-compose ps

# Logs anzeigen
docker-compose logs -f

# Einzelner Container Log
docker logs neon-murer-app
```

### 5.2 Updates deployen
```bash
# Code aktualisieren
git pull origin main

# Container neu bauen
docker-compose down
docker-compose up -d --build
```

### 5.3 Container stoppen/starten
```bash
# Stoppen
docker-compose down

# Starten
docker-compose up -d

# Neustart
docker-compose restart
```

## 🛡️ 6. Sicherheit & Performance

### 6.1 Firewall konfigurieren
```bash
sudo ufw enable
sudo ufw allow ssh
sudo ufw allow 80/tcp    # HTTP
sudo ufw allow 443/tcp   # HTTPS (bei SSL)
sudo ufw allow 3000/tcp  # Nur bei einfachem Deployment
```

### 6.2 Automatische Updates einrichten
```bash
# Backup Script erstellen
nano /home/username/backup.sh
```

```bash
#!/bin/bash
cd /home/username/neon-murer-website
docker-compose down
git pull origin main
docker-compose up -d --build
```

```bash
chmod +x /home/username/backup.sh

# Cronjob für tägliche Updates (optional)
crontab -e
# Zeile hinzufügen: 0 2 * * * /home/username/backup.sh
```

## 🔍 7. Troubleshooting

### 7.1 Container startet nicht
```bash
# Build ohne Cache
docker-compose build --no-cache

# Container Logs prüfen
docker-compose logs neon-murer-app
```

### 7.2 Port bereits belegt
```bash
# Prozess auf Port finden
sudo netstat -tulpn | grep :80

# Prozess beenden
sudo kill -9 PID
```

### 7.3 Speicher voll
```bash
# Docker aufräumen
docker system prune -a

# Alte Images löschen
docker image prune -a
```

## 📈 8. Monitoring & Wartung

### 8.1 System Monitoring
```bash
# System Ressourcen
htop
df -h
docker stats
```

### 8.2 Backup erstellen
```bash
# Docker Volumes sichern
docker run --rm -v neon-murer_data:/data -v $(pwd):/backup ubuntu tar czf /backup/backup.tar.gz /data
```

## 🌐 9. DNS & Domain Setup

### 9.1 DNS Konfiguration
1. In Ihrem Domain-Provider DNS-Panel:
   - A-Record: `ihr-domain.com` → `Server-IP`
   - CNAME: `www.ihr-domain.com` → `ihr-domain.com`

### 9.2 Domain Propagation prüfen
```bash
# DNS Propagation testen
nslookup ihr-domain.com
dig ihr-domain.com
```

## ✅ 10. Final Checklist

- [ ] Repository erstellt und Code hochgeladen
- [ ] Server mit Docker vorbereitet
- [ ] Projekt geklont und gestartet
- [ ] Website erreichbar
- [ ] Domain konfiguriert (falls vorhanden)
- [ ] SSL aktiviert (optional)
- [ ] Firewall konfiguriert
- [ ] Backup-Strategie eingerichtet

## 🆘 Support

Bei Problemen:
1. Logs prüfen: `docker-compose logs -f`
2. Container Status: `docker-compose ps`
3. System Ressourcen: `htop` & `df -h`

---

**🎉 Fertig! Ihre Neon Murer Website läuft jetzt professionell in Docker!** 