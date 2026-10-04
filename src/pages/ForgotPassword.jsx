import { Link } from 'react-router-dom'

export default function ForgotPassword() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-slate-50 px-4 py-12">
      <div className="w-full max-w-md">
        <div className="mb-6 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-green">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-7 w-7 text-white">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-10 5L2 7" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-slate-900">Restablecer contraseña</h1>
          <p className="mt-1 text-slate-500">Te enviaremos un enlace para restablecerla</p>
        </div>

        <div className="card p-8">
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
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
            <button type="submit" className="btn-primary w-full">Enviar enlace</button>
          </form>
        </div>

        <p className="mt-6 text-center">
          <Link to="/login" className="inline-flex items-center gap-1 text-sm font-medium text-brand-green hover:underline">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Volver a iniciar sesión
          </Link>
        </p>
      </div>
    </div>
  )
}
