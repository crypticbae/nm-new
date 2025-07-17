import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'

export default function Dienstleistungen() {
  const services = [
    {
      id: 'beratung',
      title: 'Persönliche Beratung',
      icon: '🤝',
      description: 'Schweizweite Vor-Ort-Beratung mit professioneller Analyse, Vermessung und realistischen Fotomontagen.',
      features: ['Vor-Ort-Termine', 'Fotomontagen', 'Vermessung', 'Optimale Positionierung'],
      details: 'Wir legen grossen Wert auf eine persönliche und umfassende Beratung, um Ihre Reklame-Anlage perfekt auf Ihre Bedürfnisse abzustimmen. Unsere Aussendienst-Mitarbeiter stehen Ihnen schweizweit für Termine vor Ort zur Verfügung. Gemeinsam besprechen wir die optimale Lösung, von der idealen Positionierung bis zu den Montagemöglichkeiten. Vor Ort analysieren wir die Situation gründlich, fotografieren und vermessen die Gegebenheiten, um eine präzise Grundlage für die Planung zu schaffen. Auf dieser Basis erstellen wir realistische Fotomontagen, die Ihnen als Entscheidungshilfe dienen. Dabei berücksichtigen wir sämtliche Details wie Farben, Dimensionen und die passende Ausleuchtung, um Ihre Reklame-Anlage optimal in Szene zu setzen und Ihre Vorstellungen perfekt umzusetzen.',
      image: '/images/leistungen-1.jpg'
    },
    {
      id: 'bewilligung',
      title: 'Bewilligungseingaben',
      icon: '📋',
      description: 'Komplette Abwicklung aller Bewilligungsverfahren und Behördenkontakte für Ihre Werbeanlagen.',
      features: ['Reklamegesuch', 'Technischer Beschrieb', 'Katasterplan', 'Fotomontagen'],
      details: 'Wir übernehmen für Sie den gesamten Prozess der Bewilligungseingabe, damit Sie sich auf Ihr Kerngeschäft konzentrieren können. Dazu stellen wir alle erforderlichen Unterlagen zusammen, darunter das Reklamegesuch, den technischen Beschrieb, den Katasterplan (Situationsplan) und realistische Fotomontagen. Diese Dokumente lassen wir von Ihnen als Bauherrn sowie vom Grundeigentümer unterzeichnen und reichen das vollständige Gesuch bei der zuständigen Gemeinde ein. Die Dauer bis zur Bewilligung variiert je nach Gemeinde und beträgt in der Regel etwa vier bis acht Wochen. Mit unserem Service stellen wir sicher, dass der gesamte Prozess effizient und problemlos für Sie abgewickelt wird.',
      image: '/images/leistungen-2.jpg'
    },
    {
      id: 'montage',
      title: 'Montageservice',
      icon: '🔧',
      description: 'Professionelle Montage durch erfahrenes Team mit speziell ausgestatteten Fahrzeugen und Hebebühnen.',
      features: ['Erfahrenes Team', 'Hebebühnen 18m/22m', 'ESTI-Vorschriften', 'Spezialausrüstung'],
      details: 'Unser Montageservice bietet Ihnen eine professionelle und reibungslose Umsetzung vor Ort, durchgeführt von unserem erfahrenen Montageteam. Die Montage erfolgt stets in enger Abstimmung mit Ihnen als Bauherrn, sodass Ihre Wünsche und Anforderungen berücksichtigt werden. Für einen optimalen Ablauf kümmern wir uns im Vorfeld um alle notwendigen Abklärungen und Vorbereitungen. Unser Team ist täglich mit unseren speziell ausgestatteten Montagewagen und Hebebühnen (mit einer Reichweite von 18 m und 22 m) im Einsatz, um selbst anspruchsvolle Installationen effizient durchzuführen. Selbstverständlich erfolgen alle Arbeiten gemäss den geltenden Vorschriften des Eidgenössischen Starkstrom-Inspektorats (ESTI), sodass höchste Sicherheit und Qualität gewährleistet sind.',
      image: '/images/leistungen-3.jpg'
    },
    {
      id: 'reparatur',
      title: 'Reparaturservice',
      icon: '🔨',
      description: 'Schnelle und zuverlässige Reparaturen meist innerhalb einer Woche mit hauseigenen Werkstätten.',
      features: ['Innerhalb 1 Woche', 'Hebebühnen bis 22m', 'Hauseigene Werkstätten', 'Alle Reparaturarten'],
      details: 'Unser Reparaturservice sorgt für schnelle und zuverlässige Lösungen, meist innerhalb einer Woche. Egal ob Reparaturen in grosser Höhe, dank Hebebühnen bis 22 m, oder Arbeiten an Fluoreszenzröhren, Neonsystemen und LED-Modulen – wir sind Ihr Experte. Defekte Neonkonturen werden in unserer hauseigenen Glasbläserei präzise nachgebildet, beschädigte Beschriftungen in unserer Schriftenmalerei erneuert und Aluminiumkonstruktionen in der Spenglerei repariert. Auch Acrylglas reparieren wir im eigenen Plexi-Atelier oder fertigen neue Formen an. Wir kümmern uns um jedes Detail, damit Ihre Reklame wieder in perfektem Zustand erstrahlt.',
      image: '/images/leistungen-4.jpg'
    },
    {
      id: 'reinigung',
      title: 'Reinigungsservice',
      icon: '✨',
      description: 'Professionelle Reinigung mit Service-Verträgen für gepflegte Leuchtreklame das ganze Jahr.',
      features: ['Service-Verträge', 'Jährliche Reinigung', 'Vollservice-Option', 'Hebebühnen inklusive'],
      details: 'Eine gepflegte Leuchtreklame ist essenziell, um Ihr Unternehmen stets im besten Licht zu präsentieren. Mit unserem Service-Vertrag übernehmen wir einmal jährlich die Reinigung und Kontrolle Ihrer Anlage. Hierbei sind alle notwendigen Arbeiten, wie die Verwendung von Hebebühnen und das Abdecken von Acrylglashauben, bereits im Preis enthalten. Unser Vollservice-Vertrag bietet darüber hinaus den Austausch oder die Reparatur aller elektrischen Teile bei Defekt oder Verschleiss – ideal für eine rundum sorgenfreie Wartung (ausgenommen Elementar- und Vandalismusschäden). Wir beraten Sie gerne unverbindlich zu den Optionen und erstellen ein passendes Angebot für Ihre individuellen Bedürfnisse.',
      image: '/images/leistungen-5.jpg'
    },
    {
      id: 'weihnachten',
      title: 'Weihnachtsbeleuchtung',
      icon: '🎄',
      description: 'Professionelle Weihnachtsbeleuchtung mit Quick-Fix-System und IP44-Standard für den Aussenbereich.',
      features: ['Quick-Fix-System', 'IP44-Standard', 'Montage/Demontage', 'Individuelle Beratung'],
      details: 'Verwandeln Sie Ihr Zuhause oder Ihr Geschäft in eine stimmungsvolle Festtagskulisse – ob schlicht, festlich, prachtvoll oder überwältigend, wir beraten Sie individuell. Unsere professionellen Lichterketten sind hochwertig, flexibel einsetzbar und dank des Quick-Fix-Systems einfach zu installieren und anzupassen. Für den Aussenbereich bieten wir ausschliesslich Produkte nach IP44-Standard oder höher (spritzwassergeschützt). Unser Service umfasst zudem die Montage, Demontage und Reparatur mit unserer eigenen Hebebühne, damit Ihre Weihnachtsbeleuchtung sicher und reibungslos erstrahlt.',
      image: '/images/leistungen-6.jpg'
    }
  ]

  const advantages = [
    {
      title: '75 Jahre Erfahrung',
      description: 'Seit 1949 Ihr Partner für Lichtwerbung',
      icon: '🏆'
    },
    {
      title: '24/7 Service',
      description: 'Notfallservice rund um die Uhr',
      icon: '⏰'
    },
    {
      title: 'Schweizweite Präsenz',
      description: 'Standorte in Rapperswil und Uznach',
      icon: '🇨🇭'
    },
    {
      title: 'Komplettservice',
      description: 'Alles aus einer Hand',
      icon: '🎯'
    }
  ]

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-content overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/team-gruppenfoto.jpg"
            alt="Neon Murer Team"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl font-bold mb-6">
              Dienstleistungen
            </h1>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Umfassende Lösungen rund um Ihre Leuchtreklame. Von der Planung und Bewilligung 
              über die Montage bis hin zu Wartung, Reparatur und Reinigung.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="stat bg-primary-content/20 backdrop-blur-sm rounded-lg p-4">
                <div className="stat-value text-secondary text-2xl">75+</div>
                <div className="stat-title text-sm opacity-80">Jahre Erfahrung</div>
              </div>
              <div className="stat bg-primary-content/20 backdrop-blur-sm rounded-lg p-4">
                <div className="stat-value text-secondary text-2xl">24/7</div>
                <div className="stat-title text-sm opacity-80">Service verfügbar</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Unsere Services</h2>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              Von der Idee bis zur perfekten Umsetzung - entdecken Sie unsere Expertise
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300">
                <figure className="h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </figure>
                <div className="card-body">
                  <h3 className="card-title text-primary text-xl">
                    <span className="text-2xl mr-2">{service.icon}</span>
                    {service.title}
                  </h3>
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
                  
                  <div className="card-actions">
                    <Link href="/kontakt" className="btn btn-primary btn-sm">
                      Service anfragen
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Service im Detail</h2>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              Entdecken Sie, was unsere Dienstleistungen so besonders macht
            </p>
          </div>
          
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={service.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-4">{service.icon}</span>
                    <h3 className="text-3xl font-bold text-primary">{service.title}</h3>
                  </div>
                  <p className="text-lg text-base-content/80 mb-6">{service.details}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-secondary rounded-full"></div>
                        <span className="text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link href="/kontakt" className="btn btn-primary">
                    {service.title} anfragen
                  </Link>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <Image 
                    src={service.image}
                    alt={service.title}
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

      {/* Advantages Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Warum Neon Murer?</h2>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              Seit 1949 Ihr zuverlässiger Partner für Lichtwerbung
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage) => (
              <div key={advantage.title} className="text-center">
                <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">{advantage.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">{advantage.title}</h3>
                <p className="text-base-content/70">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Unser Prozess</h2>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              So läuft Ihr Projekt bei uns ab - professionell und transparent
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Erstberatung</h3>
              <p className="text-sm text-base-content/70">Kostenlose Beratung und Analyse Ihrer Anforderungen</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Planung</h3>
              <p className="text-sm text-base-content/70">Detailplanung und Kostenschätzung für Ihr Projekt</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Bewilligung</h3>
              <p className="text-sm text-base-content/70">Abwicklung aller behördlichen Verfahren</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Umsetzung</h3>
              <p className="text-sm text-base-content/70">Professionelle Herstellung und Montage</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">5</span>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Service</h3>
              <p className="text-sm text-base-content/70">Wartung und Support für langfristige Zufriedenheit</p>
            </div>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Bereit für Ihr Leuchtreklameprojekt?
          </h2>
          <p className="text-lg text-primary/80 mb-8 max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam Ihre Vision verwirklichen. 
            Kostenlose Erstberatung und unverbindliche Offerte.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/kontakt" className="btn btn-primary btn-lg">
              Kostenlose Beratung
            </Link>
            <a href="tel:+41552255025" className="btn btn-outline btn-primary btn-lg">
              +41 55 225 50 25
            </a>
            <a href="mailto:neon@neonmurer.ch" className="btn btn-ghost btn-lg">
              neon@neonmurer.ch
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
} 