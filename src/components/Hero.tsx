'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      title: "Leuchtende Lösungen",
      subtitle: "Professionelle Lichtwerbung seit 1949",
      description: "Von handgefertigten Neon-Kreationen aus unserer eigenen Glasbläserei bis zu modernster LED-Technik – wir bringen Ihre Marke zum Strahlen.",
      cta: "Lichtwerbung entdecken",
      ctaLink: "/lichtwerbung",
      image: "/images/neon-led-technik-1.jpg",
      position: "left"
    },
    {
      id: 2,
      title: "Präzise Beschriftung",
      subtitle: "Von Fahrzeugen bis Gebäuden",
      description: "Jede Oberfläche wird zur Werbefläche! Professionelle Beschriftungen für maximale Markenvisibilität auf Fahrzeugen, Fenstern und mehr.",
      cta: "Beschriftungen ansehen",
      ctaLink: "/beschriftungen",
      image: "/images/fahrzeugbeschriftung-1.jpg",
      position: "right"
    },
    {
      id: 3,
      title: "Digitale Zukunft",
      subtitle: "Moderne LED-Displays & Digital Signage",
      description: "Dynamische Inhalte, die begeistern! Moderne Digital-Displays für zeitgemäße Kommunikation mit interaktiven Elementen.",
      cta: "Digital Signage erleben",
      ctaLink: "/digital-signage",
      image: "/images/signaletik-2.jpg",
      position: "center"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary/80">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-30' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-primary/80" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`transition-all duration-1000 transform ${
                index === currentSlide
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8 absolute'
              } ${
                slide.position === 'left' ? 'text-left' :
                slide.position === 'right' ? 'text-right' :
                'text-center'
              }`}
            >
              <div className={`max-w-4xl ${
                slide.position === 'left' ? 'mr-auto' :
                slide.position === 'right' ? 'ml-auto' :
                'mx-auto'
              }`}>
                {/* Badge */}
                <div className="mb-6">
                  <span className="badge badge-secondary badge-lg font-semibold px-6 py-3">
                    ⚡ {slide.subtitle}
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
                  <span className="block">{slide.title.split(' ')[0]}</span>
                  <span className="block text-secondary">{slide.title.split(' ')[1]}</span>
                </h1>

                {/* Description */}
                <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl">
                  {slide.description}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <Link
                    href={slide.ctaLink}
                    className="btn btn-secondary btn-lg text-lg px-8 py-4 hover:scale-105 transition-transform shadow-lg"
                  >
                    {slide.cta}
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link
                    href="/kontakt"
                    className="btn btn-outline btn-lg text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary hover:scale-105 transition-all shadow-lg"
                  >
                    Jetzt beraten lassen
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </Link>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary mb-1">75+</div>
                    <div className="text-sm text-white/80 uppercase tracking-wide">Jahre Erfahrung</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary mb-1">1000+</div>
                    <div className="text-sm text-white/80 uppercase tracking-wide">Zufriedene Kunden</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary mb-1">2</div>
                    <div className="text-sm text-white/80 uppercase tracking-wide">Standorte CH</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 btn btn-circle btn-ghost text-white hover:bg-white/20 z-20"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 btn btn-circle btn-ghost text-white hover:bg-white/20 z-20"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-12 h-2 rounded-full transition-all ${
              index === currentSlide ? 'bg-secondary' : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 right-8 z-20">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 opacity-20 animate-float">
        <div className="w-16 h-16 bg-secondary rounded-full blur-sm"></div>
      </div>
      <div className="absolute bottom-32 left-16 opacity-20 animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-8 h-8 bg-secondary rounded-full blur-sm"></div>
      </div>
      <div className="absolute top-1/3 left-1/4 opacity-20 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-4 h-4 bg-secondary rounded-full blur-sm"></div>
      </div>
    </section>
  )
}

export default Hero 