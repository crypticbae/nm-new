import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'

export default function UeberUns() {
  const timeline = [
    {
      year: "1949",
      title: "Gründung durch Josef Murer",
      description: "Josef Murer gründet die Firma mit dem Anspruch auf hochwertige Verarbeitung und vielseitige Lösungen.",
      image: "/images/detail1.jpg"
    },
    {
      year: "1975",
      title: "Expansion der Dienstleistungen",
      description: "Erweiterung des Angebots um moderne Lichtwerbung und professionelle Beschriftungstechniken.",
      image: "/images/detail2.jpg"
    },
    {
      year: "1990",
      title: "Technologischer Fortschritt",
      description: "Einführung modernster Produktionstechniken und erste LED-Technologie im Lichtwerbungsbereich.",
      image: "/images/detail3.jpg"
    },
    {
      year: "2006",
      title: "Umwandlung zur AG",
      description: "Wandlung der Einzelfirma in die Neon Murer AG - Anpassung an die gewachsene Firmengrösse.",
      image: "/images/detail4.jpg"
    },
    {
      year: "2020",
      title: "Digital Signage",
      description: "Einstieg in die digitale Werbetechnik mit modernsten Display-Lösungen und interaktiven Systemen.",
      image: "/images/detail5.jpg"
    },
    {
      year: "2024",
      title: "75 Jahre Innovation",
      description: "Heute sind wir stolz auf 75 Jahre Erfahrung und setzen weiterhin Massstäbe in der Branche.",
      image: "/images/detail6.jpg"
    }
  ]

  const competencies = [
    {
      title: "Metallbauarbeiten",
      description: "Präzise Metallbearbeitung für stabile und langlebige Konstruktionen",
      image: "/images/fachkompetenzen-1.webp"
    },
    {
      title: "Blechbearbeitung",
      description: "Professionelle Bearbeitung verschiedener Blecharten für massgeschneiderte Werbelösungen",
      image: "/images/fachkompetenzen-2.webp"
    },
    {
      title: "CNC-Frästechnik",
      description: "Hochpräzise computergesteuerte Bearbeitung für komplexe Formen",
      image: "/images/fachkompetenzen-3.webp"
    },
    {
      title: "Laser-Schneidtechnik",
      description: "Modernste Lasertechnologie für präzise Schnitte und filigrane Konturen",
      image: "/images/fachkompetenzen-4.webp"
    },
    {
      title: "Acrylglas-Atelier",
      description: "Spezialisierte Bearbeitung von Acrylglas für transparente Werbeelemente",
      image: "/images/fachkompetenzen-5.webp"
    },
    {
      title: "Lackiererei",
      description: "Professionelle Oberflächenbeschichtung für optimalen Schutz und perfekte Optik",
      image: "/images/fachkompetenzen-6.webp"
    },
    {
      title: "LED-Beleuchtungsplanung",
      description: "Moderne LED-Technologie für energieeffiziente Beleuchtungslösungen",
      image: "/images/fachkompetenzen-7.webp"
    },
    {
      title: "Digitale Druckverfahren",
      description: "Hochauflösende Drucktechnologien für brillante Farben und gestochen scharfe Details",
      image: "/images/fachkompetenzen-8.webp"
    },
    {
      title: "Schriftenmalerei",
      description: "Professionelle Beschriftungslösungen durch digitales Plotten",
      image: "/images/fachkompetenzen-9.webp"
    }
  ]

  const values = [
    {
      title: "Qualität",
      description: "75 Jahre Erfahrung garantieren höchste Qualitätsstandards in allen Bereichen.",
      icon: (
        <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Innovation",
      description: "Wir bleiben am Puls der Zeit und integrieren modernste Technologien.",
      icon: (
        <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Kompetenz",
      description: "Unser erfahrenes Team steht für fachliche Exzellenz und Zuverlässigkeit.",
      icon: (
        <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Nachhaltigkeit",
      description: "Umweltbewusste Lösungen und energieeffiziente Technologien stehen im Fokus.",
      icon: (
        <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H3.75A.75.75 0 013 10zM3 6a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6zM3 14a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H3.75A.75.75 0 013 14z" clipRule="evenodd" />
        </svg>
      )
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
            <h1 className="text-5xl font-bold mb-6">
              Über Neon Murer
            </h1>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Seit 1949 Ihr verlässlicher Partner für innovative Lichtwerbung und professionelle Werbetechnik. 
              75 Jahre Erfahrung, Qualität und Schweizer Handwerkskunst.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="stat bg-primary-content/20 backdrop-blur-sm rounded-lg p-4">
                <div className="stat-value text-secondary text-2xl">75+</div>
                <div className="stat-title text-sm opacity-80">Jahre Tradition</div>
              </div>
              <div className="stat bg-primary-content/20 backdrop-blur-sm rounded-lg p-4">
                <div className="stat-value text-secondary text-2xl">2</div>
                <div className="stat-title text-sm opacity-80">Standorte</div>
              </div>
              <div className="stat bg-primary-content/20 backdrop-blur-sm rounded-lg p-4">
                <div className="stat-value text-secondary text-2xl">20+</div>
                <div className="stat-title text-sm opacity-80">Mitarbeiter</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Unsere Werte</h2>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              Was uns seit 75 Jahren auszeichnet und antreibt
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">{value.title}</h3>
                <p className="text-base-content/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Unsere Geschichte</h2>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              75 Jahre Innovation und Wachstum - eine Erfolgsgeschichte
            </p>
          </div>
          
          <div className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            {timeline.map((item, index) => (
              <li key={item.year}>
                <div className="timeline-middle">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                    <span className="text-primary text-xs font-bold">{index + 1}</span>
                  </div>
                </div>
                <div className={`timeline-${index % 2 === 0 ? 'start' : 'end'} md:text-${index % 2 === 0 ? 'end' : 'start'} mb-10`}>
                  <div className="card bg-base-100 shadow-xl">
                    <figure className="h-48">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={400}
                        height={200}
                        className="object-cover w-full h-full"
                      />
                    </figure>
                    <div className="card-body">
                      <div className="badge badge-secondary mb-2">{item.year}</div>
                      <h3 className="card-title text-primary">{item.title}</h3>
                      <p className="text-base-content/80">{item.description}</p>
                    </div>
                  </div>
                </div>
                <hr className="bg-secondary" />
              </li>
            ))}
          </div>
        </div>
      </section>

      {/* Competencies Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Unsere Fachkompetenzen</h2>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              Vielfältige Expertise für alle Bereiche der Lichtwerbung und Werbetechnik
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {competencies.map((comp) => (
              <div key={comp.title} className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <figure className="h-48">
                  <Image
                    src={comp.image}
                    alt={comp.title}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </figure>
                <div className="card-body">
                  <h3 className="card-title text-primary">{comp.title}</h3>
                  <p className="text-base-content/80">{comp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Unsere Standorte</h2>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              Zwei Standorte in der Ostschweiz für optimale Kundenbetreuung
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Rapperswil-Jona */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-primary text-2xl mb-4">
                  <svg className="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Hauptsitz Rapperswil-Jona
                </h3>
                <div className="space-y-3">
                  <p className="font-semibold text-lg">Produktion & Verwaltung</p>
                  <div className="text-base-content/80">
                    <p>Tägernaustrasse 21</p>
                    <p>CH-8640 Rapperswil-Jona</p>
                  </div>
                  <div className="space-y-2">
                    <a href="tel:+41552255025" className="flex items-center space-x-2 text-primary hover:text-secondary">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      <span>+41 55 225 50 25</span>
                    </a>
                    <a href="mailto:neon@neonmurer.ch" className="flex items-center space-x-2 text-primary hover:text-secondary">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      <span>neon@neonmurer.ch</span>
                    </a>
                  </div>
                  <div className="bg-base-200 p-4 rounded-lg">
                    <p className="text-sm font-semibold mb-2">Leistungen:</p>
                    <ul className="text-sm space-y-1 text-base-content/70">
                      <li>• Produktion & Glasbläserei</li>
                      <li>• Design & Entwicklung</li>
                      <li>• Grossformatdruck</li>
                      <li>• Lager & Logistik</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Uznach */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-primary text-2xl mb-4">
                  <svg className="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Standort Uznach
                </h3>
                <div className="space-y-3">
                  <p className="font-semibold text-lg">Verkauf & Service</p>
                  <div className="text-base-content/80">
                    <p>Burgerrietstrasse 30</p>
                    <p>CH-8730 Uznach</p>
                  </div>
                  <div className="space-y-2">
                    <a href="tel:+41552255025" className="flex items-center space-x-2 text-primary hover:text-secondary">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      <span>+41 55 225 50 25</span>
                    </a>
                    <a href="mailto:neon@neonmurer.ch" className="flex items-center space-x-2 text-primary hover:text-secondary">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      <span>neon@neonmurer.ch</span>
                    </a>
                  </div>
                  <div className="bg-base-200 p-4 rounded-lg">
                    <p className="text-sm font-semibold mb-2">Leistungen:</p>
                    <ul className="text-sm space-y-1 text-base-content/70">
                      <li>• Beratung & Verkauf</li>
                      <li>• Montage & Service</li>
                      <li>• Wartung & Reparatur</li>
                      <li>• Kundendienst</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Werden Sie Teil unserer Erfolgsgeschichte
          </h2>
          <p className="text-lg text-primary/80 mb-8 max-w-2xl mx-auto">
            Vertrauen Sie auf 75 Jahre Erfahrung und lassen Sie uns gemeinsam Ihr nächstes Projekt verwirklichen.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/kontakt" className="btn btn-primary btn-lg">
              Kontakt aufnehmen
            </Link>
            <Link href="/ueber-uns/karriere" className="btn btn-outline btn-primary btn-lg">
              Karriere bei uns
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
} 