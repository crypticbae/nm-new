import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'

export default function BlachenFahnen() {
  const services = [
    {
      title: "Werbebanner",
      description: "Robuste Werbebanner für Aussenwerbung. Wetterfest und langlebig für dauerhafte Präsenz.",
      image: "/images/blachen-fahnen-1.jpg",
      features: ["Wetterfest", "UV-beständig", "Verschiedene Grössen", "Ösen/Saum"],
      applications: "Fassaden, Gerüste, Events"
    },
    {
      title: "Firmenfahnen",
      description: "Repräsentative Fahnen mit Ihrem Logo und Corporate Design. Wind- und wetterfest.",
      image: "/images/blachen-fahnen-2.jpg",
      features: ["Corporate Design", "Hochwertige Materialien", "Verschiedene Maste", "Windsicher"],
      applications: "Firmengebäude, Messen"
    },
    {
      title: "Event-Banner",
      description: "Flexible Banner für Events, Festivals und temporäre Aktionen. Schnell montiert.",
      image: "/images/blachen-fahnen-3.jpg",
      features: ["Temporär", "Leicht", "Schnelle Montage", "Wiederverwendbar"],
      applications: "Veranstaltungen, Märkte"
    },
    {
      title: "Beachflags",
      description: "Mobile Werbefahnen für hohe Aufmerksamkeit. Ideal für Events und Promotion.",
      image: "/images/blachen-fahnen-4.jpg",
      features: ["Mobil", "Auffällig", "Verschiedene Formen", "Stabile Standfüsse"],
      applications: "Promotion, Verkaufsförderung"
    }
  ]

  const flagTypes = [
    {
      type: "Hissfahnen",
      description: "Klassische Fahnen für Fahnenmasten",
      features: ["Traditionell", "Verschiedene Grössen", "Hohlsaum", "Professionell"],
      sizes: "100x150 bis 200x300 cm"
    },
    {
      type: "Querformat-Fahnen",
      description: "Banner im Querformat für Fassaden",
      features: ["Querformat", "Grossflächig", "Ösen", "Wetterfest"],
      sizes: "Bis 5m x 1.5m"
    },
    {
      type: "Beachflags/Swooper",
      description: "Mobile Werbefahnen in verschiedenen Formen",
      features: ["Tropfen/Feder/Rechteck", "Mobil", "Standfuss", "Leicht aufbaubar"],
      sizes: "2.5m bis 5.5m Höhe"
    },
    {
      type: "Mesh-Banner",
      description: "Windurchlässige Banner für windige Standorte",
      features: ["Windstabil", "Transparent", "Gerüsttauglich", "Robust"],
      sizes: "Individuelle Grössen"
    }
  ]

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-content overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/blachen-fahnen-1.jpg"
            alt="Blachen & Fahnen Neon Murer"
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
                <li className="text-secondary">Blachen & Fahnen</li>
              </ul>
            </nav>
            <h1 className="text-5xl font-bold mb-6">
              Blachen & Fahnen
            </h1>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Wehende Werbung, die auffällt. Von Firmenfahnen bis Event-Bannern - 
              wir bringen Ihre Botschaft hoch hinaus und gut sichtbar an den Mann.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="stat bg-primary-content/20 backdrop-blur-sm rounded-lg p-4">
                <div className="stat-value text-secondary text-2xl">100%</div>
                <div className="stat-title text-sm opacity-80">Wetterfest</div>
              </div>
              <div className="stat bg-primary-content/20 backdrop-blur-sm rounded-lg p-4">
                <div className="stat-value text-secondary text-2xl">365</div>
                <div className="stat-title text-sm opacity-80">Tage draussen</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Unsere Banner & Fahnen</h2>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              Hochwertige Textilien für maximale Aussenwerbe-Wirkung
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
                      Einsatz: {service.applications}
                    </span>
                  </div>
                  
                  <div className="card-actions">
                    <Link href="/kontakt" className="btn btn-primary btn-sm">
                      Fahne anfragen
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flag Types Section */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Fahnen-Arten</h2>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              Verschiedene Systeme für jeden Anwendungsbereich
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {flagTypes.map((flag) => (
              <div key={flag.type} className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <h3 className="card-title text-primary text-lg">{flag.type}</h3>
                  <p className="text-sm text-base-content/80 mb-4">{flag.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    {flag.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <svg className="w-3 h-3 text-secondary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-auto">
                    <p className="text-xs text-base-content/60 font-semibold">Grössen:</p>
                    <p className="text-xs text-base-content/70">{flag.sizes}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials & Production */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">
                Materialien & Herstellung
              </h2>
              <p className="text-lg text-base-content/80 mb-8">
                Hochwertige Textilien und professionelle Konfektionierung sorgen für 
                langlebige und wetterbeständige Banner und Fahnen.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Hochwertige Textilien</h3>
                    <p className="text-base-content/70">110g - 440g Polyester-Gewebe, UV-stabilisiert und farbecht.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Professionelle Konfektionierung</h3>
                    <p className="text-base-content/70">Doppelter Hohlsaum, verstärkte Ösen und saubere Nähte für Langlebigkeit.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.477.859h4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Sublimationsdruck</h3>
                    <p className="text-base-content/70">Durchfärbung des Gewebes für beidseitig sichtbare und waschechte Farben.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Image 
                src="/images/leistungen-6.jpg"
                alt="Blachen Fahnen Herstellung"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
              />
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
              Vielseitige Einsatzmöglichkeiten für Banner und Fahnen
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-6a1 1 0 00-1-1H9a1 1 0 00-1 1v6a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="card-title text-primary justify-center">Firmengebäude</h3>
                <p className="text-base-content/80">Repräsentative Firmenfahnen und Fassadenbanner für professionellen Auftritt.</p>
              </div>
            </div>
            
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="card-title text-primary justify-center">Events & Messen</h3>
                <p className="text-base-content/80">Mobile Beachflags und Event-Banner für maximale Aufmerksamkeit bei Veranstaltungen.</p>
              </div>
            </div>
            
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2L3 7v11a2 2 0 002 2h4a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h4a2 2 0 002-2V7l-7-5zM8.5 13.5a.5.5 0 11-1 0 .5.5 0 011 0zm3 0a.5.5 0 11-1 0 .5.5 0 011 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="card-title text-primary justify-center">Einzelhandel</h3>
                <p className="text-base-content/80">Verkaufsfördernde Banner und Aktionsfahnen für Geschäfte und Verkaufspunkte.</p>
              </div>
            </div>
            
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="card-title text-primary justify-center">Baustellen</h3>
                <p className="text-base-content/80">Robuste Mesh-Banner für Gerüste und temporäre Absperrungen mit Werbefunktion.</p>
              </div>
            </div>
            
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="card-title text-primary justify-center">Gastronomie</h3>
                <p className="text-base-content/80">Terrassen-Banner und Gastro-Fahnen für Restaurants und Cafés.</p>
              </div>
            </div>
            
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8 16a2 2 0 100-4 2 2 0 000 4zm8 0a2 2 0 100-4 2 2 0 000 4zm-8-8V4a1 1 0 011-1h6a1 1 0 011 1v4h1a2 2 0 012 2v2a1 1 0 01-1 1h-1.268A2 2 0 0116 12a2 2 0 00-1.732-1.978V9H6v1.022A2 2 0 004 12a2 2 0 00-1.732 1.022H1a1 1 0 01-1-1V10a2 2 0 012-2h1V4a1 1 0 011-1h2a1 1 0 110 2H3v4h5z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="card-title text-primary justify-center">Sport & Vereine</h3>
                <p className="text-base-content/80">Vereinsfahnen und Sponsoren-Banner für Sportveranstaltungen und Vereine.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Herstellungsprozess</h2>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              Von der Gestaltung bis zur fertigen Fahne - Schritt für Schritt
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Design</h3>
              <p className="text-sm text-base-content/70">Logo-Umsetzung und Fahnen-Layout</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Materialwahl</h3>
              <p className="text-sm text-base-content/70">Auswahl des passenden Textils</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Druck</h3>
              <p className="text-sm text-base-content/70">Sublimationsdruck für dauerhafte Farben</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Konfektionierung</h3>
              <p className="text-sm text-base-content/70">Säumen, Ösen, Hohlsaum</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">5</span>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Montage</h3>
              <p className="text-sm text-base-content/70">Installation und Inbetriebnahme</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Lassen Sie Fahne zeigen!
          </h2>
          <p className="text-lg text-primary/80 mb-8 max-w-2xl mx-auto">
            Ob repräsentative Firmenfahne oder auffälliges Event-Banner - 
            wir sorgen dafür, dass Sie nicht übersehen werden.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/kontakt" className="btn btn-primary btn-lg">
              Fahne gestalten
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