import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 sm:py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 text-sm text-slate-400">
          <p className="text-center sm:text-left">© {new Date().getFullYear()} LN Asesoría y Consultoría Empresarial</p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 text-center sm:text-left">
            <a href="#about" className="hover:text-slate-200 transition-colors">Nosotros</a>
            <a href="#plans" className="hover:text-slate-200 transition-colors">Planes</a>
            <a href="#contact" className="hover:text-slate-200 transition-colors">Contacto</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
