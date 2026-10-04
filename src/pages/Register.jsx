import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-slate-50 px-4 py-12">
      <div className="w-full max-w-md">
        <div className="mb-6 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-green">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-7 w-7 text-white">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <line x1="19" y1="8" x2="19" y2="14" />
              <line x1="22" y1="11" x2="16" y2="11" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-slate-900">Crea tu cuenta</h1>
          <p className="mt-1 text-slate-500">Regístrate para reservar tu cancha</p>
        </div>

        <div className="card p-8">
          <button className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white py-3 font-medium text-slate-700 transition hover:bg-slate-50">
            <svg viewBox="0 0 24 24" className="h-5 w-5">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Continuar con Google
          </button>

          <div className="my-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-slate-200" />
            <span className="text-sm text-slate-400">o</span>
            <div className="h-px flex-1 bg-slate-200" />
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">Nombre</label>
                <input type="text" placeholder="Nombre" className="w-full rounded-xl border border-slate-300 bg-white py-3 px-4 text-slate-900 placeholder-slate-400 transition focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20" />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">Apellido</label>
                <input type="text" placeholder="Apellido" className="w-full rounded-xl border border-slate-300 bg-white py-3 px-4 text-slate-900 placeholder-slate-400 transition focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20" />
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">Número de teléfono</label>
              <div className="relative">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <input type="tel" placeholder="+52 ..." className="input-field" />
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">Correo electrónico</label>
              <div className="relative">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-10 5L2 7" />
                </svg>
                <input type="email" placeholder="tu@correo.com" className="input-field" />
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">Contraseña</label>
              <div className="relative">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400">
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <input type="password" placeholder="••••••••" className="input-field" />
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">Confirmar contraseña</label>
              <div className="relative">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400">
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <input type="password" placeholder="••••••••" className="input-field" />
              </div>
            </div>

            <button type="submit" className="btn-primary w-full">Crear cuenta</button>
          </form>
        </div>

        <p className="mt-6 text-center text-sm text-slate-500">
          ¿Ya tienes una cuenta? <Link to="/login" className="font-medium text-brand-green hover:underline">Inicia sesión</Link>
        </p>
      </div>
    </div>
  )
}
