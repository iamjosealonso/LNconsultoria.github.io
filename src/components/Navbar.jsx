import React, { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const base = import.meta.env.BASE_URL || '/'

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="sticky top-0 z-40 bg-brand/80 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img src={`${base}logo.jpg`} alt="LN Asesoría y Consultoría Empresarial" className="h-9 w-9 rounded-full ring-1 ring-white/20" />
          <span className="text-xl font-semibold tracking-wide">LN Consultoría</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-200">
          <a href="#about" className="hover:text-white transition-colors">Quiénes somos</a>
          <a href="#plans" className="hover:text-white transition-colors">Planes</a>
          <a href="#contact" className="hover:text-white transition-colors">Contacto</a>
        </nav>

        <div className="flex items-center gap-4">
          <a href="#contact" className="hidden md:inline-flex px-4 py-2 rounded-lg bg-primary hover:bg-primary-dark text-white font-medium shadow-soft transition-colors">
            Hablemos
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-slate-200 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-brand/95 backdrop-blur border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-4">
            <nav className="flex flex-col gap-4 text-sm text-slate-200">
              <a
                href="#about"
                className="hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Quiénes somos
              </a>
              <a
                href="#plans"
                className="hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Planes
              </a>
              <a
                href="#contact"
                className="hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </a>
              <a
                href="#contact"
                className="inline-flex px-4 py-2 rounded-lg bg-primary hover:bg-primary-dark text-white font-medium shadow-soft transition-colors mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Hablemos
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
