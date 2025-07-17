import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'

export default function Leuchtschriften() {
  const features = [
    {
      title: "LED-Buchstaben",
      description: "Energieeffiziente LED-Technik für brillante Ausleuchtung und lange Lebensdauer.",
      image: "/images/leistungen-1.jpg"
    },
    {
      title: "Neon-Schriften",
      description: "Handgefertigte Neon-Röhren aus unserer eigenen Glasbläserei für klassische Eleganz.",
      image: "/images/neon-led-technik-1.jpg"
    },
    {
      title: "Vollplexi-Buchstaben",
      description: "Hochwertige Acrylglas-Buchstaben mit gleichmässiger Hintergrundbeleuchtung.",
      image: "/images/halbrelief-plattenschriften-1.jpg"
    },
    {
      title: "Edelstahl-Varianten",
      description: "Edle Edelstahl-Buchstaben mit LED-Beleuchtung für repräsentative Anwendungen.",
      image: "/images/halbrelief-plattenschriften-2.jpg"
    }
  ]

  const applications = [
    "Firmenlogos und Schriftzüge",
    "Ladenbeschriftung",
    "Gebäudekennzeichnung", 
    "Werbeschilder",
    "Orientierungssysteme",
    "Innen- und Aussenanwendungen"
  ]

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-content overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/leistungen-1.jpg"
            alt="Leuchtschriften Neon Murer"
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
                <li className="text-secondary">Leuchtschriften</li>
              </ul>
            </nav>
            <h1 className="text-5xl font-bold mb-6">
              Leuchtschriften
            </h1>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Hochwertige beleuchtete Schriftzüge für maximale Aufmerksamkeit. 
              Von LED-Technik bis handgefertigtem Neon - wir bringen Ihre Botschaft zum Leuchten.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="stat bg-primary-content/20 backdrop-blur-sm rounded-lg p-4">
                <div className="stat-value text-secondary text-2xl">100+</div>
                <div className="stat-title text-sm opacity-80">Leuchtschriften pro Jahr</div>
              </div>
              <div className="stat bg-primary-content/20 backdrop-blur-sm rounded-lg p-4">
                <div className="stat-value text-secondary text-2xl">5J</div>
                <div className="stat-title text-sm opacity-80">Garantie</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Unsere Leuchtschrift-Varianten</h2>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              Verschiedene Technologien und Materialien für jeden Anwendungsbereich
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={feature.title} className={`card lg:card-side bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <figure className="lg:w-1/2">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={400}
                    height={300}
                    className="object-cover w-full h-64 lg:h-full"
                  />
                </figure>
                <div className="card-body lg:w-1/2">
                  <h3 className="card-title text-primary">{feature.title}</h3>
                  <p className="text-base-content/80">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Unser Produktionsprozess</h2>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              Von der ersten Idee bis zur fertigen Leuchtschrift
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Beratung & Design</h3>
              <p className="text-sm text-base-content/70">Gemeinsame Entwicklung Ihres individuellen Schriftzugs</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Produktion</h3>
              <p className="text-sm text-base-content/70">Präzise Fertigung in unserer modernen Werkstatt</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Montage</h3>
              <p className="text-sm text-base-content/70">Fachgerechte Installation durch unser Expertenteam</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Service</h3>
              <p className="text-sm text-base-content/70">Langfristige Wartung und Support</p>
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
                Vielfältige Anwendungen
              </h2>
              <p className="text-lg text-base-content/80 mb-8">
                Leuchtschriften sind vielseitig einsetzbar und sorgen für maximale Sichtbarkeit Ihrer Marke - 
                bei Tag und Nacht.
              </p>
              
              <div className="space-y-4">
                {applications.map((app) => (
                  <div key={app} className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-secondary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-base-content/80">{app}</span>
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
                src="/images/halbrelief-plattenschriften-3.jpg"
                alt="Leuchtschriften Anwendung"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 bg-primary text-primary-content">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Vorteile unserer Leuchtschriften</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.477.859h4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Energieeffizient</h3>
              <p className="text-sm opacity-80">Moderne LED-Technik spart bis zu 80% Strom</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Langlebig</h3>
              <p className="text-sm opacity-80">Bis zu 50.000 Stunden Lebensdauer</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Wartungsarm</h3>
              <p className="text-sm opacity-80">Minimaler Wartungsaufwand</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v4a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 6a1 1 0 011-1h12a1 1 0 011 1v4a1 1 0 01-1 1H4a1 1 0 01-1-1v-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Individuell</h3>
              <p className="text-sm opacity-80">Massgeschneidert nach Ihren Wünschen</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Ihre leuchtende Schrift wartet auf Sie!
          </h2>
          <p className="text-lg text-primary/80 mb-8 max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam die perfekte Leuchtschrift für Ihr Unternehmen entwickeln. 
            Von der ersten Skizze bis zur fertigen Installation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/kontakt" className="btn btn-primary btn-lg">
              Kostenloses Angebot
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