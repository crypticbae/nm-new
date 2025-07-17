import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'

export default function Lichtwerbung() {
  const categories = [
    {
      title: "Leuchtschriften",
      description: "Hochwertige beleuchtete Schriftzüge für maximale Aufmerksamkeit. Ob LED oder Neon - wir bringen Ihre Botschaft zum Leuchten.",
      image: "/images/leistungen-1.jpg",
      href: "/lichtwerbung/leuchtschriften",
      features: ["LED-Technik", "Neon-Röhren", "Energieeffizient", "Wetterbeständig"]
    },
    {
      title: "Leuchttransparente",
      description: "Grossflächige beleuchtete Werbetafeln für optimale Fernwirkung. Perfekt für Geschäfte und Unternehmen.",
      image: "/images/leuchttransparente-1.jpg",
      href: "/lichtwerbung/leuchttransparente",
      features: ["Grossformat", "Gleichmässige Ausleuchtung", "Wechselbare Motive", "Wetterfest"]
    },
    {
      title: "Halbrelief- / Plattenschriften",
      description: "Elegante 3D-Schriftzüge mit räumlicher Tiefe. Kombiniert plastische Wirkung mit moderner Beleuchtung.",
      image: "/images/halbrelief-plattenschriften-1.jpg",
      href: "/lichtwerbung/halbrelief",
      features: ["3D-Effekt", "Hochwertige Materialien", "Individuelle Gestaltung", "Langlebig"]
    },
    {
      title: "Neon / LED-Technik",
      description: "Von klassischem Neon bis zu modernster LED-Technologie. Eigene Glasbläserei für handgefertigte Neon-Lösungen.",
      image: "/images/neon-led-technik-1.jpg",
      href: "/lichtwerbung/neon-led",
      features: ["Handgefertigtes Neon", "Moderne LED", "Farbspektrum", "Dimm-Funktionen"]
    },
    {
      title: "Pylonen",
      description: "Weithin sichtbare Werbeträger für Tankstellen, Einkaufszentren und Gewerbeparks. Robust und auffällig.",
      image: "/images/pylonen-1.jpg",
      href: "/lichtwerbung/pylonen",
      features: ["Freistehend", "Grossformat", "Mehrfach-Werbung", "Stabil"]
    }
  ]

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-content overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/leistungen-2.jpg"
            alt="Lichtwerbung Neon Murer"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Lichtwerbung
            </h1>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Seit über 75 Jahren bringen wir Ihre Marke zum Strahlen. Von handgefertigten Neon-Kreationen 
              bis zu modernster LED-Technologie - entdecken Sie unser Lichtwerbung-Spektrum.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="stat bg-primary-content/20 backdrop-blur-sm rounded-lg p-4">
                <div className="stat-value text-secondary text-2xl">75+</div>
                <div className="stat-title text-sm opacity-80">Jahre Erfahrung</div>
              </div>
              <div className="stat bg-primary-content/20 backdrop-blur-sm rounded-lg p-4">
                <div className="stat-value text-secondary text-2xl">500+</div>
                <div className="stat-title text-sm opacity-80">Projekte realisiert</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Unsere Lichtwerbung-Lösungen</h2>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              Professionelle Lichtwerbung in allen Bereichen - von der Konzeption bis zur Montage
            </p>
          </div>
          
          <div className="grid gap-8">
            {categories.map((category, index) => (
              <div key={category.title} className={`card lg:card-side bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <figure className="lg:w-1/2">
                  <Image
                    src={category.image}
                    alt={category.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-64 lg:h-full"
                  />
                </figure>
                <div className="card-body lg:w-1/2">
                  <h3 className="card-title text-2xl text-primary">{category.title}</h3>
                  <p className="text-base-content/80 mb-4">{category.description}</p>
                  
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {category.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="card-actions">
                    <Link href={category.href} className="btn btn-primary">
                      Mehr erfahren
                    </Link>
                    <Link href="/kontakt" className="btn btn-outline btn-primary">
                      Beratung anfragen
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Bereit für Ihre leuchtende Lösung?
          </h2>
          <p className="text-lg text-primary/80 mb-8 max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam Ihr Lichtwerbung-Projekt realisieren. 
            Von der ersten Idee bis zur finalen Montage sind wir Ihr Partner.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/kontakt" className="btn btn-primary btn-lg">
              Kostenloses Angebot
            </Link>
            <a href="tel:+41552255025" className="btn btn-outline btn-primary btn-lg">
              +41 55 225 50 25
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
} 