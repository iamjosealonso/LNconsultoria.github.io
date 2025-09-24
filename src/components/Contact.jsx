import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold">Contáctanos</h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">Cuéntanos sobre tu empresa y coordinemos una reunión.</p>
          <div className="mt-4 sm:mt-6 space-y-2 text-slate-300 text-sm sm:text-base">
            <p>Email: <a href="mailto:info@lnasesoria.com" className="text-primary hover:underline">info@lnasesoria.com</a></p>
            <p>WhatsApp: <a href="https://wa.me/51926896924" className="text-primary hover:underline" target="_blank" rel="noreferrer">+51 926 896 924</a></p>
          </div>
        </div>
        <form className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 shadow-soft">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <input className="bg-transparent border border-white/10 rounded-lg px-3 sm:px-4 py-2 sm:py-3 outline-none focus:border-primary text-sm sm:text-base" placeholder="Nombre" />
            <input className="bg-transparent border border-white/10 rounded-lg px-3 sm:px-4 py-2 sm:py-3 outline-none focus:border-primary text-sm sm:text-base" placeholder="Email" type="email" />
          </div>
          <input className="mt-3 sm:mt-4 w-full bg-transparent border border-white/10 rounded-lg px-3 sm:px-4 py-2 sm:py-3 outline-none focus:border-primary text-sm sm:text-base" placeholder="Empresa" />
          <textarea className="mt-3 sm:mt-4 w-full bg-transparent border border-white/10 rounded-lg px-3 sm:px-4 py-2 sm:py-3 outline-none focus:border-primary text-sm sm:text-base" placeholder="Cuéntanos brevemente tu necesidad" rows="4 sm:rows-5" />
          <button className="mt-3 sm:mt-4 w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-primary hover:bg-primary-dark text-white font-semibold text-sm sm:text-base">Enviar</button>
          <p className="mt-2 text-xs text-slate-400">Este formulario es demostrativo. Puedes integrarlo con un servicio como Formspree o tu backend.</p>
        </form>
      </div>
    </section>
  )
}
