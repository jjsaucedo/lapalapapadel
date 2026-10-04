import { Link, useLocation } from 'react-router-dom'
import Logo from './Logo.jsx'

const navLinks = [
  { to: '/', label: 'Inicio' },
  { to: '/reservar', label: 'Reservar' },
  { to: '/mis-reservaciones', label: 'Mis Reservaciones' },
  { to: '/mi-cuenta', label: 'Mi Cuenta' },
]

export default function Header() {
  const location = useLocation()

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const active = location.pathname === link.to
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                  active
                    ? 'bg-brand-lime/20 text-brand-green-dark'
                    : 'text-slate-600 hover:text-brand-green'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/reservar" className="btn-primary hidden sm:inline-flex text-sm">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Reservar Cancha
          </Link>
          <Link to="/login" className="btn-outline text-sm">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <span className="hidden sm:inline">Iniciar sesión</span>
          </Link>
        </div>
      </div>
    </header>
  )
}
