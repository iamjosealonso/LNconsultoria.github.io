import React from 'react'

export default function About() {
  const base = import.meta.env.BASE_URL || '/'
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold">Quiénes somos</h2>
          <p className="mt-4 text-slate-300 leading-relaxed">
            LN Asesoría y Consultoría Empresarial es un socio estratégico para el crecimiento de los negocios. Con un equipo de profesionales que acumula más de dos décadas de experiencia en finanzas y gestión, se potencia la visión de las empresas para un crecimiento sostenido.
          </p>
        </div>
        <div className="relative">
          <img src={`${base}logo.jpg`} alt="LN" className="h-40 w-40 rounded-full ring-2 ring-white/20" />
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-slate-300">Acompañamos a gerencias y emprendedores a estructurar sus finanzas, optimizar procesos y medir lo que importa.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
