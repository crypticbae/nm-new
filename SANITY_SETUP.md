# 🎨 Sanity CMS Setup für Neon Murer AG

Diese Anleitung zeigt dir, wie du **Sanity CMS** für die Neon Murer Website einrichtest und konfigurierst.

## 📋 Schritt 1: Sanity Account & Projekt erstellen

### 1.1 Sanity Account
1. Gehe zu **https://sanity.io**
2. Klicke **"Get started for free"**
3. Registriere dich mit GitHub/Google oder E-Mail
4. Verifiziere deine E-Mail-Adresse

### 1.2 Neues Projekt erstellen
```bash
# Sanity CLI installieren
npm install -g @sanity/cli

# Login in Sanity
sanity login

# Neues Projekt erstellen
sanity init

# Folge den Prompts:
# - Project name: "Neon Murer AG"
# - Use the default dataset configuration? Y
# - Project output path: ./sanity-studio
# - Select project template: Clean project with no predefined schemas
```

### 1.3 Projekt-IDs notieren
Nach dem Setup erhältst du:
- **Project ID**: `abc123def` (wird in NEXT_PUBLIC_SANITY_PROJECT_ID verwendet)
- **Dataset**: `production` (Standard)

## 🔧 Schritt 2: Environment Variables konfigurieren

### 2.1 .env.local erstellen
```bash
# In deinem Next.js Projekt (new/.env.local)
cp .env.local.example .env.local
```

### 2.2 Werte eintragen
```env
# .env.local
NEXT_PUBLIC_SANITY_PROJECT_ID=deine_project_id_hier
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=dein_api_token_hier
SANITY_REVALIDATE_SECRET=geheimer_webhook_schluessel
NEXTAUTH_URL=http://localhost:3000
```

### 2.3 API Token erstellen
1. Gehe zu **https://sanity.io/manage**
2. Wähle dein Projekt
3. **Settings** → **API** → **Tokens**
4. **Add API token**
   - Name: "Next.js Website"
   - Permissions: **Editor** (für Read/Write)
   - Save token und in `.env.local` eintragen

## 📊 Schritt 3: Schema-Definitionen erstellen

### 3.1 Schemas für Neon Murer Content-Typen

Erstelle in `sanity-studio/schemas/` folgende Dateien:

#### **servicePage.js** (Lichtwerbung, Beschriftungen, etc.)
```javascript
export default {
  name: 'servicePage',
  title: 'Service Seite',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titel',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'category',
      title: 'Kategorie',
      type: 'string',
      options: {
        list: [
          {title: 'Lichtwerbung', value: 'lichtwerbung'},
          {title: 'Beschriftungen', value: 'beschriftungen'},
          {title: 'Digital Signage', value: 'digital-signage'},
          {title: 'Dienstleistungen', value: 'dienstleistungen'}
        ]
      }
    },
    {
      name: 'description',
      title: 'Kurzbeschreibung',
      type: 'text',
      rows: 3
    },
    {
      name: 'content',
      title: 'Inhalt',
      type: 'array',
      of: [{type: 'block'}]
    },
    {
      name: 'images',
      title: 'Bilder',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}]
    },
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      name: 'price',
      title: 'Preis (optional)',
      type: 'string'
    },
    {
      name: 'order',
      title: 'Reihenfolge',
      type: 'number'
    }
  ]
}
```

#### **teamMember.js** (Kontaktpersonen)
```javascript
export default {
  name: 'teamMember',
  title: 'Team Mitglied',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'position',
      title: 'Position',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'department',
      title: 'Abteilung',
      type: 'string',
      options: {
        list: [
          'Geschäftsführung',
          'Verkauf',
          'Projektleitung',
          'Technik',
          'Design',
          'Montage'
        ]
      }
    },
    {
      name: 'email',
      title: 'E-Mail',
      type: 'email'
    },
    {
      name: 'phone',
      title: 'Telefon',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Foto',
      type: 'image',
      options: {hotspot: true}
    },
    {
      name: 'bio',
      title: 'Biografie',
      type: 'array',
      of: [{type: 'block'}]
    },
    {
      name: 'order',
      title: 'Reihenfolge',
      type: 'number'
    }
  ]
}
```

