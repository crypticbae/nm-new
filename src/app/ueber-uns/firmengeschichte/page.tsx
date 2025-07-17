import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'

export default function Firmengeschichte() {
  const timelineEvents = [
    {
      year: "1949",
      title: "Die Gründung",
      subtitle: "Josef Murer startet als Einzelunternehmer",
      description: "Josef Murer gründet seine Einzelfirma in Rapperswil mit dem Fokus auf traditionelle Werbetechnik und Schildermalerei. Mit viel Herzblut und handwerklichem Können legt er den Grundstein für das heutige Unternehmen.",
      details: [
        "Start als Ein-Mann-Betrieb in Rapperswil",
        "Fokus auf Schildermalerei und traditionelle Werbetechnik",
        "Aufbau erster Kundenkontakte in der Region",
        "Handwerkliche Präzision als Markenzeichen"
      ],
      image: "/images/detail1.jpg",
      milestone: "Unternehmensgründung"
    },
    {
      year: "1960",
      title: "Erste Expansion",
      subtitle: "Wachstum und neue Technologien",
      description: "Das Unternehmen wächst stetig und Josef Murer stellt die ersten Mitarbeiter ein. Neue Technologien wie die ersten Leuchtreklamen kommen zum Einsatz und erweitern das Dienstleistungsspektrum erheblich.",
      details: [
        "Einstellung der ersten Mitarbeiter",
        "Einstieg in die Lichtwerbung",
        "Erweiterung der Werkstätten",
        "Erste größere Projekte in der Ostschweiz"
      ],
      image: "/images/detail2.jpg",
      milestone: "Erste Mitarbeiter"
    },
    {
      year: "1975",
      title: "Technologischer Durchbruch",
      subtitle: "Innovation in der Lichtwerbung",
      description: "Die 70er Jahre bringen einen technologischen Wandel. Neon Murer investiert in moderne Produktionsanlagen und erweitert das Angebot um professionelle Lichtwerbung und Neontechnik.",
      details: [
        "Aufbau einer eigenen Glasbläserei",
        "Investition in Neontechnik",
        "Erweiterung des Produktionsstandorts",
        "Spezialisierung auf Leuchtschriften"
      ],
      image: "/images/detail3.jpg",
      milestone: "Neon-Spezialisierung"
    },
    {
      year: "1985",
      title: "Generationswechsel",
      subtitle: "Die zweite Generation übernimmt",
      description: "Die nächste Generation der Familie Murer tritt ins Unternehmen ein und bringt frische Ideen mit. Moderne Managementmethoden und neue Geschäftsfelder werden erschlossen.",
      details: [
        "Eintritt der zweiten Generation",
        "Modernisierung der Geschäftsprozesse",
        "Erschließung neuer Märkte",
        "Ausbau der Kundenbasis"
      ],
      image: "/images/detail4.jpg",
      milestone: "2. Generation"
    },
    {
      year: "1990",
      title: "Digitale Revolution",
      subtitle: "Computer und moderne Technik",
      description: "Die 90er Jahre stehen im Zeichen der Digitalisierung. Neon Murer investiert in computergesteuerte Produktionsanlagen und erweitert das Angebot um Digitaldruck und moderne Beschriftungstechniken.",
      details: [
        "Einführung computergesteuerter Anlagen",
        "Start des Digitaldrucks",
        "Modernisierung der Designabteilung",
        "Erste LED-Experimente"
      ],
      image: "/images/detail5.jpg",
      milestone: "Digitalisierung"
    },
    {
      year: "2000",
      title: "Neues Jahrtausend",
      subtitle: "Expansion und Standorterweiterung",
      description: "Mit der Jahrtausendwende wagt Neon Murer den nächsten großen Schritt: Die Eröffnung eines zweiten Standorts in Uznach erweitert die Präsenz in der Ostschweiz erheblich.",
      details: [
        "Eröffnung Standort Uznach",
        "Verdoppelung der Produktionskapazität",
        "Aufbau eines Service-Teams",
        "Erste Großprojekte"
      ],
      image: "/images/detail6.jpg",
      milestone: "Zweiter Standort"
    },
    {
      year: "2006",
      title: "Umwandlung zur AG",
      subtitle: "Professionalisierung der Strukturen",
      description: "Das gewachsene Unternehmen wird zur Aktiengesellschaft umgewandelt. Diese Strukturanpassung ermöglicht weiteres Wachstum und professionellere Geschäftsprozesse.",
      details: [
        "Umwandlung zur Neon Murer AG",
        "Professionalisierung der Strukturen",
        "Aufbau eines Verwaltungsrats",
        "Strategische Neuausrichtung"
      ],
      image: "/images/detail7.jpg",
      milestone: "AG-Gründung"
    },
    {
      year: "2010",
      title: "LED-Revolution",
      subtitle: "Pionier der LED-Technologie",
      description: "Neon Murer erkennt früh das Potenzial der LED-Technologie und wird zu einem der ersten Anbieter energieeffizienter LED-Lösungen in der Schweiz.",
      details: [
        "Kompletter Umstieg auf LED-Technik",
        "Entwicklung eigener LED-Systeme",
        "Energieberatung für Kunden",
        "Retrofit-Programme für alte Anlagen"
      ],
      image: "/images/detail8.jpg",
      milestone: "LED-Pionier"
    },
    {
      year: "2015",
      title: "Dritte Generation",
      subtitle: "Kontinuität und Innovation",
      description: "Die dritte Generation der Familie Murer tritt ins Unternehmen ein und verbindet traditionelle Werte mit modernen Innovationen. Neue Geschäftsfelder werden erschlossen.",
      details: [
        "Eintritt der dritten Generation",
        "Start Digital Signage",
        "Modernisierung der IT-Infrastruktur",
        "Nachhaltigkeitsinitiative"
      ],
      image: "/images/detail9.jpg",
      milestone: "3. Generation"
    },
    {
      year: "2020",
      title: "Digital Signage",
      subtitle: "Einstieg in die digitale Zukunft",
      description: "Mit dem Einstieg in Digital Signage und interaktive Display-Lösungen positioniert sich Neon Murer für die digitale Zukunft der Werbetechnik.",
      details: [
        "Aufbau Digital Signage Abteilung",
        "Partnerschaften mit Tech-Unternehmen",
        "Schulung der Mitarbeiter",
        "Erste interaktive Projekte"
      ],
      image: "/images/detail10.jpg",
      milestone: "Digital Signage"
    },
    {
      year: "2024",
      title: "75 Jahre Erfolg",
      subtitle: "Tradition trifft Innovation",
      description: "2024 feiert Neon Murer 75 Jahre Firmengeschichte. Das Unternehmen blickt stolz auf eine erfolgreiche Vergangenheit zurück und plant innovativ für die Zukunft.",
      details: [
        "75-jähriges Firmenjubiläum",
        "Modernste Produktionstechnik",
        "Nachhaltige Unternehmensstrategie",
        "Digitale Transformation"
      ],
      image: "/images/detail11.jpg",
      milestone: "75 Jahre"
    }
  ]

  const achievements = [
    {
      title: "Über 10.000 Projekte",
      description: "Realisierte Projekte seit 1949",
      icon: "🏆"
    },
    {
      title: "3 Generationen",
      description: "Familienunternehmen in dritter Generation",
      icon: "👨‍👩‍👧‍👦"
    },
    {
      title: "75 Jahre",
      description: "Kontinuierliches Wachstum und Innovation", 
      icon: "📅"
    },
    {
      title: "20+ Mitarbeiter",
      description: "Erfahrenes Team von Spezialisten",
      icon: "👥"
    }
  ]

  const values = [
    {
      title: "Tradition & Erfahrung",
      description: "75 Jahre gesammelte Expertise und bewährte Qualität",
      icon: "🏛️"
    },
    {
      title: "Innovation & Fortschritt", 
      description: "Immer am Puls der Zeit mit neuesten Technologien",
      icon: "🚀"
    },
    {
      title: "Qualität & Zuverlässigkeit",
      description: "Schweizer Präzision und verlässliche Partnerschaft",
      icon: "⭐"
    },
    {
      title: "Nachhaltigkeit & Zukunft",
      description: "Verantwortungsvolle Lösungen für kommende Generationen",
      icon: "🌱"
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
            alt="Neon Murer Geschichte"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="breadcrumbs text-sm opacity-70 mb-4 justify-center">
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/ueber-uns">Über uns</Link></li>
                <li>Firmengeschichte</li>
              </ul>
            </div>
            <h1 className="text-6xl font-bold mb-6">
              Firmengeschichte
            </h1>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              75 Jahre Innovation, Wachstum und Leidenschaft. Erfahren Sie, wie aus einer kleinen 
              Schildermalerei eines der führenden Werbetechnik-Unternehmen der Schweiz wurde.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="stat bg-primary-content/20 backdrop-blur-sm rounded-lg p-4">
                <div className="stat-value text-secondary text-2xl">1949</div>
                <div className="stat-title text-sm opacity-80">Gründungsjahr</div>
              </div>
              <div className="stat bg-primary-content/20 backdrop-blur-sm rounded-lg p-4">
                <div className="stat-value text-secondary text-2xl">2024</div>
                <div className="stat-title text-sm opacity-80">75 Jahre später</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement) => (
              <div key={achievement.title} className="text-center">
                <div className="text-4xl mb-3">{achievement.icon}</div>
                <div className="text-2xl font-bold text-primary mb-1">{achievement.title}</div>
                <div className="text-primary/80 text-sm">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Unsere Reise durch die Zeit</h2>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              Von der Gründung 1949 bis heute - jeder Meilenstein hat uns geprägt
            </p>
          </div>
          
          <div className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            {timelineEvents.map((event, index) => (
              <li key={event.year}>
                <div className="timeline-middle">
                  <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                    <span className="text-primary text-xs font-bold">{index + 1}</span>
                  </div>
                </div>
                <div className={`timeline-${index % 2 === 0 ? 'start' : 'end'} md:text-${index % 2 === 0 ? 'end' : 'start'} mb-10`}>
                  <div className="card bg-base-200 shadow-xl">
                    <figure className="h-64">
                      <Image
                        src={event.image}
                        alt={event.title}
                        width={600}
                        height={400}
                        className="object-cover w-full h-full"
                      />
                    </figure>
                    <div className="card-body">
                      <div className="flex items-center justify-between mb-4">
                        <div className="badge badge-primary text-lg font-bold px-4 py-2">{event.year}</div>
                        <div className="badge badge-secondary">{event.milestone}</div>
                      </div>
                      <h3 className="card-title text-primary text-xl">{event.title}</h3>
                      <p className="text-secondary font-semibold mb-3">{event.subtitle}</p>
                      <p className="text-base-content/80 mb-4">{event.description}</p>
                      
                      <div className="space-y-2">
                        {event.details.map((detail, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-base-content/70">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="bg-secondary" />
              </li>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Unsere Werte</h2>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              Was uns seit 75 Jahren antreibt und auch in Zukunft leiten wird
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="card bg-base-100 shadow-xl">
                <div className="card-body text-center">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="card-title justify-center text-primary">{value.title}</h3>
                  <p className="text-base-content/80">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Evolution Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Technologische Evolution</h2>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              Wie sich unsere Technologien über die Jahrzehnte entwickelt haben
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-primary">1949-1980: Handwerk</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Traditionelle Schildermalerei</li>
                  <li>• Handwerkliche Metallbearbeitung</li>
                  <li>• Erste Leuchtreklamen</li>
                  <li>• Glasbläserei aufgebaut</li>
                </ul>
              </div>
            </div>
            
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-primary">1980-2010: Technik</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Computergesteuerte Anlagen</li>
                  <li>• Digitaldruck eingeführt</li>
                  <li>• CNC-Bearbeitung</li>
                  <li>• Erste LED-Systeme</li>
                </ul>
              </div>
            </div>
            
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-primary">2010-heute: Digital</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Vollständige LED-Umstellung</li>
                  <li>• Digital Signage</li>
                  <li>• Smart Control Systeme</li>
                  <li>• Nachhaltige Technologien</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-20 bg-primary text-primary-content">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Unser Vermächtnis</h2>
              <p className="text-xl opacity-90 mb-8">
                75 Jahre Leidenschaft für Lichtwerbung haben uns zu dem gemacht, was wir heute sind. 
                Drei Generationen haben das Unternehmen geprägt und für die Zukunft gerüstet.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <span className="text-secondary text-xl">🏗️</span>
                  <span>Über 10.000 realisierte Projekte</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-secondary text-xl">🌍</span>
                  <span>Projekte in der ganzen Schweiz</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-secondary text-xl">👨‍👩‍👧‍👦</span>
                  <span>Drei Generationen Familienbetrieb</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-secondary text-xl">⚡</span>
                  <span>Pionier der LED-Technologie</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Link href="/ueber-uns" className="btn btn-secondary">
                  Mehr über uns
                </Link>
                <Link href="/kontakt" className="btn btn-outline btn-secondary">
                  Kontakt aufnehmen
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <Image 
                src="/images/team-gruppenfoto.jpg"
                alt="Neon Murer heute"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary mb-6">Blick in die Zukunft</h2>
          <p className="text-lg text-primary/80 mb-8 max-w-3xl mx-auto">
            Mit 75 Jahren Erfahrung im Rücken blicken wir zuversichtlich in die Zukunft. 
            Neue Technologien, nachhaltige Lösungen und innovative Konzepte werden uns auch 
            in den nächsten Jahrzehnten antreiben.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <div className="text-4xl mb-3">🔮</div>
              <h3 className="text-xl font-bold text-primary mb-2">Innovation</h3>
              <p className="text-primary/80">Kontinuierliche Entwicklung neuer Technologien</p>
            </div>
            <div>
              <div className="text-4xl mb-3">🌱</div>
              <h3 className="text-xl font-bold text-primary mb-2">Nachhaltigkeit</h3>
              <p className="text-primary/80">Umweltfreundliche und energieeffiziente Lösungen</p>
            </div>
            <div>
              <div className="text-4xl mb-3">🤝</div>
              <h3 className="text-xl font-bold text-primary mb-2">Partnerschaft</h3>
              <p className="text-primary/80">Langfristige Kundenbeziehungen und Vertrauen</p>
            </div>
          </div>
          
          <Link href="/ueber-uns/fachkompetenzen" className="btn btn-primary btn-lg">
            Unsere Kompetenzen entdecken
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
} 