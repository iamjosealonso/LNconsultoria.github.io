import React from 'react'

const planMeta = [
  { key: 'emprende', name: 'Plan Emprende', price: 'S/. 800', sub: 'Plan Digital' },
  { key: 'crece', name: 'Plan Crece', price: 'S/. 1,500', sub: 'Plan Digital' },
  { key: 'avanza', name: 'Plan Avanza', price: 'S/. 5,000 - S/. 6,000', sub: 'Plan Digital y Comercial' },
  { key: 'elite', name: 'Plan Élite', price: 'S/. 8,000 - S/. 15,000', sub: 'Plan Digital y Comercial' },
]

const rows = [
  { label: 'Sinceramiento de Estados Financieros', values: { emprende: true, crece: true, avanza: true, elite: true } },
  { label: 'KPIs (indicadores financieros)', values: { emprende: true, crece: true, avanza: true, elite: true } },
  { label: 'Flujo de caja', note: '(histórico / histórico y proyectado)', values: { emprende: 'Histórico', crece: 'Histórico', avanza: 'Histórico y Proyectado', elite: 'Histórico y Proyectado' } },
  { label: 'Gestión de deudas', values: { emprende: false, crece: false, avanza: true, elite: true } },
  { label: 'Determinación de Capital de trabajo', values: { emprende: false, crece: false, avanza: true, elite: true } },
  { label: 'Estructura óptima de Capital', values: { emprende: false, crece: false, avanza: false, elite: true } },
  { label: 'Proyectos de inversión y valorización de empresa', values: { emprende: false, crece: false, avanza: false, elite: true } },
  { divider: true },
  { label: 'Reuniones de consultoría', values: { emprende: '2 mensuales (online)', crece: '3 mensuales (online)', avanza: '3 mensuales (2 presencial) + Asistente virtual', elite: 'Acompañamiento permanente' } },
]

const Check = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6L9 17l-5-5" />
  </svg>
)

function CellValue({ value }) {
  if (value === true) return <div className="flex items-center justify-center"><Check /></div>
  if (value === false) return <div className="text-slate-600 text-center">—</div>
  return <div className="text-center text-sm text-slate-200">{value}</div>
}

export default function Plans() {
  return (
    <section id="plans" className="bg-brand/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold">Nuestros Planes</h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">Comparativo claro y elegante para que elijas el plan que mejor se adapta a tu empresa.</p>
        </div>

        {/* Cards (mobile-first) */}
        <div className="mt-8 sm:mt-10 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:hidden">
          {planMeta.map(p => (
            <article key={p.key} className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-6 flex flex-col">
              <header>
                <h3 className="text-lg sm:text-xl font-semibold">{p.name}</h3>
                <p className="text-xs text-slate-400">{p.sub}</p>
                <p className="mt-2 sm:mt-3 text-2xl sm:text-3xl font-extrabold text-primary whitespace-nowrap">{p.price}</p>
              </header>
              <ul className="mt-3 sm:mt-4 space-y-1 sm:space-y-2 text-sm text-slate-300 flex-1">
                {rows.filter(r => !r.divider).slice(0, 7).map(r => (
                  <li key={r.label} className="flex items-start gap-2">
                    <span className="min-w-4 sm:min-w-5 pt-1">
                      {r.values[p.key] === true ? <Check /> : r.values[p.key] === false ? <span className="text-slate-600">—</span> : null}
                    </span>
                    <span className="flex-1 text-xs sm:text-sm">
                      {r.label}{r.note ? <span className="text-slate-500"> {r.note}</span> : null}
                      {typeof r.values[p.key] === 'string' ? <div className="text-slate-400 text-xs">{r.values[p.key]}</div> : null}
                    </span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-4 sm:mt-6 inline-flex justify-center items-center px-3 sm:px-4 py-2 rounded-lg bg-primary hover:bg-primary-dark text-white font-medium text-sm sm:text-base">Me interesa</a>
            </article>
          ))}
        </div>

        {/* Comparison table (desktop) */}
        <div className="mt-8 sm:mt-10 hidden lg:block overflow-x-auto">
          <div className="min-w-[960px] rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-white/5">
                <tr>
                  <th className="text-left px-4 sm:px-6 py-3 sm:py-4 font-semibold text-sm sm:text-base">Descripción de los Servicios</th>
                  {planMeta.map(p => (
                    <th key={p.key} className="px-4 sm:px-6 py-3 sm:py-4 text-left">
                      <div className="font-semibold text-sm sm:text-base">{p.name}</div>
                      <div className="text-xs text-slate-400">{p.sub}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((r, idx) => r.divider ? (
                  <tr key={idx}><td colSpan={5} className="h-3"></td></tr>
                ) : (
                  <tr key={r.label} className="border-t border-white/5">
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-slate-200 text-sm sm:text-base">
                      {r.label} {r.note ? <span className="text-slate-500">{r.note}</span> : null}
                    </td>
                    {planMeta.map(p => (
                      <td key={p.key} className="px-4 sm:px-6 py-3 sm:py-4"><CellValue value={r.values[p.key]} /></td>
                    ))}
                  </tr>
                ))}
                {/* Prices */}
                <tr className="border-t border-white/10 bg-white/5">
                  <td className="px-4 sm:px-6 py-4 sm:py-5 font-semibold text-sm sm:text-base">Inversión</td>
                  {planMeta.map(p => (
                    <td key={p.key} className="px-4 sm:px-6 py-4 sm:py-5">
                      <div className="inline-flex items-baseline gap-2 px-3 py-2 rounded-lg bg-black/20 text-primary ring-1 ring-white/10">
                        <span className="text-lg font-bold whitespace-nowrap">{p.price}</span>
                      </div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 sm:mt-4 text-xs text-slate-400">Incluye: Semáforos (Dashboard/Tablero) y KPIs (indicadores de gestión). Análisis de Contabilidad según Régimen Tributario.</p>
        </div>
      </div>
    </section>
  )
}
