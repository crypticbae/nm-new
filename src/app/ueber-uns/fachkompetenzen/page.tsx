import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'

export default function Fachkompetenzen() {
  const competencies = [
    {
      title: "Metallbauarbeiten",
      description: "Präzise Metallbearbeitung für stabile und langlebige Konstruktionen von einfachen Halterungen bis zu komplexen Werbeträgern",
      details: "Professionelle Metallbearbeitung für alle Anforderungen der Werbetechnik. Von einfachen Halterungen bis zu komplexen Werbeträgern fertigen wir mit höchster Präzision und verwenden dabei bewährte Schweiss- und Konstruktionstechniken.",
      features: [
        "Schweissen",
        "Konstruktion", 
        "Oberflächenbehandlung",
        "Korrosionsschutz"
      ],
      icon: "🔨",
      image: "/images/fachkompetenzen-1.webp"
    },
    {
      title: "Blechbearbeitung",
      description: "Professionelle Bearbeitung verschiedener Blecharten für massgeschneiderte Werbelösungen und technische Anwendungen",
      details: "Umfassende Blechbearbeitung für präzise Werbelösungen. Wir schneiden, stanzen, biegen und formen verschiedene Blecharten nach Ihren Anforderungen und veredeln die Oberflächen für optimalen Schutz und Optik.",
      features: [
        "Schneiden & Stanzen",
        "Biegen & Formen",
        "Kantbearbeitung",
        "Oberflächenveredelung"
      ],
      icon: "🏭",
      image: "/images/fachkompetenzen-2.webp"
    },
    {
      title: "CNC-Frästechnik",
      description: "Hochpräzise computergesteuerte Bearbeitung für komplexe Formen und filigrane Details mit höchster Genauigkeit",
      details: "Modernste CNC-Technologie ermöglicht uns die präzise Bearbeitung komplexer Formen und filigraner Details. Von der 3D-Bearbeitung bis zur Serienfertigung realisieren wir Ihre Projekte mit höchster Genauigkeit.",
      features: [
        "3D-Bearbeitung",
        "Prototyping",
        "Serienfertigung", 
        "Verschiedene Materialien"
      ],
      icon: "⚙️",
      image: "/images/fachkompetenzen-3.webp"
    },
    {
      title: "Laser-Schneidtechnik",
      description: "Modernste Lasertechnologie für präzise Schnitte und filigrane Konturen in verschiedenen Materialien",
      details: "Unsere modernste Lasertechnologie ermöglicht präzise Schnitte und filigrane Konturen in verschiedenen Materialien. Ob Präzisionsschnitte oder detaillierte Gravuren - wir arbeiten mit höchster Genauigkeit.",
      features: [
        "Präzisionsschnitte",
        "Gravuren & Markierungen",
        "Verschiedene Materialstärken"
      ],
      icon: "⚡",
      image: "/images/fachkompetenzen-4.webp"
    },
    {
      title: "Acrylglas-Atelier",
      description: "Spezialisierte Bearbeitung von Acrylglas für hochwertige, transparente und lichtdurchlässige Werbeelemente",
      details: "In unserem spezialisierten Acrylglas-Atelier fertigen wir hochwertige, transparente und lichtdurchlässige Werbeelemente. Von der Präzisionsbearbeitung bis zu speziellen Biegeverfahren - wir beherrschen alle Techniken.",
      features: [
        "Präzisionszuschnitt",
        "Kanten polieren",
        "Biegeverfahren",
        "UV-beständige Materialien"
      ],
      icon: "💎",
      image: "/images/fachkompetenzen-5.webp"
    },
    {
      title: "Lackiererei",
      description: "Professionelle Oberflächenbeschichtung für optimalen Schutz und perfekte Optik in jeder gewünschten Farbe",
      details: "Unsere professionelle Lackiererei sorgt für optimalen Schutz und perfekte Optik. Von der RAL-Farbpalette über Witterungsschutz bis zu speziellen Pulverbeschichtungen bieten wir alle Oberflächenbehandlungen.",
      features: [
        "RAL-Farbpalette",
        "Witterungsschutz",
        "Pulverbeschichtung",
        "Spezialverfahren"
      ],
      icon: "🎨",
      image: "/images/fachkompetenzen-6.webp"
    },
    {
      title: "LED-Beleuchtungsplanung",
      description: "Moderne LED-Technologie für energieeffiziente und langlebige Beleuchtungslösungen mit optimaler Lichtverteilung",
      details: "Professionelle LED-Beleuchtungsplanung für energieeffiziente und langlebige Lösungen. Wir entwickeln optimale Lichtverteilungen mit anpassbaren Farbtemperaturen und intelligenten Dimming-Funktionen.",
      features: [
        "Energieeffiziente Lösungen",
        "Farbtemperatur-Anpassung",
        "Dimming-Funktionen"
      ],
      icon: "💡",
      image: "/images/fachkompetenzen-7.webp"
    },
    {
      title: "Digitale Druckverfahren",
      description: "Hochauflösende Drucktechnologien für brillante Farben und gestochen scharfe Details auf verschiedenen Materialien",
      details: "Modernste digitale Druckverfahren für brillante Farben und gestochen scharfe Details. Mit UV-beständigen Tinten und Grossformatdruck auf verschiedenen Substraten realisieren wir Ihre Druckprojekte in höchster Qualität.",
      features: [
        "UV-beständige Tinten",
        "Grossformatdruck",
        "Verschiedene Substrate"
      ],
      icon: "🖨️",
      image: "/images/fachkompetenzen-8.webp"
    },
    {
      title: "Schriftenmalerei",
      description: "Professionelle Beschriftungslösungen durch digitales Plotten und moderne Verarbeitungstechniken für präzise Ergebnisse",
      details: "Moderne Schriftenmalerei durch digitales Plotten und professionelle Verarbeitungstechniken. Von der Klebefolien-Verarbeitung über Konturenschnitt bis zur präzisen Montage bieten wir alle Beschriftungslösungen.",
      features: [
        "Digitales Plotten",
        "Klebefolien-Verarbeitung",
        "Konturenschnitt",
        "Präzise Montage"
      ],
      icon: "✏️",
      image: "/images/fachkompetenzen-9.webp"
    }
  ]

  const stats = [
    { value: "75+", label: "Jahre Erfahrung", icon: "🏆" },
    { value: "9", label: "Fachbereiche", icon: "⚙️" },
    { value: "20+", label: "Spezialist:innen", icon: "👥" },
    { value: "2", label: "Standorte", icon: "📍" }
  ]

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-content overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/team-gruppenfoto.jpg"
            alt="Neon Murer Fachkompetenzen"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="breadcrumbs text-sm opacity-70 mb-4 justify-center">
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/ueber-uns">Über uns</Link></li>
                <li>Fachkompetenzen</li>
              </ul>
            </div>
            <h1 className="text-6xl font-bold mb-6">
              Fachkompetenzen
            </h1>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              75 Jahre geballte Expertise in 9 Fachbereichen. Von traditioneller Glasbläserei 
              bis zu modernster LED-Technologie - wir beherrschen alle Facetten der Lichtwerbung.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-primary/80 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competencies Grid */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Unsere Expertise</h2>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              Jeder Fachbereich wird von Spezialisten betreut, die ihr Handwerk perfekt beherrschen
            </p>
          </div>
          
          <div className="space-y-20">
            {competencies.map((comp, index) => (
              <div key={comp.title} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center mb-6">
                    <span className="text-4xl mr-4">{comp.icon}</span>
                    <h3 className="text-3xl font-bold text-primary">{comp.title}</h3>
                  </div>
                  <p className="text-lg text-base-content/80 mb-6">{comp.description}</p>
                  <p className="text-base text-base-content/70 mb-8">{comp.details}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {comp.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0"></div>
                        <span className="text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link href="/kontakt" className="btn btn-primary">
                    Beratung anfragen
                  </Link>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="relative overflow-hidden rounded-2xl shadow-xl">
                    <Image 
                      src={comp.image}
                      alt={comp.title}
                      width={600}
                      height={400}
                      className="w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                  </div>
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
            <h2 className="text-4xl font-bold text-primary mb-4">Moderne Technologie</h2>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              Wir investieren kontinuierlich in modernste Technologie und Weiterbildung
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body text-center">
                <div className="text-4xl mb-4">🏭</div>
                <h3 className="card-title justify-center text-primary">Moderne Produktion</h3>
                <p className="text-base-content/80">
                  State-of-the-art Maschinen und Anlagen für höchste Qualität und Effizienz
                </p>
              </div>
            </div>
            
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body text-center">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="card-title justify-center text-primary">Kontinuierliche Weiterbildung</h3>
                <p className="text-base-content/80">
                  Regelmässige Schulungen und Zertifizierungen halten unser Team auf dem neuesten Stand
                </p>
              </div>
            </div>
            
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body text-center">
                <div className="text-4xl mb-4">🔬</div>
                <h3 className="card-title justify-center text-primary">Forschung & Entwicklung</h3>
                <p className="text-base-content/80">
                  Eigene Entwicklungsabteilung für innovative Lösungen und neue Technologien
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Qualitätsstandards</h2>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              Höchste Qualität durch zertifizierte Prozesse und Standards
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-secondary text-2xl">✓</span>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">ESTI-Zertifiziert</h3>
              <p className="text-sm text-base-content/70">Alle elektrischen Arbeiten nach ESTI-Vorschriften</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-secondary text-2xl">🏆</span>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">ISO-Standards</h3>
              <p className="text-sm text-base-content/70">Qualitätsmanagement nach internationalen Standards</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-secondary text-2xl">🌱</span>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Umweltstandards</h3>
              <p className="text-sm text-base-content/70">Nachhaltige Materialien und Prozesse</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-secondary text-2xl">🛡️</span>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Sicherheit</h3>
              <p className="text-sm text-base-content/70">Höchste Sicherheitsstandards bei allen Arbeiten</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Lassen Sie sich von unserer Expertise überzeugen
          </h2>
          <p className="text-lg text-primary/80 mb-8 max-w-2xl mx-auto">
            Profitieren Sie von 75 Jahren Erfahrung und modernster Technologie. 
            Wir realisieren Ihr Projekt mit höchster Qualität.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/kontakt" className="btn btn-primary btn-lg">
              Projekt besprechen
            </Link>
            <Link href="/ueber-uns" className="btn btn-outline btn-primary btn-lg">
              Mehr über uns
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
} 