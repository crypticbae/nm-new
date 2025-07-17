import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'

export default function Signaletik() {
  const services = [
    {
      title: "Leitsysteme",
      description: "Durchgängige Orientierungssysteme für komplexe Gebäude und Areale. Professionelle Wegführung.",
      image: "/images/signaletik-1.jpg",
      features: ["Modulares System", "Einheitliches Design", "Mehrsprachig", "Barrierefrei"],
      scope: "Gebäudekomplexe"
    },
    {
      title: "Piktogramme",
      description: "Universell verständliche Zeichen und Symbole nach internationalen Standards.",
      image: "/images/signaletik-2.jpg",
      features: ["DIN/ISO konform", "Universell", "Kontraststark", "Zeitlos"],
      scope: "Alle Bereiche"
    },
    {
      title: "Notfallbeschilderung",
      description: "Sicherheitsrelevante Kennzeichnung nach Vorschriften. Rettungswege und Notausgänge.",
      image: "/images/signaletik-3.jpg",
      features: ["Normgerecht", "Nachleuchtend", "Rutschfest", "Brandschutz"],
      scope: "Sicherheit"
    },
    {
      title: "Türbeschilderung",
      description: "Elegante Raumbeschriftung und Türschilder. Von der Praxis bis zum Bürogebäude.",
      image: "/images/signaletik-4.jpg",
      features: ["Austauschbar", "Elegant", "Verschiedene Grössen", "Montagesystem"],
      scope: "Innenbereich"
    }
  ]

  const applications = [
    {
      title: "Spitäler & Kliniken",
      description: "Patientenführung und medizinische Bereiche",
      features: ["Hygienisch", "Orientierung", "Mehrsprachig", "Notfall-Systeme"],
      icon: (
        <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Schulen & Universitäten",
      description: "Bildungseinrichtungen und Campusgelände",
      features: ["Modulares System", "Erweiterbar", "Robust", "Kosteneffizient"],
      icon: (
        <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Büro- & Verwaltungsgebäude",
      description: "Corporate Identity und professionelle Wegführung",
      features: ["Corporate Design", "Elegant", "Flexibel", "Repräsentativ"],
      icon: (
        <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-6a1 1 0 00-1-1H9a1 1 0 00-1 1v6a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Shopping Center",
      description: "Kundenführung und Händler-Information",
      features: ["Auffällig", "Informativ", "Aktualisierbar", "Mehrsprachig"],
      icon: (
        <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 2L3 7v11a2 2 0 002 2h4a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h4a2 2 0 002-2V7l-7-5zM8.5 13.5a.5.5 0 11-1 0 .5.5 0 011 0zm3 0a.5.5 0 11-1 0 .5.5 0 011 0z" clipRule="evenodd" />
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
            src="/images/signaletik-1.jpg"
            alt="Signaletik Neon Murer"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <nav className="breadcrumbs text-sm mb-6 justify-center">
              <ul className="text-primary-content/70">
                <li><Link href="/" className="hover:text-secondary">Home</Link></li>
                <li><Link href="/beschriftungen" className="hover:text-secondary">Beschriftungen</Link></li>
                <li className="text-secondary">Signaletik</li>
              </ul>
            </nav>
            <h1 className="text-5xl font-bold mb-6">
              Signaletik
            </h1>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Professionelle Orientierungssysteme und Leitsysteme. 
              Wir bringen Menschen sicher und effizient an ihr Ziel.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="stat bg-primary-content/20 backdrop-blur-sm rounded-lg p-4">
                <div className="stat-value text-secondary text-2xl">DIN</div>
                <div className="stat-title text-sm opacity-80">Normgerecht</div>
              </div>
              <div className="stat bg-primary-content/20 backdrop-blur-sm rounded-lg p-4">
                <div className="stat-value text-secondary text-2xl">360°</div>
                <div className="stat-title text-sm opacity-80">Orientierung</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Signaletik-Lösungen</h2>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              Durchdachte Orientierungssysteme für optimale Wegführung
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.title} className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300">
                <figure className="h-64">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={500}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </figure>
                <div className="card-body">
                  <h3 className="card-title text-primary text-xl">{service.title}</h3>
                  <p className="text-base-content/80 mb-4">{service.description}</p>
                  
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <svg className="w-3 h-3 text-secondary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mb-4">
                    <span className="badge badge-secondary badge-outline">
                      Einsatz: {service.scope}
                    </span>
                  </div>
                  
                  <div className="card-actions">
                    <Link href="/kontakt" className="btn btn-primary btn-sm">
                      System planen
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Anwendungsbereiche</h2>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              Signaletik für jeden Bereich - massgeschneidert und professionell
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {applications.map((app) => (
              <div key={app.title} className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      {app.icon}
                    </div>
                    <div>
                      <h3 className="card-title text-primary">{app.title}</h3>
                      <p className="text-sm text-base-content/70">{app.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    {app.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <svg className="w-3 h-3 text-secondary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Principles Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Design-Prinzipien</h2>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              Erfolgreiche Signaletik folgt bewährten Gestaltungsregeln
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Erkennbarkeit</h3>
              <p className="text-sm text-base-content/70">Hohe Kontraste und optimale Lesbarkeit aus jeder Entfernung</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Konsistenz</h3>
              <p className="text-sm text-base-content/70">Einheitliches Design-System für alle Beschilderungselemente</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Hierarchie</h3>
              <p className="text-sm text-base-content/70">Klare Informationsebenen für intuitive Navigation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Standards & Norms Section */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">
                Normen & Standards
              </h2>
              <p className="text-lg text-base-content/80 mb-8">
                Unsere Signaletik entspricht allen relevanten DIN-, ISO- und EU-Normen. 
                Sicherheit und Barrierefreiheit haben oberste Priorität.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">DIN 32975 / ISO 3864</h3>
                    <p className="text-base-content/70">Sicherheitskennzeichnung und Rettungswegsysteme nach gültigen Normen.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Barrierefreiheit</h3>
                    <p className="text-base-content/70">Kontrastreiche Gestaltung und taktile Elemente für alle Nutzergruppen.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.477.859h4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Nachleuchtend</h3>
                    <p className="text-base-content/70">Notfall-Beschilderung mit photolumineszierenden Materialien für Stromausfall.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Image 
                src="/images/signaletik-5.jpg"
                alt="Signaletik Standards"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Projekt-Ablauf</h2>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              Systematische Entwicklung für optimale Orientierungssysteme
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Analyse</h3>
              <p className="text-sm text-base-content/70">Gebäude-Analyse und Nutzerströme</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Konzept</h3>
              <p className="text-sm text-base-content/70">Leitsystem-Konzept entwickeln</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Design</h3>
              <p className="text-sm text-base-content/70">Corporate Design Integration</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Prototyp</h3>
              <p className="text-sm text-base-content/70">Muster und Freigabe-Vorlage</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">5</span>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Produktion</h3>
              <p className="text-sm text-base-content/70">Serienfertigung aller Elemente</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">6</span>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Installation</h3>
              <p className="text-sm text-base-content/70">Montage und Inbetriebnahme</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Ihr Leitsystem wartet auf Sie!
          </h2>
          <p className="text-lg text-primary/80 mb-8 max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam ein durchdachtes Orientierungssystem entwickeln. 
            Von der Analyse bis zur Installation - alles aus einer Hand.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/kontakt" className="btn btn-primary btn-lg">
              Leitsystem planen
            </Link>
            <a href="tel:+41552255025" className="btn btn-outline btn-primary btn-lg">
              +41 55 225 50 25
            </a>
            <Link href="/beschriftungen" className="btn btn-ghost btn-lg">
              Zurück zu Beschriftungen
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
} 