#### **competency.js** (Fachkompetenzen)
```javascript
export default {
  name: 'competency',
  title: 'Fachkompetenz',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titel',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Beschreibung',
      type: 'text'
    },
    {
      name: 'icon',
      title: 'Icon (Emoji oder Text)',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Bild',
      type: 'image',
      options: {hotspot: true}
    },
    {
      name: 'details',
      title: 'Details',
      type: 'array',
      of: [{type: 'block'}]
    },
    {
      name: 'order',
      title: 'Reihenfolge',
      type: 'number'
    }
  ]
}
```

### 3.2 Schema Index aktualisieren
```javascript
// sanity-studio/schemas/index.js
import servicePage from './servicePage'
import teamMember from './teamMember'
import competency from './competency'
// ... weitere Schemas

export const schemaTypes = [
  servicePage,
  teamMember,
  competency,
  // ... weitere
]
```

## 🚀 Schritt 4: Studio starten & Content erstellen

### 4.1 Studio lokal starten
```bash
cd sanity-studio
npm run dev
# Studio läuft auf http://localhost:3333
```

### 4.2 Erste Inhalte erstellen
1. **Team Members**: Erstelle die 6 Teammitglieder aus der bestehenden Seite
2. **Competencies**: Übertrage die 9 Fachkompetenzen
3. **Service Pages**: Erstelle Seiten für Lichtwerbung-Services

### 4.3 Studio deployen (optional)
```bash
sanity deploy
# Wähle einen Studio-Namen, z.B. "neon-murer-cms"
# Studio verfügbar unter: https://neon-murer-cms.sanity.studio
```

## 🔄 Schritt 5: Webhooks für Live-Updates

### 5.1 Webhook konfigurieren
1. **Sanity Dashboard** → **Settings** → **Webhooks**
2. **Add webhook**:
   - Name: "Next.js Revalidation"
   - URL: `https://deine-domain.com/api/revalidate?secret=DEIN_SECRET`
   - Dataset: `production`
   - Trigger on: **Create**, **Update**, **Delete**

### 5.2 Webhook testen
```bash
# Test-Request
curl -X POST "http://localhost:3000/api/revalidate?secret=test123" \
  -H "Content-Type: application/json" \
  -d '{"type": "teamMember"}'
```

## 📝 Schritt 6: Integration testen

### 6.1 Test-Page aufrufen
```bash
# Next.js Development Server starten
npm run dev

# Sanity-powered Seite testen:
# http://localhost:3000/ueber-uns/kontaktpersonen/sanity
```

### 6.2 Content-Updates testen
1. **Studio öffnen**: http://localhost:3333
2. **Team Member bearbeiten**
3. **Änderung speichern**
4. **Website refreshen** → Änderung sollte sichtbar sein

## 🎯 Schritt 7: Production Deployment

### 7.1 Environment Variables setzen
```bash
# In deiner Production-Umgebung (z.B. Vercel, Netlify)
NEXT_PUBLIC_SANITY_PROJECT_ID=deine_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=dein_production_token
SANITY_REVALIDATE_SECRET=sicherer_webhook_secret
```

### 7.2 Docker Integration
Die Sanity-Integration ist bereits im Docker-Setup enthalten:
- ✅ Dependencies sind installiert
- ✅ Environment Variables werden geladen
- ✅ API Routes funktionieren

## 🛠️ Troubleshooting

### Häufige Probleme:

**❌ "Project ID not found"**
```bash
# Lösung: Korrekte Project ID in .env.local setzen
NEXT_PUBLIC_SANITY_PROJECT_ID=abc123def
```

**❌ "Unauthorized"**
```bash
# Lösung: API Token mit Editor-Rechten erstellen
SANITY_API_TOKEN=sk_test_...
```

**❌ "Content not loading"**
```bash
# Lösung: Dataset prüfen
NEXT_PUBLIC_SANITY_DATASET=production
```

## ✅ Nächste Schritte

Nach dem Setup kannst du:

1. **🎨 Alle bestehenden Inhalte** in Sanity migrieren
2. **📄 Weitere Content-Typen** erstellen (Blog, News, etc.)
3. **🌍 Mehrsprachigkeit** hinzufügen
4. **🔧 Custom Studio Components** entwickeln
5. **📊 Analytics & SEO** erweitern

## 📞 Support

Bei Fragen zur Sanity-Integration:
- **Sanity Docs**: https://sanity.io/docs
- **Next.js Integration**: https://github.com/sanity-io/next-sanity
- **Community**: https://slack.sanity.io

---

**🎉 Herzlichen Glückwunsch!** Du hast erfolgreich Sanity CMS in die Neon Murer Website integriert! 