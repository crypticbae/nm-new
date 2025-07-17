import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'

export default function Fensterbeschriftung() {
  const services = [
    {
      title: "Schaufenster-Beschriftung",
      description: "Professionelle Ladenbeschriftung für maximale Aufmerksamkeit und Kundenansprache.",
      image: "/images/fensterbeschriftung-1.jpg",
      features: ["Hochwertige Folien", "Individuelle Designs", "Wetterfest", "Langlebig"],
      application: "Einzelhandel"
    },
    {
      title: "Sichtschutzfolien",
      description: "Dekorative Folien die Privatsphäre schaffen ohne das Tageslicht zu blockieren.",
      image: "/images/fensterbeschriftung-2.jpg",
      features: ["Blickschutz", "Tageslicht", "Dekorativ", "Verschiedene Designs"],
      application: "Büros & Praxen"
    },
    {
      title: "Werbefolien",
      description: "Temporäre oder permanente Werbefolien für Aktionen und Produktwerbung.",
      image: "/images/fensterbeschriftung-3.jpg",
      features: ["Auffällig", "Flexibel", "Kostengünstig", "Schnell angebracht"],
      application: "Promotion & Events"
    },
    {
      title: "Milchglasfolien",
      description: "Elegante Milchglas-Optik für diskrete Sichtabdeckung in modernem Design.",
      image: "/images/fensterbeschriftung-4.jpg",
      features: ["Milchglas-Effekt", "Modern", "Diskret", "Lichtdurchlässig"],
      application: "Moderne Büros"
    }
  ]

  const applications = [
    {
      title: "Einzelhandel",
      description: "Schaufenster optimal nutzen",
      icon: (
        <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 2L3 7v11a2 2 0 002 2h4a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h4a2 2 0 002-2V7l-7-5zM8.5 13.5a.5.5 0 11-1 0 .5.5 0 011 0zm3 0a.5.5 0 11-1 0 .5.5 0 011 0z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Restaurants",
      description: "Speisekarten und Atmosphäre",
      icon: (
        <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6 3a1 1 0 011-1h.01a1 1 0 010 2H7a1 1 0 01-1-1zM2 7a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zm2 4a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zm2 4a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Büros",
      description: "Professioneller Sichtschutz",
      icon: (
        <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-6a1 1 0 00-1-1H9a1 1 0 00-1 1v6a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Praxen",
      description: "Diskretion und Information",
      icon: (
        <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
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
            src="/images/fensterbeschriftung-1.jpg"
            alt="Fensterbeschriftung Neon Murer"
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
                <li className="text-secondary">Fensterbeschriftung</li>
              </ul>
            </nav>
            <h1 className="text-5xl font-bold mb-6">
              Fensterbeschriftung
            </h1>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Fenster als Kommunikationsfläche nutzen. Von der Schaufensterwerbung 
              bis zum eleganten Sichtschutz - wir gestalten Ihre Glasflächen.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="stat bg-primary-content/20 backdrop-blur-sm rounded-lg p-4">
                <div className="stat-value text-secondary text-2xl">100%</div>
                <div className="stat-title text-sm opacity-80">Blickdicht</div>
              </div>
              <div className="stat bg-primary-content/20 backdrop-blur-sm rounded-lg p-4">
                <div className="stat-value text-secondary text-2xl">UV</div>
                <div className="stat-title text-sm opacity-80">Schutz inklusive</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Unsere Fensterlösungen</h2>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              Massgeschneiderte Folien für jeden Anwendungsbereich
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
                      Ideal für: {service.application}
                    </span>
                  </div>
                  
                  <div className="card-actions">
                    <Link href="/kontakt" className="btn btn-primary btn-sm">
                      Beratung anfragen
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
              Vielseitige Einsatzmöglichkeiten für Fensterbeschriftungen
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applications.map((app) => (
              <div key={app.title} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  {app.icon}
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">{app.title}</h3>
                <p className="text-sm text-base-content/70">{app.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials & Benefits */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">
                Materialien & Vorteile
              </h2>
              <p className="text-lg text-base-content/80 mb-8">
                Hochwertige Folien für professionelle Fensterbeschriftung. 
                Langlebig, UV-beständig und in verschiedenen Ausführungen erhältlich.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Vielfältige Folien</h3>
                    <p className="text-base-content/70">Transparent, transluzent, opak, farbig - für jeden Zweck die passende Folie.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.477.859h4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">UV-Schutz</h3>
                    <p className="text-base-content/70">Schutz vor schädlicher UV-Strahlung bei optimaler Lichtdurchlässigkeit.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Einfache Entfernung</h3>
                    <p className="text-base-content/70">Rückstandsfreie Entfernung auch nach Jahren möglich. Ideal für Mietobjekte.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Image 
                src="/images/leistungen-4.jpg"
                alt="Fensterbeschriftung Materialien"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Design Options */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Design-Möglichkeiten</h2>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              Kreative Gestaltung für maximale Wirkung
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="card-title text-primary justify-center">Digitaldruck</h3>
                <p className="text-base-content/80">Fotorealistische Motive und Grafiken in brillanten Farben.</p>
              </div>
            </div>
            
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="card-title text-primary justify-center">Plotterfolien</h3>
                <p className="text-base-content/80">Präzise geschnittene Schriften und Logos in verschiedenen Farben.</p>
              </div>
            </div>
            
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="card-title text-primary justify-center">Strukturfolien</h3>
                <p className="text-base-content/80">Sandstrahlung, Milchglas und andere Oberflächeneffekte.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Unser Vorgehen</h2>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              Professionelle Umsetzung von der Beratung bis zur Montage
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Vor-Ort Beratung</h3>
              <p className="text-sm text-base-content/70">Aufmass und Design-Entwicklung direkt bei Ihnen</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Design & Freigabe</h3>
              <p className="text-sm text-base-content/70">Visualisierung und Anpassung nach Ihren Wünschen</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Produktion</h3>
              <p className="text-sm text-base-content/70">Hochwertige Folientechnik in unserem Betrieb</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Montage</h3>
              <p className="text-sm text-base-content/70">Blasenfreie Verklebung durch Fachkräfte</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Ihre Fenster können mehr!
          </h2>
          <p className="text-lg text-primary/80 mb-8 max-w-2xl mx-auto">
            Nutzen Sie Ihre Glasflächen optimal - für Werbung, Sichtschutz oder Design. 
            Wir beraten Sie gerne vor Ort.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/kontakt" className="btn btn-primary btn-lg">
              Vor-Ort Beratung
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