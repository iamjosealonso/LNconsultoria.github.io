import React from 'react'

export default function Hero() {
  const base = import.meta.env.BASE_URL || '/'
  return (
    <section className="relative isolate">
      <img src={`${base}hero.png`} alt="Confianza y soluciones" className="absolute inset-0 -z-10 h-[60vh] sm:h-[70vh] w-full object-cover opacity-70" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-surface via-surface/70 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24 lg:py-28 h-[60vh] sm:h-[70vh] flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">Confianza y soluciones para tu empresa</h1>
          <p className="mt-3 sm:mt-5 text-base sm:text-lg text-slate-300">Impulsamos la toma de decisiones con datos, finanzas claras y una ejecución impecable.</p>
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a href="#plans" className="px-4 sm:px-5 py-2 sm:py-3 rounded-lg bg-primary hover:bg-primary-dark text-white font-semibold shadow-soft text-center">Ver planes</a>
            <a href="#contact" className="px-4 sm:px-5 py-2 sm:py-3 rounded-lg border border-white/20 hover:border-white/40 text-white text-center">Contáctanos</a>
          </div>
        </div>
      </div>
    </section>
  )
}
