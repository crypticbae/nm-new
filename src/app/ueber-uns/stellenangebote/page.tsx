import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'

export default function Stellenangebote() {
  const jobOffers = [
    {
      title: "Elektriker/in EFZ",
      department: "Montage & Service",
      type: "Vollzeit",
      location: "Rapperswil-Jona",
      salary: "CHF 65'000 - 75'000",
      description: "Für unser Montageteam suchen wir eine erfahrene Elektrikerin oder einen erfahrenen Elektriker mit ESTI-Berechtigung für die Installation und Wartung von Lichtwerbeanlagen.",
      requirements: [
        "Abgeschlossene Ausbildung als Elektriker/in EFZ",
        "ESTI-Berechtigung oder Bereitschaft diese zu erwerben",
        "Erfahrung in der Elektroinstallation",
        "Schwindelfreiheit für Arbeiten in der Höhe",
        "Führerschein Kategorie B",
        "Teamfähigkeit und Zuverlässigkeit"
      ],
      benefits: [
        "Moderne Arbeitsplätze und Ausrüstung",
        "13. Monatslohn",
        "5 Wochen Ferien",
        "Weiterbildungsmöglichkeiten",
        "Betriebliche Altersvorsorge",
        "Firmenwagen für Montagen"
      ],
      responsibilities: [
        "Installation von LED- und Neonsystemen", 
        "Wartung und Reparatur von Werbeanlagen",
        "Elektroarbeiten nach ESTI-Vorschriften",
        "Kundenbetreuung vor Ort",
        "Dokumentation der Arbeiten"
      ]
    },
    {
      title: "Polymechaniker/in EFZ", 
      department: "Produktion",
      type: "Vollzeit",
      location: "Rapperswil-Jona",
      salary: "CHF 60'000 - 70'000",
      description: "Zur Verstärkung unserer Produktionsabteilung suchen wir eine motivierte Polymechanikerin oder einen motivierten Polymechaniker für die Bearbeitung von Metall- und Kunststoffkomponenten.",
      requirements: [
        "Abgeschlossene Lehre als Polymechaniker/in EFZ",
        "Erfahrung mit CNC-Maschinen von Vorteil",
        "Präzise und sorgfältige Arbeitsweise",
        "Technisches Verständnis",
        "Teamfähigkeit",
        "Deutschkenntnisse"
      ],
      benefits: [
        "Moderne CNC-Maschinen und Werkzeuge",
        "Abwechslungsreiche Projekte",
        "Kollegiales Arbeitsklima",
        "Weiterbildung in neuen Technologien",
        "Flexible Arbeitszeiten",
        "Gute Verkehrsanbindung"
      ],
      responsibilities: [
        "CNC-Bearbeitung von Metall und Kunststoff",
        "Fertigung von Einzelteilen und Serien",
        "Qualitätskontrolle der Produkte",
        "Rüsten und Einstellen der Maschinen",
        "Wartung der Produktionsanlagen"
      ]
    },
    {
      title: "Grafiker/in EFZ",
      department: "Design & Kreation", 
      type: "Vollzeit",
      location: "Rapperswil-Jona",
      salary: "CHF 55'000 - 65'000",
      description: "Für unser kreatives Team suchen wir eine talentierte Grafikerin oder einen talentierten Grafiker mit Leidenschaft für Werbetechnik und Design.",
      requirements: [
        "Abgeschlossene Ausbildung als Grafiker/in EFZ",
        "Sehr gute Kenntnisse in Adobe Creative Suite",
        "Erfahrung im Bereich Werbetechnik von Vorteil",
        "Kreativität und Ideenreichtum",
        "Kundenorientiertes Denken",
        "Teamgeist und Kommunikationsstärke"
      ],
      benefits: [
        "Kreative und abwechslungsreiche Projekte",
        "Modernste Design-Software und Hardware",
        "Einblick in alle Produktionsprozesse",
        "Weiterbildungen und Seminare",
        "Junges, dynamisches Team",
        "Flexible Arbeitsgestaltung"
      ],
      responsibilities: [
        "Gestaltung von Logos und Corporate Designs",
        "Erstellung von Druckvorlagen",
        "Entwicklung kreativer Konzepte",
        "Kundenberatung und Präsentationen",
        "Vorbereitung für Produktionsabläufe"
      ]
    },
    {
      title: "Lernende/r Polymechaniker/in EFZ",
      department: "Ausbildung",
      type: "Lehrstelle",
      location: "Rapperswil-Jona", 
      salary: "Nach Lehrvertrag",
      description: "Wir bieten motivierten Jugendlichen eine spannende Ausbildung zum Polymechaniker/zur Polymechanikerin in einem innovativen Umfeld mit modernster Technik.",
      requirements: [
        "Abgeschlossene Sekundarschule",
        "Interesse an Technik und Mechanik",
        "Handwerkliches Geschick",
        "Zuverlässigkeit und Lernbereitschaft",
        "Teamfähigkeit",
        "Mathematisches Verständnis"
      ],
      benefits: [
        "Umfassende Ausbildung an modernen Maschinen",
        "Erfahrene Ausbildner",
        "Übernahme nach erfolgreicher Lehre möglich",
        "Lehrlingslager und Events",
        "Weiterbildungsmöglichkeiten",
        "Zukunftssichere Branche"
      ],
      responsibilities: [
        "Erlernen der Metallbearbeitung",
        "Bedienung von CNC-Maschinen",
        "Qualitätskontrolle",
        "Projektarbeiten",
        "Rotation durch alle Abteilungen"
      ]
    }
  ]

  const benefits = [
    {
      title: "Moderne Arbeitsplätze",
      description: "State-of-the-Art Maschinen und Technologien",
      icon: "💻"
    },
    {
      title: "Weiterbildung",
      description: "Kontinuierliche Schulungen und Zertifizierungen",
      icon: "📚"
    },
    {
      title: "Flexibilität",
      description: "Flexible Arbeitszeiten und Home-Office Möglichkeiten",
      icon: "⏰"
    },
    {
      title: "Team-Events",
      description: "Regelmässige Firmenanlässe und Teambuilding",
      icon: "🎉"
    },
    {
      title: "Sicherheit",
      description: "Stabiler Arbeitsplatz in wachsendem Unternehmen",
      icon: "🛡️"
    },
    {
      title: "Benefits",
      description: "13. Monatslohn, 5 Wochen Ferien, Pensionskasse",
      icon: "💰"
    }
  ]

  const departments = [
    {
      name: "Produktion",
      description: "CNC-Bearbeitung, Metallbau, Glasbläserei",
      openPositions: 2
    },
    {
      name: "Montage & Service",
      description: "Installation, Wartung, Reparatur",
      openPositions: 1
    },
    {
      name: "Design & Kreation",
      description: "Grafik, Design, Konzeption",
      openPositions: 1
    },
    {
      name: "Verkauf & Beratung",
      description: "Kundenberatung, Projektakquisition",
      openPositions: 0
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
            alt="Karriere bei Neon Murer"
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
                <li>Stellenangebote</li>
              </ul>
            </div>
            <h1 className="text-6xl font-bold mb-6">
              Karriere bei Neon Murer
            </h1>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Werden Sie Teil unseres erfolgreichen Teams! Wir bieten spannende Karrieremöglichkeiten 
              in einem traditionellen Familienunternehmen mit innovativer Ausrichtung.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="stat bg-primary-content/20 backdrop-blur-sm rounded-lg p-4">
                <div className="stat-value text-secondary text-2xl">20+</div>
                <div className="stat-title text-sm opacity-80">Mitarbeiter</div>
              </div>
              <div className="stat bg-primary-content/20 backdrop-blur-sm rounded-lg p-4">
                <div className="stat-value text-secondary text-2xl">4</div>
                <div className="stat-title text-sm opacity-80">Offene Stellen</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Warum Neon Murer?</h2>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              Entdecken Sie die Vorteile einer Karriere in unserem Unternehmen
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="card bg-base-200 shadow-xl">
                <div className="card-body text-center">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="card-title justify-center text-primary">{benefit.title}</h3>
                  <p className="text-base-content/80">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Job Offers */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Aktuelle Stellenangebote</h2>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              Finden Sie Ihren Traumjob in unserem dynamischen Team
            </p>
          </div>
          
          <div className="space-y-8">
            {jobOffers.map((job) => (
              <div key={job.title} className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <div className="flex flex-wrap items-start justify-between mb-6">
                    <div>
                      <h3 className="card-title text-primary text-2xl mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        <div className="badge badge-secondary">{job.department}</div>
                        <div className="badge badge-outline">{job.type}</div>
                        <div className="badge badge-outline">{job.location}</div>
                        <div className="badge badge-primary">{job.salary}</div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-base-content/80 mb-6">{job.description}</p>
                  
                  <div className="grid lg:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold text-primary mb-3">Anforderungen:</h4>
                      <ul className="space-y-1">
                        {job.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <span className="text-secondary mt-1">•</span>
                            <span className="text-sm text-base-content/80">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-primary mb-3">Aufgaben:</h4>
                      <ul className="space-y-1">
                        {job.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <span className="text-secondary mt-1">•</span>
                            <span className="text-sm text-base-content/80">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-primary mb-3">Wir bieten:</h4>
                      <ul className="space-y-1 mb-6">
                        {job.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <span className="text-secondary mt-1">•</span>
                            <span className="text-sm text-base-content/80">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex flex-wrap gap-2">
                        <a href="mailto:neon@neonmurer.ch?subject=Bewerbung: {{job.title}}" className="btn btn-primary btn-sm">
                          Jetzt bewerben
                        </a>
                        <a href="tel:+41552255025" className="btn btn-outline btn-primary btn-sm">
                          Rückfragen
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Overview */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Unsere Bereiche</h2>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              Vielfältige Karrieremöglichkeiten in verschiedenen Fachbereichen
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept) => (
              <div key={dept.name} className="card bg-base-200 shadow-xl">
                <div className="card-body text-center">
                  <h3 className="card-title justify-center text-primary">{dept.name}</h3>
                  <p className="text-base-content/80 mb-4">{dept.description}</p>
                  <div className="badge badge-secondary">
                    {dept.openPositions} offene Stellen
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Bewerbungsprozess</h2>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              So einfach läuft Ihre Bewerbung bei uns ab
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Bewerbung senden</h3>
              <p className="text-sm text-base-content/70">
                Per E-Mail mit Lebenslauf, Zeugnissen und Motivationsschreiben
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Erstkontakt</h3>
              <p className="text-sm text-base-content/70">
                Wir melden uns innerhalb von 3 Werktagen telefonisch oder per E-Mail
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Vorstellungsgespräch</h3>
              <p className="text-sm text-base-content/70">
                Persönliches Gespräch in unseren Räumlichkeiten mit Betriebsbesichtigung
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Arbeitsvertrag</h3>
              <p className="text-sm text-base-content/70">
                Bei gegenseitigem Interesse erfolgt die Vertragsunterzeichnung
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Apprenticeship Section */}
      <section className="py-20 bg-primary text-primary-content">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Ausbildung bei Neon Murer</h2>
              <p className="text-xl opacity-90 mb-8">
                Wir bilden die Fachkräfte von morgen aus. Mit modernster Technik, erfahrenen Ausbildnern 
                und einem breiten Spektrum an Lernmöglichkeiten bieten wir eine erstklassige Berufsausbildung.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <span className="text-secondary text-xl">🎓</span>
                  <span>Umfassende Ausbildung in allen Bereichen</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-secondary text-xl">👨‍🏫</span>
                  <span>Erfahrene Berufsbildner</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-secondary text-xl">🏭</span>
                  <span>Modernste Maschinen und Technologien</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-secondary text-xl">🚀</span>
                  <span>Übernahmemöglichkeit nach der Lehre</span>
                </div>
              </div>
              
              <a href="mailto:neon@neonmurer.ch?subject=Interesse an Lehrstelle" className="btn btn-secondary btn-lg">
                Über Lehrstellen informieren
              </a>
            </div>
            
            <div className="relative">
              <Image 
                src="/images/mitarbeiter.jpg"
                alt="Ausbildung bei Neon Murer"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Applications */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Interessiert?</h2>
              <p className="text-lg text-primary/80 mb-8">
                Haben wir Ihr Interesse geweckt? Senden Sie uns Ihre vollständigen Bewerbungsunterlagen 
                oder rufen Sie uns für ein unverbindliches Gespräch an.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span className="text-primary font-medium">neon@neonmurer.ch</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className="text-primary font-medium">+41 55 225 50 25</span>
                </div>
              </div>
            </div>
            
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-primary mb-4">Bewerbungsunterlagen</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start space-x-2">
                    <span className="text-secondary mt-1">✓</span>
                    <span>Vollständiger Lebenslauf</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-secondary mt-1">✓</span>
                    <span>Motivationsschreiben</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-secondary mt-1">✓</span>
                    <span>Zeugnisse und Diplome</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-secondary mt-1">✓</span>
                    <span>Arbeitszeugnisse</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-secondary mt-1">✓</span>
                    <span>Aktuelles Foto (optional)</span>
                  </li>
                </ul>
                
                <div className="card-actions justify-center mt-6">
                  <a href="mailto:neon@neonmurer.ch?subject=Bewerbung" className="btn btn-primary">
                    Jetzt bewerben
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
} 