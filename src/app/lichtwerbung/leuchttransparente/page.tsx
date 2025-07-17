import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'

export default function Leuchttransparente() {
  const types = [
    {
      title: "Standard Leuchttransparente",
      description: "Klassische grossflächige Werbetafeln mit gleichmässiger LED-Ausleuchtung für optimale Fernwirkung.",
      image: "/images/leuchttransparente-1.jpg",
      features: ["Grossformat bis 6m", "Gleichmässige Ausleuchtung", "Wetterfest", "Energieeffizient"]
    },
    {
      title: "Wechselrahmen-Systeme",
      description: "Flexible Systeme mit austauschbaren Motiven für saisonale Werbung oder Aktionen.",
      image: "/images/leuchttransparente-2.jpg",
      features: ["Schneller Motivwechsel", "Kosteneffizient", "Flexibel", "Wiederverwendbar"]
    },
    {
      title: "Doppelseitige Ausführung",
      description: "Beidseitig beleuchtete Transparente für maximale Aufmerksamkeit von beiden Seiten.",
      image: "/images/leuchttransparente-3.jpg",
      features: ["Beidseitig sichtbar", "Doppelte Werbewirkung", "Freistehend", "Robust"]
    }
  ]

  const applications = [
    "Geschäftsfassaden",
    "Tankstellen",
    "Restaurants & Cafés", 
    "Einkaufszentren",
    "Autohäuser",
    "Apotheken",
    "Banken",
    "Freistehende Werbeträger"
  ]

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-content overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/leuchttransparente-1.jpg"
            alt="Leuchttransparente Neon Murer"
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
                <li className="text-secondary">Leuchttransparente</li>
              </ul>
            </nav>
            <h1 className="text-5xl font-bold mb-6">
              Leuchttransparente
            </h1>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Grossflächige beleuchtete Werbetafeln für optimale Fernwirkung. 
              Perfekt für Geschäfte und Unternehmen, die auch nachts sichtbar bleiben möchten.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="stat bg-primary-content/20 backdrop-blur-sm rounded-lg p-4">
                <div className="stat-value text-secondary text-2xl">6m</div>
                <div className="stat-title text-sm opacity-80">Maximale Breite</div>
              </div>
              <div className="stat bg-primary-content/20 backdrop-blur-sm rounded-lg p-4">
                <div className="stat-value text-secondary text-2xl">IP65</div>
                <div className="stat-title text-sm opacity-80">Wetterfest</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Unsere Leuchttransparent-Systeme</h2>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              Verschiedene Lösungen für jeden Anwendungsbereich und jedes Budget
            </p>
          </div>
          
          <div className="grid gap-12">
            {types.map((type, index) => (
              <div key={type.title} className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <h3 className="text-3xl font-bold text-primary mb-4">{type.title}</h3>
                  <p className="text-lg text-base-content/80 mb-6">{type.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {type.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <svg className="w-4 h-4 text-secondary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link href="/kontakt" className="btn btn-primary">
                    Mehr erfahren
                  </Link>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <Image 
                    src={type.image}
                    alt={type.title}
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

      {/* Technology Section */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Moderne LED-Technologie</h2>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              Höchste Qualität durch modernste Beleuchtungstechnik
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.477.859h4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="card-title justify-center text-primary">Gleichmässige Ausleuchtung</h3>
                <p className="text-base-content/80">Optimale Lichtverteilung ohne Schatten oder helle Punkte</p>
              </div>
            </div>
            
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="card-title justify-center text-primary">Energieeffizient</h3>
                <p className="text-base-content/80">Bis zu 80% weniger Stromverbrauch als herkömmliche Systeme</p>
              </div>
            </div>
            
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="card-title justify-center text-primary">Langlebig</h3>
                <p className="text-base-content/80">Über 50.000 Stunden Lebensdauer bei minimaler Wartung</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">
                Vielfältige Einsatzbereiche
              </h2>
              <p className="text-lg text-base-content/80 mb-8">
                Leuchttransparente sind die ideale Lösung für grossflächige Aussenwerbung 
                mit maximaler Sichtbarkeit rund um die Uhr.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {applications.map((app) => (
                  <div key={app} className="flex items-center space-x-3">
                    <svg className="w-4 h-4 text-secondary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-base-content/80">{app}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Link href="/kontakt" className="btn btn-primary btn-lg">
                  Beratung anfragen
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <Image 
                src="/images/leuchttransparente-2.jpg"
                alt="Leuchttransparent Anwendung"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Grossflächige Werbewirkung gewünscht?
          </h2>
          <p className="text-lg text-primary/80 mb-8 max-w-2xl mx-auto">
            Lassen Sie uns Ihr Leuchttransparent planen und realisieren. 
            Von der Grösse bis zur Montage - wir übernehmen alles.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/kontakt" className="btn btn-primary btn-lg">
              Projekt besprechen
            </Link>
            <a href="tel:+41552255025" className="btn btn-outline btn-primary btn-lg">
              Sofort anrufen
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