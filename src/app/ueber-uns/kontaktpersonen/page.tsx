import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'

export default function Kontaktpersonen() {
  const teamMembers = [
    {
      name: "Peter Murer",
      position: "Geschäftsführer & CEO",
      department: "Geschäftsleitung",
      phone: "+41 55 225 50 25",
      email: "peter.murer@neonmurer.ch",
      expertise: ["Geschäftsführung", "Strategische Planung", "Kundenbeziehungen"],
      description: "Mit über 30 Jahren Erfahrung in der Werbetechnik leitet Peter Murer das Unternehmen in der dritten Generation. Seine Vision und sein Engagement für Innovation haben Neon Murer zu einem der führenden Unternehmen der Branche gemacht.",
      image: "/images/person1.jpg",
      languages: ["Deutsch", "Englisch", "Französisch"]
    },
    {
      name: "Martin Schneider",
      position: "Verkaufsleiter",
      department: "Verkauf & Beratung",
      phone: "+41 55 225 50 26",
      email: "martin.schneider@neonmurer.ch",
      expertise: ["Verkaufsleitung", "Projektberatung", "Kostenkalkulationen"],
      description: "Martin Schneider ist Ihr Ansprechpartner für alle Verkaufsfragen und Projektberatungen. Mit seinem technischen Hintergrund und 20 Jahren Branchenerfahrung findet er für jede Anforderung die optimale Lösung.",
      image: "/images/person2.jpg",
      languages: ["Deutsch", "Englisch"]
    },
    {
      name: "Sandra Weber",
      position: "Projektleiterin",
      department: "Projektmanagement",
      phone: "+41 55 225 50 27",
      email: "sandra.weber@neonmurer.ch",
      expertise: ["Projektmanagement", "Koordination", "Qualitätssicherung"],
      description: "Sandra Weber koordiniert komplexe Projekte von der Planung bis zur Fertigstellung. Ihre strukturierte Arbeitsweise und ihr Blick fürs Detail sorgen dafür, dass jedes Projekt termingerecht und in höchster Qualität abgeschlossen wird.",
      image: "/images/person3.jpg",
      languages: ["Deutsch", "Französisch", "Italienisch"]
    },
    {
      name: "Thomas Meier",
      position: "Technischer Leiter",
      department: "Produktion & Technik",
      phone: "+41 55 225 50 28",
      email: "thomas.meier@neonmurer.ch",
      expertise: ["Produktionsleitung", "Technische Entwicklung", "LED-Systeme"],
      description: "Thomas Meier verantwortet die gesamte Produktion und technische Entwicklung. Als Experte für LED-Technologie und moderne Fertigungsverfahren sorgt er für innovative Lösungen und höchste Produktqualität.",
      image: "/images/person4_new.jpg",
      languages: ["Deutsch", "Englisch"]
    },
    {
      name: "Anna Zimmermann",
      position: "Designerin",
      department: "Design & Kreation",
      phone: "+41 55 225 50 29",
      email: "anna.zimmermann@neonmurer.ch",
      expertise: ["Grafikdesign", "Corporate Design", "Layoutentwicklung"],
      description: "Anna Zimmermann verwandelt Ihre Ideen in beeindruckende visuelle Konzepte. Mit ihrem kreativen Gespür und technischen Know-how entwickelt sie Designs, die nicht nur schön aussehen, sondern auch funktional überzeugen.",
      image: "/images/person5.jpg",
      languages: ["Deutsch", "Englisch", "Französisch"]
    },
    {
      name: "Markus Huber",
      position: "Montageleiter",
      department: "Montage & Service",
      phone: "+41 55 225 50 30",
      email: "markus.huber@neonmurer.ch",
      expertise: ["Montageplanung", "Serviceeinsätze", "Reparaturen"],
      description: "Markus Huber leitet unser erfahrenes Montageteam und ist verantwortlich für die fachgerechte Installation aller Anlagen. Mit seiner 25-jährigen Erfahrung meistert er auch die anspruchsvollsten Montagesituationen.",
      image: "/images/person6.jpg",
      languages: ["Deutsch", "Schweizerdeutsch"]
    }
  ]

  const departments = [
    {
      name: "Geschäftsleitung",
      description: "Strategische Führung und Unternehmensleitung",
      icon: "👔",
      color: "primary"
    },
    {
      name: "Verkauf & Beratung", 
      description: "Kundenberatung und Projektakquisition",
      icon: "🤝",
      color: "secondary"
    },
    {
      name: "Projektmanagement",
      description: "Koordination und Projektabwicklung", 
      icon: "📋",
      color: "accent"
    },
    {
      name: "Produktion & Technik",
      description: "Fertigung und technische Entwicklung",
      icon: "⚙️",
      color: "primary"
    },
    {
      name: "Design & Kreation",
      description: "Kreative Konzepte und Gestaltung",
      icon: "🎨", 
      color: "secondary"
    },
    {
      name: "Montage & Service",
      description: "Installation und Wartung vor Ort",
      icon: "🔧",
      color: "accent"
    }
  ]

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-content overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/team-gruppenfoto.jpg"
            alt="Neon Murer Team"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="breadcrumbs text-sm opacity-70 mb-4 justify-center">
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/ueber-uns">Über uns</Link></li>
                <li>Kontaktpersonen</li>
              </ul>
            </div>
            <h1 className="text-6xl font-bold mb-6">
              Unser Team
            </h1>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Lernen Sie die Menschen hinter Neon Murer kennen. Unser erfahrenes Team steht Ihnen 
              mit Kompetenz, Leidenschaft und 75 Jahren geballtem Know-how zur Seite.
            </p>
          </div>
        </div>
      </section>

      {/* Departments Overview */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Unsere Bereiche</h2>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              Kompetente Teams in allen Unternehmensbereichen
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept) => (
              <div key={dept.name} className="card bg-base-100 shadow-xl">
                <div className="card-body text-center">
                  <div className="text-4xl mb-3">{dept.icon}</div>
                  <h3 className="card-title justify-center text-primary text-lg">{dept.name}</h3>
                  <p className="text-sm text-base-content/70">{dept.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Ihre Ansprechpartner</h2>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              Direkter Kontakt zu unseren Experten - für jede Anfrage der richtige Ansprechpartner
            </p>
          </div>
          
          <div className="space-y-16">
            {teamMembers.map((member, index) => (
              <div key={member.name} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="card bg-base-200 shadow-xl">
                    <div className="card-body">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-primary mb-1">{member.name}</h3>
                          <p className="text-lg font-semibold text-secondary mb-1">{member.position}</p>
                          <div className="badge badge-outline">{member.department}</div>
                        </div>
                      </div>
                      
                      <p className="text-base-content/80 mb-6">{member.description}</p>
                      
                      <div className="space-y-4 mb-6">
                        <div className="flex items-center space-x-3">
                          <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                          </svg>
                          <a href={`tel:${member.phone}`} className="text-primary hover:text-secondary font-medium">
                            {member.phone}
                          </a>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                          <a href={`mailto:${member.email}`} className="text-primary hover:text-secondary font-medium">
                            {member.email}
                          </a>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <p className="text-sm font-semibold text-primary mb-2">Expertise:</p>
                        <div className="flex flex-wrap gap-2">
                          {member.expertise.map((skill) => (
                            <span key={skill} className="badge badge-primary badge-sm">{skill}</span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-sm font-semibold text-primary mb-2">Sprachen:</p>
                        <div className="flex flex-wrap gap-2">
                          {member.languages.map((lang) => (
                            <span key={lang} className="badge badge-outline badge-sm">{lang}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="relative overflow-hidden rounded-2xl shadow-xl">
                    <Image 
                      src={member.image}
                      alt={member.name}
                      width={500}
                      height={600}
                      className="w-full object-cover aspect-[4/5]"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Kontakt & Erreichbarkeit</h2>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              Wir sind für Sie da - persönlich, telefonisch oder per E-Mail
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body text-center">
                <div className="text-4xl mb-4">📞</div>
                <h3 className="card-title justify-center text-primary">Telefonisch</h3>
                <p className="text-base-content/80 mb-4">
                  Montag bis Freitag<br />
                  07:30 - 12:00 Uhr<br />
                  13:00 - 17:00 Uhr
                </p>
                <a href="tel:+41552255025" className="btn btn-primary">
                  +41 55 225 50 25
                </a>
              </div>
            </div>
            
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body text-center">
                <div className="text-4xl mb-4">📧</div>
                <h3 className="card-title justify-center text-primary">Per E-Mail</h3>
                <p className="text-base-content/80 mb-4">
                  Schnelle Antwort<br />
                  innerhalb von 24h<br />
                  an Werktagen
                </p>
                <a href="mailto:neon@neonmurer.ch" className="btn btn-primary">
                  neon@neonmurer.ch
                </a>
              </div>
            </div>
            
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body text-center">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="card-title justify-center text-primary">Vor Ort</h3>
                <p className="text-base-content/80 mb-4">
                  Persönliche Beratung<br />
                  nach Terminvereinbarung<br />
                  in Rapperswil oder Uznach
                </p>
                <Link href="/kontakt" className="btn btn-primary">
                  Termin vereinbaren
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-primary text-primary-content">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">24/7 Notfallservice</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Bei dringenden Reparaturen und Notfällen sind wir rund um die Uhr für Sie erreichbar.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+41552255025" className="btn btn-secondary btn-lg">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Notfall: +41 55 225 50 25
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Nehmen Sie Kontakt auf
          </h2>
          <p className="text-lg text-primary/80 mb-8 max-w-2xl mx-auto">
            Unser Team freut sich auf Ihre Anfrage. Gemeinsam entwickeln wir die perfekte Lösung für Ihr Projekt.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/kontakt" className="btn btn-primary btn-lg">
              Kontaktformular
            </Link>
            <Link href="/ueber-uns" className="btn btn-outline btn-primary btn-lg">
              Zurück zu Über uns
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
} 