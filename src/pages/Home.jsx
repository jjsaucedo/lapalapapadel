import { Link } from 'react-router-dom'

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6 text-brand-green">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6m12 5h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22M18 2H6v7a6 6 0 0 0 12 0V2z" />
      </svg>
    ),
    title: 'Canchas premium',
    desc: 'Dos canchas profesionales listas para jugar.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6 text-brand-green">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: 'Pago seguro',
    desc: 'Paga en línea con Mercado Pago.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6 text-brand-green">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: 'Confirmación inmediata',
    desc: 'Recibe tu confirmación al momento.',
  },
]

const steps = [
  { num: 1, title: 'Elige fecha', desc: 'Consulta la disponibilidad en el calendario de 2 meses.' },
  { num: 2, title: 'Elige tu cancha', desc: 'Cancha 1 o Cancha 2, cada una con disponibilidad propia.' },
  { num: 3, title: 'Elige tu horario', desc: 'Bloques de 90 minutos, de 5:30 PM a 10:00 PM.' },
  { num: 4, title: 'Paga y juega', desc: 'Confirma tu pago y recibe tu confirmación al instante.' },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-forest via-brand-forest-light to-brand-forest">
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
          {/* Left column */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-lime/20 px-4 py-1.5 text-sm font-medium text-brand-lime">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
              2 canchas · Reservaciones de 90 min
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              Reserva tu cancha de <span className="text-brand-lime">Pádel</span>
            </h1>
            <p className="mt-4 text-lg text-slate-300">Juega. Compite. Disfruta.</p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link to="/reservar" className="inline-flex items-center gap-2 rounded-xl bg-brand-lime px-8 py-4 text-lg font-bold text-brand-forest transition hover:bg-brand-lime-dark active:scale-[0.98]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Reservar Cancha
              </Link>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-sm">
                <div className="text-2xl font-bold text-white">$520 MXN</div>
                <div className="text-sm text-slate-400">por 90 minutos</div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 text-sm text-slate-300 sm:flex-row sm:gap-8">
              <span className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 text-brand-lime">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                Lunes a Viernes · 5:30 PM – 10:00 PM
              </span>
              <span className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 text-brand-lime">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 9h18M9 3v18" />
                </svg>
                2 Canchas Disponibles
              </span>
            </div>
          </div>

          {/* Right column - Padel court graphic */}
          <div className="hidden lg:flex justify-center">
            <div className="relative h-80 w-80 rounded-3xl bg-brand-forest/60 p-8 backdrop-blur-sm">
              <svg viewBox="0 0 200 200" className="h-full w-full">
                {/* Court outline */}
                <rect x="20" y="20" width="160" height="160" rx="8" fill="none" stroke="#a3e635" strokeWidth="3" />
                {/* Net */}
                <line x1="20" y1="100" x2="180" y2="100" stroke="#a3e635" strokeWidth="2" strokeDasharray="4 4" />
                {/* Service lines */}
                <line x1="20" y1="70" x2="180" y2="70" stroke="#a3e635" strokeWidth="1.5" opacity="0.6" />
                <line x1="20" y1="130" x2="180" y2="130" stroke="#a3e635" strokeWidth="1.5" opacity="0.6" />
                {/* Center lines */}
                <line x1="100" y1="20" x2="100" y2="70" stroke="#a3e635" strokeWidth="1.5" opacity="0.6" />
                <line x1="100" y1="130" x2="100" y2="180" stroke="#a3e635" strokeWidth="1.5" opacity="0.6" />
                {/* Ball */}
                <circle cx="60" cy="140" r="10" fill="#a3e635" />
                <circle cx="60" cy="140" r="10" fill="none" stroke="#fff" strokeWidth="1" opacity="0.5" />
              </svg>
              {/* Tennis ball icon bottom-left */}
              <div className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand-lime">
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-brand-forest" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12c3-2 5-2 8 0s7 2 10 0" opacity="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="card flex flex-col items-start gap-4 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-lime/15">
                {f.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">{f.title}</h3>
                <p className="mt-1 text-sm text-slate-500">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How-to steps */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-slate-900">Reserva en 4 pasos</h2>
            <p className="mt-2 text-slate-500">Tan fácil como un punto ganador.</p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.num} className="rounded-2xl bg-brand-green p-6 text-white">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-lg font-bold">
                  {s.num}
                </div>
                <h3 className="text-lg font-bold">{s.title}</h3>
                <p className="mt-1 text-sm text-white/80">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-brand-forest to-brand-forest-light px-8 py-12 text-center">
          <h2 className="text-3xl font-extrabold text-white">¿Listo para jugar?</h2>
          <p className="mt-3 text-slate-300">
            Aparta tu cancha ahora. Disponibilidad de lunes a viernes de 5:30 PM a 10:00 PM.
          </p>
          <Link
            to="/reservar"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-brand-lime px-8 py-4 text-lg font-bold text-brand-forest transition hover:bg-brand-lime-dark active:scale-[0.98]"
          >
            Reservar Cancha
          </Link>
        </div>
      </section>
    </div>
  )
}
