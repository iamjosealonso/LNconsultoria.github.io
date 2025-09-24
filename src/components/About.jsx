import React from 'react'

export default function About() {
  const base = import.meta.env.BASE_URL || '/'
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-2xl sm:text-3xl font-bold">Quiénes somos</h2>
          <p className="mt-3 sm:mt-4 text-slate-300 leading-relaxed text-sm sm:text-base">
            LN Asesoría y Consultoría Empresarial es un socio estratégico para el crecimiento de los negocios. Con un equipo de profesionales que acumula más de dos décadas de experiencia en finanzas y gestión, se potencia la visión de las empresas para un crecimiento sostenido.
          </p>
        </div>
        <div className="relative order-1 md:order-2 flex justify-center md:justify-end">
          <img src={`${base}logo.jpg`} alt="LN" className="h-32 w-32 sm:h-40 sm:w-40 rounded-full ring-2 ring-white/20" />
          <div className="mt-4 sm:mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-6 max-w-xs sm:max-w-sm">
            <p className="text-slate-300 text-sm sm:text-base">Acompañamos a gerencias y emprendedores a estructurar sus finanzas, optimizar procesos y medir lo que importa.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
