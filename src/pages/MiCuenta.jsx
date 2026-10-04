import { Link } from 'react-router-dom'

export default function MiCuenta() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-lime/15">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-7 w-7 text-brand-green">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-slate-900">Mi Cuenta</h1>
        <p className="mt-2 text-slate-500">Inicia sesión para ver tu perfil y configuración.</p>
        <Link to="/login" className="btn-primary mt-6">
          Iniciar sesión
        </Link>
      </div>
    </div>
  )
}
