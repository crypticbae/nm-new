# 🚀 SUPER EINFACHES DEPLOYMENT

## 🎯 Ziel
Website deployen OHNE Repository klonen zu müssen - nur 2-3 Befehle!

## 📋 Was Sie brauchen:
- Linux Server mit Docker
- Repository URL (nach Upload zu GitHub/GitLab)

---

## ⚡ OPTION 1: Ein-Befehl-Deployment

```bash
# 1. Script herunterladen
wget https://raw.githubusercontent.com/IHR-USERNAME/neon-murer-website/main/quick-deploy.sh
chmod +x quick-deploy.sh

# 2. Mit Ihrer Repository URL ausführen - FERTIG!
./quick-deploy.sh https://github.com/IHR-USERNAME/neon-murer-website.git
```

**Das war's! Website läuft unter `http://ihr-server-ip:3000`**

---

## 🎯 OPTION 2: Docker-Compose Datei

```bash
# 1. Compose-Datei herunterladen
wget https://raw.githubusercontent.com/IHR-USERNAME/neon-murer-website/main/docker-compose.auto.yml

# 2. Repository URL anpassen
nano docker-compose.auto.yml
# Zeile 10 ändern: context: https://github.com/IHR-USERNAME/neon-murer-website.git

# 3. Starten - FERTIG!
docker-compose -f docker-compose.auto.yml up -d
```

**Das war's! Website läuft unter `http://ihr-server-ip:3000`**

---

## 🔧 Verwaltung

```bash
# Status prüfen
docker ps

# Logs anzeigen
docker logs neon-murer-auto

# Stoppen
docker stop neon-murer-auto

# Löschen
docker rm neon-murer-auto
```

---

## 🌐 Zugriff

Nach erfolgreichem Deployment ist Ihre Website verfügbar unter:

- **Lokal:** http://localhost:3000
- **Server:** http://IHR-SERVER-IP:3000
- **Domain:** http://ihre-domain.com:3000 (bei Domain-Setup)

---

## 🆘 Troubleshooting

### Website lädt nicht?
```bash
# Container Status prüfen
docker ps -a

# Logs anzeigen
docker logs neon-murer-auto
```

### Port bereits belegt?
```bash
# Anderen Container stoppen
docker stop $(docker ps -q)

# Oder anderen Port verwenden (Datei bearbeiten)
nano docker-compose.auto.yml
# ports: ändern von "3000:3000" zu "8080:3000"
```

### Updates deployen?
```bash
# Container stoppen und neu bauen
docker stop neon-murer-auto
docker rm neon-murer-auto
docker-compose -f docker-compose.auto.yml up -d --build
```

---

## ✅ Fertig!

Ihre moderne Neon Murer Website läuft jetzt professionell in Docker! 🎉

**Wichtig:** Nach dem Upload zu GitHub/GitLab vergessen Sie nicht, die Repository URL in den Beispielen zu ändern! 