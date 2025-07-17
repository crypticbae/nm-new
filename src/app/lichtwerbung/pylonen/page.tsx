import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'

export default function Pylonen() {
  const types = [
    {
      title: "Tankstellen-Pylonen",
      description: "Weithin sichtbare Preisanzeigen für Tankstellen. Robust und wetterfest für den 24/7-Betrieb.",
      image: "/images/pylonen-1.jpg",
      features: ["Preisanzeige", "LED-Beleuchtung", "Fernsteuerung", "Wetterfest"],
      height: "bis 12m"
    },
    {
      title: "Einkaufszentren-Pylonen",
      description: "Mehrfach-Werbetafeln für Shopping-Center und Gewerbeparks. Platz für mehrere Mieter.",
      image: "/images/pylonen-2.jpg",
      features: ["Mehrfach-Werbung", "Modularer Aufbau", "Beleuchtung", "Grossformat"],
      height: "bis 20m"
    },
    {
      title: "Autohäuser-Pylonen",
      description: "Repräsentative Werbeträger für Autohäuser und Showrooms. Mit integrierten Displays möglich.",
      image: "/images/pylonen-3.jpg",
      features: ["Corporate Design", "Digital Displays", "Marken-Integration", "LED-Technik"],
      height: "bis 15m"
    },
    {
      title: "Gewerbepark-Pylonen",
      description: "Orientierungshilfe und Werbung für Gewerbeparks. Mit Wegweiser-Funktion und Firmenlogos.",
      image: "/images/pylonen-4.jpg",
      features: ["Wegweiser", "Firmenlogos", "Orientierung", "Beleuchtung"],
      height: "bis 8m"
    }
  ]

  const advantages = [
    {
      title: "Maximale Sichtbarkeit",
      description: "Bereits von weiter Entfernung erkennbar",
      icon: (
        <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Robuste Konstruktion",
      description: "Wetterbeständig und windstabil",
      icon: (
        <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Flexible Gestaltung",
      description: "Anpassbar an Corporate Design",
      icon: (
        <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Moderne Technik",
      description: "LED-Beleuchtung und Digital Displays",
      icon: (
        <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v8a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 4a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm0 3a1 1 0 011-1h4a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
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
            src="/images/pylonen-1.jpg"
            alt="Pylonen Neon Murer"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <nav className="breadcrumbs text-sm mb-6 justify-center">
              <ul className="text-primary-content/70">
                <li><Link href="/" className="hover:text-secondary">Home</Link></li>
                <li><Link href="/lichtwerbung" className="hover:text-secondary">Lichtwerbung</Link></li>
                <li className="text-secondary">Pylonen</li>
              </ul>
            </nav>
            <h1 className="text-5xl font-bold mb-6">
              Pylonen
            </h1>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Weithin sichtbare Werbeträger für Tankstellen, Einkaufszentren und Gewerbeparks. 
              Robust, auffällig und perfekt für die Fernwirkung.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="stat bg-primary-content/20 backdrop-blur-sm rounded-lg p-4">
                <div className="stat-value text-secondary text-2xl">20m</div>
                <div className="stat-title text-sm opacity-80">Maximale Höhe</div>
              </div>
              <div className="stat bg-primary-content/20 backdrop-blur-sm rounded-lg p-4">
                <div className="stat-value text-secondary text-2xl">24/7</div>
                <div className="stat-title text-sm opacity-80">Sichtbarkeit</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Unsere Pylonen-Systeme</h2>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              Massgeschneiderte Lösungen für jeden Anwendungsbereich
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {types.map((type) => (
              <div key={type.title} className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300">
                <figure className="h-64">
                  <Image
                    src={type.image}
                    alt={type.title}
                    width={500}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </figure>
                <div className="card-body">
                  <h3 className="card-title text-primary text-xl">{type.title}</h3>
                  <p className="text-base-content/80 mb-4">{type.description}</p>
                  
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {type.features.map((feature) => (
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
                      Höhe: {type.height}
                    </span>
                  </div>
                  
                  <div className="card-actions">
                    <Link href="/kontakt" className="btn btn-primary btn-sm">
                      Anfrage stellen
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Vorteile unserer Pylonen</h2>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              Warum Pylonen die ideale Lösung für Fernwirkung sind
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage) => (
              <div key={advantage.title} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  {advantage.icon}
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">{advantage.title}</h3>
                <p className="text-sm text-base-content/70">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Details Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">
                Technische Expertise
              </h2>
              <p className="text-lg text-base-content/80 mb-8">
                Unsere Pylonen werden nach höchsten technischen Standards gefertigt 
                und montiert. Statik, Elektronik und Design perfekt aufeinander abgestimmt.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Statische Berechnung</h3>
                    <p className="text-base-content/70">Ingenieursmässige Planung für Windlasten und Stabilität nach SIA-Normen.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.477.859h4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Elektroinstallation</h3>
                    <p className="text-base-content/70">Komplette elektrische Ausrüstung mit Beleuchtung und Steuerungstechnik.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v4a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 6a1 1 0 011-1h12a1 1 0 011 1v4a1 1 0 01-1 1H4a1 1 0 01-1-1v-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Wartungsfreundlich</h3>
                    <p className="text-base-content/70">Konstruktion ermöglicht einfachen Zugang für Wartung und Updates.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Image 
                src="/images/pylonen-5.jpg"
                alt="Pylonen Technik"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Planning Section */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Projektplanung & Bewilligung</h2>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              Wir übernehmen den kompletten Planungs- und Bewilligungsprozess
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Standortanalyse</h3>
              <p className="text-sm text-base-content/70">Prüfung der örtlichen Gegebenheiten</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Bewilligung</h3>
              <p className="text-sm text-base-content/70">Baueingabe und Genehmigungsverfahren</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Konstruktion</h3>
              <p className="text-sm text-base-content/70">Fertigung in unserer Werkstatt</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Montage</h3>
              <p className="text-sm text-base-content/70">Aufstellung mit Spezialfahrzeugen</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">5</span>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Inbetriebnahme</h3>
              <p className="text-sm text-base-content/70">Test und Übergabe an den Kunden</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Ihr Pylon wartet auf Sie!
          </h2>
          <p className="text-lg text-primary/80 mb-8 max-w-2xl mx-auto">
            Lassen Sie uns Ihren Pylon planen und realisieren. Von der Bewilligung bis zur Montage - 
            wir übernehmen das komplette Projekt.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/kontakt" className="btn btn-primary btn-lg">
              Projekt besprechen
            </Link>
            <a href="tel:+41552255025" className="btn btn-outline btn-primary btn-lg">
              +41 55 225 50 25
            </a>
            <Link href="/lichtwerbung" className="btn btn-ghost btn-lg">
              Zurück zur Lichtwerbung
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
} 