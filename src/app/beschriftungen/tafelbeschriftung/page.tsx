import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'

export default function Tafelbeschriftung() {
  const services = [
    {
      title: "Firmenschilder",
      description: "Repräsentative Firmenschilder aus hochwertigen Materialien. Ihr Aushängeschild für den ersten Eindruck.",
      image: "/images/tafelbeschriftung-1.jpg",
      features: ["Wetterbeständig", "Verschiedene Materialien", "Beleuchtung möglich", "Corporate Design"],
      materials: "Alu, Edelstahl, Acryl"
    },
    {
      title: "Orientierungstafeln",
      description: "Informative Wegweiser und Orientierungshilfen für Gebäudekomplexe und Areale.",
      image: "/images/tafelbeschriftung-2.jpg",
      features: ["Übersichtlich", "Modulares System", "Mehrsprachig", "Barrierefrei"],
      materials: "Aluminium-Verbund"
    },
    {
      title: "Werbetafeln",
      description: "Auffällige Werbetafeln für Promotion und Dauerwerbeung. Indoor und Outdoor geeignet.",
      image: "/images/tafelbeschriftung-3.jpg",
      features: ["Grossformat", "Digitaldruck", "UV-beständig", "Schnell austauschbar"],
      materials: "PVC, Forex, Banner"
    },
    {
      title: "Bau- & Hinweistafeln",
      description: "Professionelle Bautafeln und Hinweisschilder für temporäre und permanente Installation.",
      image: "/images/leistungen-5.jpg",
      features: ["Robust", "Normgerecht", "Reflektierend", "Montagesystem"],
      materials: "Dibond, Alu-Blech"
    }
  ]

  const materials = [
    {
      material: "Aluminium-Verbund",
      description: "Leicht, stabil und wetterfest",
      properties: ["Leichtgewicht", "Planeben", "Rostfrei", "Langlebig"],
      applications: "Firmenschilder, Orientierung"
    },
    {
      material: "Acrylglas",
      description: "Glasklare Eleganz mit Bruchsicherheit",
      properties: ["Transparent", "Bruchsicher", "UV-beständig", "Hochglanz"],
      applications: "Praxisschilder, Logos"
    },
    {
      material: "Edelstahl",
      description: "Premium-Material für höchste Ansprüche",
      properties: ["Korrosionsbeständig", "Kratzfest", "Pflegeleicht", "Edel"],
      applications: "Repräsentative Schilder"
    },
    {
      material: "PVC / Forex",
      description: "Vielseitig und kostengünstig",
      properties: ["Kostengünstig", "Flexibel", "Leicht", "Farbecht"],
      applications: "Temporäre Schilder"
    }
  ]

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-content overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/tafelbeschriftung-1.jpg"
            alt="Tafelbeschriftung Neon Murer"
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
                <li className="text-secondary">Tafelbeschriftung</li>
              </ul>
            </nav>
            <h1 className="text-5xl font-bold mb-6">
              Tafelbeschriftung
            </h1>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Professionelle Schilder und Tafeln für jeden Anwendungsbereich. 
              Von der Firmentafel bis zur Orientierungshilfe - wir machen Sie sichtbar.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="stat bg-primary-content/20 backdrop-blur-sm rounded-lg p-4">
                <div className="stat-value text-secondary text-2xl">100+</div>
                <div className="stat-title text-sm opacity-80">Materialien</div>
              </div>
              <div className="stat bg-primary-content/20 backdrop-blur-sm rounded-lg p-4">
                <div className="stat-value text-secondary text-2xl">∞</div>
                <div className="stat-title text-sm opacity-80">Grössen möglich</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Unsere Tafellösungen</h2>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              Hochwertige Schilder und Tafeln für professionelle Kommunikation
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
                      Material: {service.materials}
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

      {/* Materials Section */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Materialauswahl</h2>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              Hochwertige Materialien für langlebige und ansprechende Tafeln
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
                  
                  <div className="mt-auto">
                    <p className="text-xs text-base-content/60 font-semibold">Ideal für:</p>
                    <p className="text-xs text-base-content/70">{material.applications}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Anwendungsbereiche</h2>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              Vielseitige Einsatzmöglichkeiten für professionelle Beschilderung
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-6a1 1 0 00-1-1H9a1 1 0 00-1 1v6a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Bürogebäude</h3>
              <p className="text-sm text-base-content/70">Firmenschilder und Orientierungssysteme</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2L3 7v11a2 2 0 002 2h4a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h4a2 2 0 002-2V7l-7-5zM8.5 13.5a.5.5 0 11-1 0 .5.5 0 011 0zm3 0a.5.5 0 11-1 0 .5.5 0 011 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Einzelhandel</h3>
              <p className="text-sm text-base-content/70">Ladenschilder und Werbetafeln</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Industrie</h3>
              <p className="text-sm text-base-content/70">Sicherheits- und Hinweistafeln</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Gesundheitswesen</h3>
              <p className="text-sm text-base-content/70">Praxisschilder und Patienteninformation</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Öffentliche Gebäude</h3>
              <p className="text-sm text-base-content/70">Behördenschilder und Wegeleitung</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Gastronomie</h3>
              <p className="text-sm text-base-content/70">Menütafeln und Restaurant-Beschilderung</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Unser Prozess</h2>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              Von der Beratung bis zur fertigen Tafel - professionell und termingerecht
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Beratung</h3>
              <p className="text-sm text-base-content/70">Materialberatung und Grössenbestimmung</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Design</h3>
              <p className="text-sm text-base-content/70">Layout-Entwicklung und Visualisierung</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Produktion</h3>
              <p className="text-sm text-base-content/70">Präzise Fertigung und Oberflächenveredelung</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Montage</h3>
              <p className="text-sm text-base-content/70">Professionelle Installation vor Ort</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">5</span>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Service</h3>
              <p className="text-sm text-base-content/70">Nachbetreuung und Wartung</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">
                Warum Tafelbeschriftung?
              </h2>
              <p className="text-lg text-base-content/80 mb-8">
                Professionelle Beschilderung ist Ihre Visitenkarte. Sie vermittelt Kompetenz, 
                schafft Orientierung und stärkt Ihr Markenimage nachhaltig.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Sichtbarkeit</h3>
                    <p className="text-base-content/70">Werden Sie gefunden und wahrgenommen - der erste Schritt zum Erfolg.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Professionalität</h3>
                    <p className="text-base-content/70">Hochwertige Beschilderung vermittelt Vertrauen und Kompetenz.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Langfristige Investition</h3>
                    <p className="text-base-content/70">Hochwertige Materialien sorgen für jahrelange Haltbarkeit und Werterhalt.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Image 
                src="/images/leistungen-6.jpg"
                alt="Tafelbeschriftung Vorteile"
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
            Bereit für professionelle Beschilderung?
          </h2>
          <p className="text-lg text-primary/80 mb-8 max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam die perfekte Lösung für Ihre Beschilderung entwickeln. 
            Von der Material-Beratung bis zur Montage.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/kontakt" className="btn btn-primary btn-lg">
              Material-Beratung
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