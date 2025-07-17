'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    {
      name: 'Lichtwerbung',
      href: '/lichtwerbung',
      submenu: [
        { name: 'Leuchtschriften', href: '/lichtwerbung/leuchtschriften' },
        { name: 'Leuchttransparente', href: '/lichtwerbung/leuchttransparente' },
        { name: 'Halbrelief-Plattenschriften', href: '/lichtwerbung/halbrelief' },
        { name: 'Neon / LED-Technik', href: '/lichtwerbung/neon-led' },
        { name: 'Pylonen', href: '/lichtwerbung/pylonen' },
      ]
    },
    {
      name: 'Beschriftungen',
      href: '/beschriftungen',
      submenu: [
        { name: 'Fahrzeugbeschriftung', href: '/beschriftungen/fahrzeugbeschriftung' },
        { name: 'Fensterbeschriftung', href: '/beschriftungen/fensterbeschriftung' },
        { name: 'Tafelbeschriftung', href: '/beschriftungen/tafelbeschriftung' },
        { name: 'Signaletik', href: '/beschriftungen/signaletik' },
        { name: 'Grossformatdruck', href: '/beschriftungen/grossformatdruck' },
        { name: 'Blachen & Fahnen', href: '/beschriftungen/blachen-fahnen' },
      ]
    },
    {
      name: 'Digital Signage',
      href: '/digital-signage'
    },
    {
      name: 'Dienstleistungen',
      href: '/dienstleistungen'
    },
    {
      name: 'Über uns',
      href: '/ueber-uns',
      submenu: [
        { name: 'Fachkompetenzen', href: '/ueber-uns/fachkompetenzen' },
        { name: 'Firmengeschichte', href: '/ueber-uns/firmengeschichte' },
        { name: 'Kontaktpersonen', href: '/ueber-uns/kontaktpersonen' },
        { name: 'Stellenangebote', href: '/ueber-uns/stellenangebote' },
      ]
    }
  ]

  return (
    <header className="bg-primary text-primary-content shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary/90 backdrop-blur-sm border-b border-primary-content/10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-2 text-sm">
            <div className="flex items-center space-x-6">
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
                className="flex items-center space-x-2 hover:text-secondary transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>neon@neonmurer.ch</span>
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <span className="badge badge-secondary badge-sm">75 Jahre Erfahrung</span>
              <span className="text-xs">Rapperswil-Jona • Uznach</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="navbar min-h-16 px-0">
          {/* Logo */}
          <div className="navbar-start">
            <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <Image 
                src="/images/neonmurer-icon.svg" 
                alt="Neon Murer AG Logo" 
                width={48} 
                height={48}
                className="w-12 h-12"
              />
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold">Neon Murer</h1>
                <p className="text-xs opacity-80">Lichtwerbung & Werbetechnik</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 space-x-2">
              {navigation.map((item) => (
                <li key={item.name} className="flex items-center">
                  <div className={item.submenu ? "dropdown dropdown-hover" : ""}>
                    <Link 
                      href={item.href}
                      className="btn btn-ghost btn-sm hover:btn-secondary"
                      tabIndex={0}
                    >
                      {item.name}
                    </Link>
                    {item.submenu && (
                      <ul tabIndex={0} className="dropdown-content menu bg-base-100 text-base-content rounded-box w-64 p-2 shadow-xl border border-base-300 mt-2">
                        <li>
                          <Link 
                            href={item.href}
                            className="text-sm hover:bg-secondary hover:text-secondary-content rounded-lg font-semibold border-b border-base-300 mb-2 pb-2"
                          >
                            {item.name} - Übersicht
                          </Link>
                        </li>
                        {item.submenu.map((subItem) => (
                          <li key={subItem.name}>
                            <Link 
                              href={subItem.href}
                              className="text-sm hover:bg-secondary hover:text-secondary-content rounded-lg"
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Call-to-Action & Mobile Menu */}
          <div className="navbar-end">
            <div className="hidden lg:flex items-center space-x-4">
              <Link 
                href="/kontakt" 
                className="btn btn-secondary btn-sm"
              >
                Jetzt kontaktieren
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                className="btn btn-ghost btn-circle"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4">
            <div className="menu bg-base-100 text-base-content rounded-box p-4 mt-2 shadow-xl">
              {navigation.map((item) => (
                <div key={item.name} className="mb-2">
                  {item.submenu ? (
                    <div>
                      <Link
                        href={item.href}
                        className="block py-2 text-base font-medium hover:text-secondary border-b border-base-300 mb-2 pb-2"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                      <div className="pl-4">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block py-1 text-sm hover:text-secondary opacity-80"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            • {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block py-2 text-base hover:text-secondary"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-base-300 mt-4">
                <Link
                  href="/kontakt"
                  className="btn btn-secondary btn-block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Jetzt kontaktieren
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header 