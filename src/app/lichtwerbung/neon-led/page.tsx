import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'

export default function NeonLedTechnik() {
  const technologies = [
    {
      title: "Klassisches Neon",
      description: "Handgefertigte Neon-Röhren aus unserer eigenen Glasbläserei. Traditionelle Handwerkskunst für einzigartige Leuchteffekte.",
      image: "/images/neon-led-technik-1.jpg",
      features: ["Handgeblasen", "Individuelle Formen", "Warmes Licht", "Nostalgischer Charme"],
      colors: "Über 150 Standardfarben"
    },
    {
      title: "Moderne LED-Stripes",
      description: "Flexible LED-Bänder für kreative Lichtlösungen. Energieeffizient und vielseitig einsetzbar.",
      image: "/images/leistungen-2.jpg",
      features: ["Flexibel", "RGB-Farbwechsel", "Dimm-Funktionen", "Lange Lebensdauer"],
      colors: "16,7 Millionen Farben"
    },
    {
      title: "LED-Module",
      description: "Hochwertige LED-Module für gleichmässige Ausleuchtung. Perfekt für Buchstaben und Flächen.",
      image: "/images/leistungen-3.jpg",
      features: ["Gleichmässig", "Wartungsarm", "Wetterbeständig", "Hohe Effizienz"],
      colors: "Weiss & Farb-LEDs"
    }
  ]

  const advantages = [
    {
      title: "Eigene Glasbläserei",
      description: "Als einer der wenigen Betriebe verfügen wir über eine eigene Neon-Glasbläserei für handgefertigte Unikate.",
      icon: (
        <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "LED-Expertise",
      description: "Modernste LED-Technologie für energieeffiziente und langlebige Beleuchtungslösungen.",
      icon: (
        <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.477.859h4z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Kombination beider Welten",
      description: "Wir verbinden traditionelles Neon mit moderner LED-Technik für optimale Ergebnisse.",
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
            src="/images/neon-led-technik-1.jpg"
            alt="Neon LED Technik"
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
                <li className="text-secondary">Neon / LED-Technik</li>
              </ul>
            </nav>
            <h1 className="text-5xl font-bold mb-6">
              Neon / LED-Technik
            </h1>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Von klassischem handgefertigtem Neon bis zu modernster LED-Technologie. 
              Eigene Glasbläserei und innovative LED-Lösungen unter einem Dach.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="stat bg-primary-content/20 backdrop-blur-sm rounded-lg p-4">
                <div className="stat-value text-secondary text-2xl">75+</div>
                <div className="stat-title text-sm opacity-80">Jahre Neon-Erfahrung</div>
              </div>
              <div className="stat bg-primary-content/20 backdrop-blur-sm rounded-lg p-4">
                <div className="stat-value text-secondary text-2xl">150+</div>
                <div className="stat-title text-sm opacity-80">Neon-Farben</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Unsere Technologien</h2>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              Das Beste aus beiden Welten - traditionelles Handwerk trifft moderne Innovation
            </p>
          </div>
          
          <div className="grid gap-12">
            {technologies.map((tech, index) => (
              <div key={tech.title} className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <h3 className="text-3xl font-bold text-primary mb-4">{tech.title}</h3>
                  <p className="text-lg text-base-content/80 mb-6">{tech.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {tech.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <svg className="w-4 h-4 text-secondary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mb-6 p-4 bg-base-200 rounded-lg">
                    <p className="text-sm font-semibold text-primary mb-1">Farbauswahl:</p>
                    <p className="text-sm text-base-content/70">{tech.colors}</p>
                  </div>
                  
                  <Link href="/kontakt" className="btn btn-primary">
                    Beratung anfragen
                  </Link>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <Image 
                    src={tech.image}
                    alt={tech.title}
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-xl w-full"
                  />
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
            <h2 className="text-4xl font-bold text-primary mb-4">Unsere Stärken</h2>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              Was uns bei Neon- und LED-Technik besonders auszeichnet
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((advantage) => (
              <div key={advantage.title} className="card bg-base-100 shadow-xl">
                <div className="card-body text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    {advantage.icon}
                  </div>
                  <h3 className="card-title text-primary justify-center">{advantage.title}</h3>
                  <p className="text-base-content/80">{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Von der Idee zur Realität</h2>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              Unser bewährter Prozess für Neon- und LED-Projekte
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Beratung</h3>
              <p className="text-sm text-base-content/70">Technische Machbarkeit und Designentwicklung</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Herstellung</h3>
              <p className="text-sm text-base-content/70">Neon-Glasbläserei oder LED-Module Vorbereitung</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Installation</h3>
              <p className="text-sm text-base-content/70">Fachgerechte Elektroinstallation und Montage</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Service</h3>
              <p className="text-sm text-base-content/70">Wartung und technischer Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Neon vs. LED - Der Vergleich</h2>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              Beide Technologien haben ihre Stärken - wir helfen bei der richtigen Wahl
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-primary text-2xl mb-4">
                  <svg className="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                  </svg>
                  Klassisches Neon
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-sm">Warmes, atmosphärisches Licht</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-sm">Individuelle Formen möglich</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-sm">Nostalgischer Charme</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-sm">Handwerkskunst</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-orange-500">⚠</span>
                    <span className="text-sm">Höherer Energieverbrauch</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-primary text-2xl mb-4">
                  <svg className="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.477.859h4z" clipRule="evenodd" />
                  </svg>
                  Moderne LED-Technik
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-sm">Sehr energieeffizient</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-sm">Lange Lebensdauer</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-sm">Farbwechsel möglich</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-sm">Dimm-Funktionen</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-sm">Wartungsarm</span>
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
            Neon oder LED? Wir beraten Sie!
          </h2>
          <p className="text-lg text-primary/80 mb-8 max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam die beste Technologie für Ihr Projekt finden. 
            Traditionelles Handwerk oder moderne Innovation - wir können beides.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/kontakt" className="btn btn-primary btn-lg">
              Technologie-Beratung
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