import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-8 flex items-center justify-between text-sm text-slate-400">
        <p>© {new Date().getFullYear()} LN Asesoría y Consultoría Empresarial</p>
        <div className="flex gap-4">
          <a href="#about" className="hover:text-slate-200">Nosotros</a>
          <a href="#plans" className="hover:text-slate-2 00">Planes</a>
          <a href="#contact" className="hover:text-slate-200">Contacto</a>
        </div>
      </div>
    </footer>
  )
}
