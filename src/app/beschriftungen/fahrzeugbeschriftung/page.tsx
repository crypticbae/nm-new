import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'

export default function Fahrzeugbeschriftung() {
  const services = [
    {
      title: "Vollfolierung",
      description: "Komplette Fahrzeugfolierung für maximale Werbe-Wirkung. Schutz und Marketing in einem.",
      image: "/images/fahrzeugbeschriftung-1.jpg",
      features: ["Ganzfahrzeug-Design", "Schutzfunktion", "Rückstandslose Entfernung", "UV-beständig"],
      duration: "2-3 Tage"
    },
    {
      title: "Teilfolierung",
      description: "Gezielte Beschriftung von Fahrzeugteilen. Kostengünstig und wirkungsvoll.",
      image: "/images/fahrzeugbeschriftung-2.jpg",
      features: ["Flexibel anpassbar", "Kosteneffizient", "Schnelle Umsetzung", "Professionell"],
      duration: "1-2 Tage"
    },
    {
      title: "Digitaldruck",
      description: "Hochauflösende Digitaldrucke für fotorealistische Darstellungen auf Fahrzeugen.",
      image: "/images/fahrzeugbeschriftung-3.jpg",
      features: ["Fotorealistische Qualität", "Individuelle Motive", "Wetterfest", "Langlebig"],
      duration: "1-2 Tage"
    },
    {
      title: "Flottenbeschriftung",
      description: "Einheitliche Beschriftung für Firmenflotten. Professioneller Auftritt garantiert.",
      image: "/images/fahrzeugbeschriftung-4.jpg",
      features: ["Einheitliches Design", "Skalierbar", "Corporate Identity", "Mengenrabatt"],
      duration: "nach Grösse"
    }
  ]

  const vehicleTypes = [
    {
      type: "PKW & Transporter",
      description: "Von Kleinwagen bis Transporter",
      icon: (
        <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M8 16a2 2 0 100-4 2 2 0 000 4zm8 0a2 2 0 100-4 2 2 0 000 4zm-8-8V4a1 1 0 011-1h6a1 1 0 011 1v4h1a2 2 0 012 2v2a1 1 0 01-1 1h-1.268A2 2 0 0116 12a2 2 0 00-1.732-1.978V9H6v1.022A2 2 0 004 12a2 2 0 00-1.732 1.022H1a1 1 0 01-1-1V10a2 2 0 012-2h1V4a1 1 0 011-1h2a1 1 0 110 2H3v4h5z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      type: "LKW & Sattelschlepper",
      description: "Grosse Fahrzeuge für maximale Werbefläche",
      icon: (
        <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      type: "Busse & Nutzfahrzeuge",
      description: "Öffentliche und gewerbliche Fahrzeuge",
      icon: (
        <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v8a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 2v6h10V6H5z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      type: "Spezialfahrzeuge",
      description: "Baumaschinen, Landwirtschaft, etc.",
      icon: (
        <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
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
            src="/images/fahrzeugbeschriftung-1.jpg"
            alt="Fahrzeugbeschriftung Neon Murer"
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
                <li className="text-secondary">Fahrzeugbeschriftung</li>
              </ul>
            </nav>
            <h1 className="text-5xl font-bold mb-6">
              Fahrzeugbeschriftung
            </h1>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Mobile Werbung, die bewegt. Von Vollfolierung bis Teilbeschriftung - 
              Ihr Fahrzeug wird zum rollenden Werbeträger.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="stat bg-primary-content/20 backdrop-blur-sm rounded-lg p-4">
                <div className="stat-value text-secondary text-2xl">365</div>
                <div className="stat-title text-sm opacity-80">Tage sichtbar</div>
              </div>
              <div className="stat bg-primary-content/20 backdrop-blur-sm rounded-lg p-4">
                <div className="stat-value text-secondary text-2xl">24/7</div>
                <div className="stat-title text-sm opacity-80">Mobile Werbung</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Unsere Leistungen</h2>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              Von der Vollfolierung bis zur gezielten Teilbeschriftung
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
                      Dauer: {service.duration}
                    </span>
                  </div>
                  
                  <div className="card-actions">
                    <Link href="/kontakt" className="btn btn-primary btn-sm">
                      Offerte anfragen
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle Types Section */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Fahrzeugtypen</h2>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              Wir beschriften alle Arten von Fahrzeugen professionell
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {vehicleTypes.map((vehicle) => (
              <div key={vehicle.type} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  {vehicle.icon}
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">{vehicle.type}</h3>
                <p className="text-sm text-base-content/70">{vehicle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Unser Prozess</h2>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              Von der ersten Beratung bis zur fertigen Fahrzeugbeschriftung
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Beratung</h3>
              <p className="text-sm text-base-content/70">Design-Konzept und Materialauswahl</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Design</h3>
              <p className="text-sm text-base-content/70">Visualisierung und Freigabe</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Produktion</h3>
              <p className="text-sm text-base-content/70">Druck und Weiterverarbeitung</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Montage</h3>
              <p className="text-sm text-base-content/70">Professionelle Verklebung</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">5</span>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Übergabe</h3>
              <p className="text-sm text-base-content/70">Qualitätskontrolle und Abnahme</p>
            </div>
          </div>
        </div>
      </section>

      {/* Materials & Technologies */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">
                Materialien & Technologien
              </h2>
              <p className="text-lg text-base-content/80 mb-8">
                Wir verwenden nur hochwertige Materialien und modernste Technologien 
                für langlebige und professionelle Fahrzeugbeschriftungen.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v4a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 6a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Premium Folien</h3>
                    <p className="text-base-content/70">3M, Avery Dennison und andere Markenfolien mit bis zu 10 Jahren Garantie.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Digitaldruck</h3>
                    <p className="text-base-content/70">Hochauflösender UV-beständiger Grossformatdruck für perfekte Farben.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Professionelle Montage</h3>
                    <p className="text-base-content/70">Zertifizierte Monteure sorgen für perfekte und blasenfreie Verklebung.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Image 
                src="/images/leistungen-1.jpg"
                alt="Fahrzeugbeschriftung Materialien"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Vorteile der Fahrzeugbeschriftung</h2>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              Warum Fahrzeugwerbung so effektiv ist
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="card-title text-primary justify-center">Kosteneffizient</h3>
                <p className="text-base-content/80">Einmalige Investition für jahrelange Werbewirkung. Niedrigste Kosten pro Kontakt.</p>
              </div>
            </div>
            
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="card-title text-primary justify-center">Hohe Reichweite</h3>
                <p className="text-base-content/80">Tausende Sichtkontakte täglich. Ihre Werbung erreicht Menschen überall.</p>
              </div>
            </div>
            
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="card-title text-primary justify-center">Professioneller Auftritt</h3>
                <p className="text-base-content/80">Seriöse und vertrauensvolle Aussenwirkung. Stärkt Ihre Marke nachhaltig.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Bereit für mobile Werbung?
          </h2>
          <p className="text-lg text-primary/80 mb-8 max-w-2xl mx-auto">
            Verwandeln Sie Ihr Fahrzeug in einen rollenden Werbeträger. 
            Kostenlose Beratung und unverbindliche Offerte.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/kontakt" className="btn btn-primary btn-lg">
              Kostenlose Beratung
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