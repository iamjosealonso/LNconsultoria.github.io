import React from 'react'

export default function Hero() {
  const base = import.meta.env.BASE_URL || '/'
  return (
    <section className="relative isolate">
      <img src={`${base}hero.png`} alt="Confianza y soluciones" className="absolute inset-0 -z-10 h-[70vh] w-full object-cover opacity-70" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-surface via-surface/70 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28 h-[70vh] flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">Confianza y soluciones para tu empresa</h1>
          <p className="mt-5 text-lg text-slate-300">Impulsamos la toma de decisiones con datos, finanzas claras y una ejecución impecable.</p>
          <div className="mt-8 flex gap-4">
            <a href="#plans" className="px-5 py-3 rounded-lg bg-primary hover:bg-primary-dark text-white font-semibold shadow-soft">Ver planes</a>
            <a href="#contact" className="px-5 py-3 rounded-lg border border-white/20 hover:border-white/40 text-white">Contáctanos</a>
          </div>
        </div>
      </div>
    </section>
  )
}
