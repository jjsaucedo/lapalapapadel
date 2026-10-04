export default function Logo({ className = '' }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-green">
        <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="8" />
          <line x1="12" y1="4" x2="12" y2="20" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <circle cx="12" cy="12" r="2.5" fill="#a3e635" stroke="none" />
        </svg>
      </div>
      <span className="text-lg font-extrabold tracking-tight text-slate-900">
        LA PALAPA <span className="text-brand-green">PADEL CLUB</span>
      </span>
    </div>
  )
}
