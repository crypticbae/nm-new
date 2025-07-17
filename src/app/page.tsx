import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      
      {/* Services Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Unsere Leistungen</h2>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              Mit 75 Jahren Erfahrung bieten wir Ihnen das komplette Spektrum der Lichtwerbung und Werbetechnik
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Lichtwerbung */}
            <div className="card bg-base-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="card-body text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.477.859h4z" />
                  </svg>
                </div>
                <h3 className="card-title text-primary justify-center">Lichtwerbung</h3>
                <p className="text-sm text-base-content/70">
                  Leuchtschriften, Neon-Technik, LED-Displays und Pylonen für maximale Aufmerksamkeit
                </p>
                <div className="card-actions justify-center mt-4">
                  <a href="/lichtwerbung" className="btn btn-primary btn-sm">
                    Mehr erfahren
                  </a>
                </div>
              </div>
            </div>

            {/* Beschriftungen */}
            <div className="card bg-base-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="card-body text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                </div>
                <h3 className="card-title text-primary justify-center">Beschriftungen</h3>
                <p className="text-sm text-base-content/70">
                  Fahrzeug-, Fenster- und Tafelbeschriftung sowie Grossformatdruck
                </p>
                <div className="card-actions justify-center mt-4">
                  <a href="/beschriftungen" className="btn btn-primary btn-sm">
                    Mehr erfahren
                  </a>
                </div>
              </div>
            </div>

            {/* Digital Signage */}
            <div className="card bg-base-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="card-body text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v8a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 4a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm0 3a1 1 0 011-1h4a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="card-title text-primary justify-center">Digital Signage</h3>
                <p className="text-sm text-base-content/70">
                  Moderne LED-Displays für dynamische und interaktive Inhalte
                </p>
                <div className="card-actions justify-center mt-4">
                  <a href="/digital-signage" className="btn btn-primary btn-sm">
                    Mehr erfahren
                  </a>
                </div>
              </div>
            </div>

            {/* Dienstleistungen */}
            <div className="card bg-base-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="card-body text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="card-title text-primary justify-center">Dienstleistungen</h3>
                <p className="text-sm text-base-content/70">
                  Wartung, Reparatur und umfassende Beratung für alle Werbelösungen
                </p>
                <div className="card-actions justify-center mt-4">
                  <a href="/dienstleistungen" className="btn btn-primary btn-sm">
                    Mehr erfahren
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">
                75 Jahre Neon Murer
              </h2>
              <p className="text-lg text-base-content/80 mb-6">
                Seit 1949 sind wir Ihr verlässlicher Partner für innovative Lichtwerbung und professionelle Werbetechnik. 
                Von unserem Standort in Rapperswil-Jona aus betreuen wir Kunden in der ganzen Ostschweiz mit kreativen 
                und technisch ausgereiften Lösungen.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="stat bg-base-100 rounded-lg p-4">
                  <div className="stat-value text-secondary text-2xl">75+</div>
                  <div className="stat-title text-sm">Jahre Erfahrung</div>
                </div>
                <div className="stat bg-base-100 rounded-lg p-4">
                  <div className="stat-value text-secondary text-2xl">2</div>
                  <div className="stat-title text-sm">Standorte</div>
                </div>
              </div>
              <a href="/ueber-uns" className="btn btn-primary">
                Mehr über uns erfahren
              </a>
            </div>
            <div className="relative">
              {/* Team Image */}
              <div className="relative mb-6 rounded-2xl overflow-hidden shadow-xl">
                <Image 
                  src="/images/team-gruppenfoto.jpg"
                  alt="Neon Murer Team"
                  width={600}
                  height={400}
                  className="object-cover w-full h-64"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">Unser erfahrenes Team</p>
                  <p className="text-sm opacity-90">75 Jahre Kompetenz</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 text-primary-content">
                <h3 className="text-2xl font-bold mb-4">Unsere Standorte</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-secondary mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-semibold">Rapperswil-Jona</p>
                      <p className="text-sm opacity-90">Hauptsitz & Produktion</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-secondary mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-semibold">Uznach</p>
                      <p className="text-sm opacity-90">Verkauf & Service</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-primary-content/20">
                  <p className="text-sm">
                    <strong>Telefon:</strong> +41 55 225 50 25<br />
                    <strong>E-Mail:</strong> neon@neonmurer.ch
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
