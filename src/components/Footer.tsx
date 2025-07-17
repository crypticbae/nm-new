import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-content">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image 
                src="/images/neonmurer-icon.svg" 
                alt="Neon Murer AG Logo" 
                width={48} 
                height={48}
                className="w-12 h-12"
              />
              <div>
                <h3 className="text-xl font-bold">Neon Murer AG</h3>
                <p className="text-sm opacity-80">Lichtwerbung & Werbetechnik</p>
              </div>
            </div>
            <p className="text-sm opacity-90">
              Seit 1949 Ihr verlässlicher Partner für innovative Lichtwerbung und professionelle Werbetechnik. 
              75 Jahre Erfahrung in der Ostschweiz.
            </p>
            <div className="badge badge-secondary">75 Jahre Erfahrung</div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Leistungen</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/lichtwerbung" className="hover:text-secondary transition-colors">
                  Lichtwerbung
                </Link>
              </li>
              <li>
                <Link href="/beschriftungen" className="hover:text-secondary transition-colors">
                  Beschriftungen
                </Link>
              </li>
              <li>
                <Link href="/digital-signage" className="hover:text-secondary transition-colors">
                  Digital Signage
                </Link>
              </li>
              <li>
                <Link href="/dienstleistungen" className="hover:text-secondary transition-colors">
                  Dienstleistungen
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Kontakt</h4>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-semibold">Hauptsitz Rapperswil-Jona</p>
                <p className="opacity-90">Produktion & Verwaltung</p>
              </div>
              <div>
                <p className="font-semibold">Standort Uznach</p>
                <p className="opacity-90">Verkauf & Service</p>
              </div>
              <div className="pt-2">
                <a 
                  href="tel:+41552255025" 
                  className="flex items-center space-x-2 hover:text-secondary transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>+41 55 225 50 25</span>
                </a>
                <a 
                  href="mailto:neon@neonmurer.ch" 
                  className="flex items-center space-x-2 hover:text-secondary transition-colors mt-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span>neon@neonmurer.ch</span>
                </a>
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-lg mb-4">Unternehmen</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/ueber-uns" className="hover:text-secondary transition-colors">
                  Über uns
                </Link>
              </li>
              <li>
                <Link href="/ueber-uns/firmengeschichte" className="hover:text-secondary transition-colors">
                  Firmengeschichte
                </Link>
              </li>
              <li>
                <Link href="/ueber-uns/fachkompetenzen" className="hover:text-secondary transition-colors">
                  Fachkompetenzen
                </Link>
              </li>
              <li>
                <Link href="/ueber-uns/kontaktpersonen" className="hover:text-secondary transition-colors">
                  Kontaktpersonen
                </Link>
              </li>
              <li>
                <Link href="/ueber-uns/stellenangebote" className="hover:text-secondary transition-colors">
                  Stellenangebote
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-content/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <p>&copy; 2024 Neon Murer AG. Alle Rechte vorbehalten.</p>
            </div>
            <div className="flex items-center space-x-6">
              <Link href="/impressum" className="hover:text-secondary transition-colors">
                Impressum
              </Link>
              <Link href="/datenschutz" className="hover:text-secondary transition-colors">
                Datenschutz
              </Link>
              <Link href="/agb" className="hover:text-secondary transition-colors">
                AGB
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 