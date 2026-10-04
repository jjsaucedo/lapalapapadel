import { Link } from 'react-router-dom'

export default function MisReservaciones() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-lime/15">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-7 w-7 text-brand-green">
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-slate-900">Mis Reservaciones</h1>
        <p className="mt-2 text-slate-500">Inicia sesión para ver y gestionar tus reservaciones.</p>
        <Link to="/login" className="btn-primary mt-6">
          Iniciar sesión
        </Link>
      </div>
    </div>
  )
}
