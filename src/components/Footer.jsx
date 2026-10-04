import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'

export default function Footer() {
  return (
    <footer className="bg-brand-footer text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="mb-3">
              <Logo className="[&>span]:text-white [&>span>span]:text-brand-lime" />
            </div>
            <p className="text-sm text-slate-400">
              Juega. Compite. Disfruta. Reserva tu cancha de pádel en minutos.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-white">Navegación</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-slate-400 hover:text-brand-lime transition">Inicio</Link></li>
              <li><Link to="/reservar" className="text-slate-400 hover:text-brand-lime transition">Reservar</Link></li>
              <li><Link to="/mis-reservaciones" className="text-slate-400 hover:text-brand-lime transition">Mis Reservaciones</Link></li>
            </ul>
          </div>

          {/* Horario & Contacto */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-white">Horario</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <svg className="h-4 w-4 text-brand-lime" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                Lun a Vie · 5:30 PM – 10:00 PM
              </li>
              <li className="flex items-center gap-2">
                <svg className="h-4 w-4 text-brand-lime" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 9h18M9 3v18" />
                </svg>
                2 canchas disponibles
              </li>
            </ul>
            <h3 className="mb-2 mt-4 text-sm font-semibold text-white">Contacto</h3>
            <p className="flex items-center gap-2 text-sm text-slate-400">
              <svg className="h-4 w-4 text-brand-lime" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Atención a socios
            </p>
            <p className="text-sm text-slate-400">Reservaciones 90 min · $520 MXN</p>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          © 2026 La Palapa Padel Club. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}
