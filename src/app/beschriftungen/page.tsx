import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'

export default function Beschriftungen() {
  const categories = [
    {
      title: "Fahrzeugbeschriftung",
      description: "Professionelle Fahrzeugbeschriftung für Firmenfahrzeuge, Transporter und PKW. Mobile Werbung, die auffällt und wirkt.",
      image: "/images/fahrzeugbeschriftung-1.jpg",
      href: "/beschriftungen/fahrzeug",
      features: ["Vollfolierung", "Teilfolierung", "Digitaldruck", "Wetterfest"]
    },
    {
      title: "Fensterbeschriftung",
      description: "Elegante Fensterbeschriftung für Geschäfte und Büros. Von dezenter Milchglasfolie bis zu auffälligen Werbebotschaften.",
      image: "/images/fensterbeschriftung-1.jpg",
      href: "/beschriftungen/fenster",
      features: ["Sichtschutz", "Werbeeffekt", "UV-Schutz", "Einfache Entfernung"]
    },
    {
      title: "Tafelbeschriftung",
      description: "Hochwertige Beschriftung auf verschiedenen Trägermaterialien. Für Schilder, Tafeln und Informationssysteme.",
      image: "/images/tafelbeschriftung-1.jpg",
      href: "/beschriftungen/tafel",
      features: ["Vielfältige Materialien", "Wetterbeständig", "Präzise Ausführung", "Langlebig"]
    },
    {
      title: "Signaletik",
      description: "Durchdachte Leitsysteme und Orientierungshilfen. Funktionale Beschilderung für Gebäude und Aussenanlagen.",
      image: "/images/signaletik-1.jpg",
      href: "/beschriftungen/signaletik",
      features: ["Leitsysteme", "Orientierung", "Barrierefreiheit", "Corporate Design"]
    },
    {
      title: "Grossformatdruck",
      description: "Beeindruckende grossformatige Drucke für Plakate, Banner und Aussenwerbung. Brillante Farben in jeder Grösse.",
      image: "/images/grossformatdruck-1.jpg",
      href: "/beschriftungen/grossformat",
      features: ["XL-Format", "UV-beständig", "Brillante Farben", "Schnelle Produktion"]
    },
    {
      title: "Blachen & Fahnen",
      description: "Robuste Blachen und Fahnen für Events, Baustellen und Dauerwerbung. Wind- und wetterfest für jeden Einsatz.",
      image: "/images/blachen-fahnen-1.jpg",
      href: "/beschriftungen/blachen",
      features: ["Reissfest", "Ösen & Saum", "Event-tauglich", "Individuell"]
    }
  ]

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-content overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/fahrzeugbeschriftung-2.jpg"
            alt="Beschriftungen Neon Murer"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Beschriftungen
            </h1>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Jede Oberfläche wird zur Werbefläche! Professionelle Beschriftungen für maximale 
              Markenvisibilität auf Fahrzeugen, Fenstern, Tafeln und mehr.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="stat bg-primary-content/20 backdrop-blur-sm rounded-lg p-4">
                <div className="stat-value text-secondary text-2xl">1000+</div>
                <div className="stat-title text-sm opacity-80">Fahrzeuge beschriftet</div>
              </div>
              <div className="stat bg-primary-content/20 backdrop-blur-sm rounded-lg p-4">
                <div className="stat-value text-secondary text-2xl">24h</div>
                <div className="stat-title text-sm opacity-80">Express-Service</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Unsere Beschriftungs-Services</h2>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              Von der Fahrzeugbeschriftung bis zum Grossformatdruck - wir machen Ihre Werbung sichtbar
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <div key={category.title} className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <figure>
                  <Image
                    src={category.image}
                    alt={category.title}
                    width={400}
                    height={300}
                    className="object-cover w-full h-48"
                  />
                </figure>
                <div className="card-body">
                  <h3 className="card-title text-primary">{category.title}</h3>
                  <p className="text-base-content/80 text-sm mb-4">{category.description}</p>
                  
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {category.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <svg className="w-3 h-3 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="card-actions">
                    <Link href={category.href} className="btn btn-primary btn-sm">
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Warum Neon Murer für Ihre Beschriftung?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">Präzise Ausführung</h3>
                    <p className="text-sm text-base-content/70">75 Jahre Erfahrung garantieren perfekte Umsetzung Ihrer Beschriftungswünsche</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">Vielfältige Materialien</h3>
                    <p className="text-sm text-base-content/70">Hochwertige Folien, wetterbeständige Farben und modernste Drucktechnologie</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">Komplettservice</h3>
                    <p className="text-sm text-base-content/70">Von der Beratung über Design bis zur professionellen Montage - alles aus einer Hand</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image 
                src="/images/fahrzeugbeschriftung-3.jpg"
                alt="Professionelle Beschriftung"
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
            Ihre Beschriftung wartet auf Sie!
          </h2>
          <p className="text-lg text-primary/80 mb-8 max-w-2xl mx-auto">
            Nutzen Sie jede Oberfläche als Werbefläche. Wir beraten Sie gerne zu den besten Lösungen für Ihr Projekt.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/kontakt" className="btn btn-primary btn-lg">
              Kostenvoranschlag
            </Link>
            <a href="tel:+41552255025" className="btn btn-outline btn-primary btn-lg">
              Sofort anrufen
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
} 