import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'

export default function Grossformatdruck() {
  const services = [
    {
      title: "Plakate & Poster",
      description: "Grossformatige Werbeplakate in brillanter Qualität. Für Indoor und Outdoor geeignet.",
      image: "/images/grossformatdruck-1.jpg",
      features: ["Bis 5m Breite", "UV-beständig", "Verschiedene Materialien", "Schnelle Lieferung"],
      formats: "A0 bis 5m x 50m"
    },
    {
      title: "Banner & Transparente",
      description: "Robuste Banner für Events, Messen und Dauerwerbung. Wetterfest und langlebig.",
      image: "/images/grossformatdruck-2.jpg",
      features: ["Wetterfest", "Ösen/Saum", "Flexibel", "Wiederverwendbar"],
      formats: "Individuelle Grössen"
    },
    {
      title: "Aufkleber & Folien",
      description: "Selbstklebende Grossformat-Aufkleber für Fahrzeuge, Schaufenster und Wände.",
      image: "/images/grossformatdruck-3.jpg",
      features: ["Selbstklebend", "Konturgeschnitten", "Verschiedene Klebkraft", "Langzeit-Haftung"],
      formats: "Bis 1.5m Breite"
    },
    {
      title: "Messewände & Displays",
      description: "Professionelle Messegrafiken und portable Display-Systeme für Events.",
      image: "/images/grossformatdruck-4.jpg",
      features: ["Leicht aufbaubar", "Transportabel", "Austauschbare Grafiken", "Modulares System"],
      formats: "Standard Messemasse"
    }
  ]

  const materials = [
    {
      material: "PVC-Banner",
      description: "Robustes Material für Ausseneinsatz",
      properties: ["Wetterfest", "Reissfest", "Flexibel", "UV-beständig"],
      applications: "Werbebanner, Events",
      weight: "440-680 g/m²"
    },
    {
      material: "Textil-Banner",
      description: "Hochwertige Textil-Qualität",
      properties: ["Elegant", "Knitterfrei", "Waschbar", "Beidseitig bedruckbar"],
      applications: "Messen, Präsentationen",
      weight: "110-220 g/m²"
    },
    {
      material: "Mesh-Banner",
      description: "Windurchlässiges Material",
      properties: ["Windstabil", "Transparent", "Leicht", "Wetterbeständig"],
      applications: "Gerüste, Zäune",
      weight: "270-370 g/m²"
    },
    {
      material: "Foamboard",
      description: "Leichte Hartschaumplatte",
      properties: ["Leichtgewicht", "Stabil", "Glatte Oberfläche", "Kostengünstig"],
      applications: "Indoor-Displays",
      weight: "320-520 g/m²"
    }
  ]

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-content overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/grossformatdruck-1.jpg"
            alt="Grossformatdruck Neon Murer"
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
                <li className="text-secondary">Grossformatdruck</li>
              </ul>
            </nav>
            <h1 className="text-5xl font-bold mb-6">
              Grossformatdruck
            </h1>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Grossformatige Drucklösungen für maximale Wirkung. 
              Von Plakatdruck bis Messestand - wir drucken gross und eindrucksvoll.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="stat bg-primary-content/20 backdrop-blur-sm rounded-lg p-4">
                <div className="stat-value text-secondary text-2xl">5m</div>
                <div className="stat-title text-sm opacity-80">Max. Breite</div>
              </div>
              <div className="stat bg-primary-content/20 backdrop-blur-sm rounded-lg p-4">
                <div className="stat-value text-secondary text-2xl">2400</div>
                <div className="stat-title text-sm opacity-80">DPI Auflösung</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Grossformat-Lösungen</h2>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              Professioneller Digitaldruck in allen Grössen und Formaten
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
                      Formate: {service.formats}
                    </span>
                  </div>
                  
                  <div className="card-actions">
                    <Link href="/kontakt" className="btn btn-primary btn-sm">
                      Druck anfragen
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Druckmaterialien</h2>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              Vielfältige Materialien für jeden Anwendungsbereich
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {materials.map((material) => (
              <div key={material.material} className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <h3 className="card-title text-primary text-lg">{material.material}</h3>
                  <p className="text-sm text-base-content/80 mb-4">{material.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    {material.properties.map((property) => (
                      <div key={property} className="flex items-center space-x-2">
                        <svg className="w-3 h-3 text-secondary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-xs">{property}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-auto space-y-1">
                    <p className="text-xs text-base-content/60 font-semibold">Anwendung:</p>
                    <p className="text-xs text-base-content/70">{material.applications}</p>
                    <p className="text-xs text-base-content/60 font-semibold">Gewicht:</p>
                    <p className="text-xs text-base-content/70">{material.weight}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specs Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Technische Daten</h2>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              Modernste Drucktechnologie für perfekte Ergebnisse
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Druckauflösung</h3>
              <p className="text-2xl font-bold text-secondary mb-2">2400 DPI</p>
              <p className="text-sm text-base-content/70">Hochauflösender Digitaldruck für gestochen scharfe Bilder</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Maximale Breite</h3>
              <p className="text-2xl font-bold text-secondary mb-2">5.0 m</p>
              <p className="text-sm text-base-content/70">Druckbreite bis 5 Meter für grossformatige Projekte</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Lieferzeit</h3>
              <p className="text-2xl font-bold text-secondary mb-2">24-48h</p>
              <p className="text-sm text-base-content/70">Express-Service für dringende Aufträge verfügbar</p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Anwendungsbereiche</h2>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              Vielseitige Einsatzmöglichkeiten für Grossformatdruck
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Messen & Events</h3>
              <p className="text-sm text-base-content/70">Messewände, Banner und Display-Systeme</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2L3 7v11a2 2 0 002 2h4a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h4a2 2 0 002-2V7l-7-5zM8.5 13.5a.5.5 0 11-1 0 .5.5 0 011 0zm3 0a.5.5 0 11-1 0 .5.5 0 011 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Einzelhandel</h3>
              <p className="text-sm text-base-content/70">Schaufenster-Dekoration und Promotion</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-6a1 1 0 00-1-1H9a1 1 0 00-1 1v6a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Unternehmen</h3>
              <p className="text-sm text-base-content/70">Corporate Events und Präsentationen</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Gastronomie</h3>
              <p className="text-sm text-base-content/70">Menütafeln und Restaurant-Werbung</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Öffentlicher Bereich</h3>
              <p className="text-sm text-base-content/70">Informationstafeln und Hinweise</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8 16a2 2 0 100-4 2 2 0 000 4zm8 0a2 2 0 100-4 2 2 0 000 4zm-8-8V4a1 1 0 011-1h6a1 1 0 011 1v4h1a2 2 0 012 2v2a1 1 0 01-1 1h-1.268A2 2 0 0116 12a2 2 0 00-1.732-1.978V9H6v1.022A2 2 0 004 12a2 2 0 00-1.732 1.022H1a1 1 0 01-1-1V10a2 2 0 012-2h1V4a1 1 0 011-1h2a1 1 0 110 2H3v4h5z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Transport</h3>
              <p className="text-sm text-base-content/70">Fahrzeug-Aufkleber und Mobile Werbung</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality & Service Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">
                Qualität & Service
              </h2>
              <p className="text-lg text-base-content/80 mb-8">
                Modernste Drucktechnologie kombiniert mit jahrzehntelanger Erfahrung. 
                Wir garantieren erstklassige Ergebnisse in kürzester Zeit.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Farbmanagement</h3>
                    <p className="text-base-content/70">Kalibrierte Drucker und ICC-Profile für reproduzierbare Farben.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Express-Service</h3>
                    <p className="text-base-content/70">Same-Day-Service für dringende Aufträge bis 14:00 Uhr möglich.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Qualitätskontrolle</h3>
                    <p className="text-base-content/70">Jeder Druck wird vor Auslieferung auf Qualität und Farbtreue geprüft.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Image 
                src="/images/leistungen-5.jpg"
                alt="Grossformatdruck Qualität"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Unser Druckprozess</h2>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              Von der Datei bis zum fertigen Druck - professionell und termingerecht
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Datencheck</h3>
              <p className="text-sm text-base-content/70">Prüfung der Druckdaten auf Auflösung und Format</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Materialwahl</h3>
              <p className="text-sm text-base-content/70">Auswahl des optimalen Materials für Ihren Einsatz</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Druck</h3>
              <p className="text-sm text-base-content/70">Hochauflösender Druck mit kalibrierten Systemen</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Finishing</h3>
              <p className="text-sm text-base-content/70">Weiterverarbeitung, Schnitt und Verpackung</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Bereit für Grossformat?
          </h2>
          <p className="text-lg text-primary/80 mb-8 max-w-2xl mx-auto">
            Lassen Sie uns Ihre Ideen gross rausbringen. 
            Schnell, hochwertig und in beliebiger Grösse.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/kontakt" className="btn btn-primary btn-lg">
              Druck anfragen
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