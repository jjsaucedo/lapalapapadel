import { useState, useMemo } from 'react'

const MONTHS = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']
const DAYS = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom']
const TIME_SLOTS = [
  '5:30 PM', '7:00 PM', '8:30 PM', '10:00 PM',
]

// Closed days: weekends (Saturday=6, Sunday=0)
function isClosed(year, month, day) {
  const date = new Date(year, month, day)
  const dow = date.getDay()
  return dow === 0 || dow === 6
}

function isPast(year, month, day) {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const date = new Date(year, month, day)
  return date < today
}

function buildCalendarGrid(year, month) {
  const firstDay = new Date(year, month, 1)
  let startDow = firstDay.getDay() // 0=Sun
  // Convert to Monday-based: Mon=0, Sun=6
  startDow = startDow === 0 ? 6 : startDow - 1
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const cells = []
  // Leading blanks
  for (let i = 0; i < startDow; i++) cells.push(null)
  for (let d = 1; d <= daysInMonth; d++) cells.push(d)
  // Trailing blanks to fill the grid
  while (cells.length % 7 !== 0) cells.push(null)
  return cells
}

export default function Reservar() {
  const today = new Date()
  const [viewYear, setViewYear] = useState(today.getFullYear())
  const [viewMonth, setViewMonth] = useState(today.getMonth())
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedCourt, setSelectedCourt] = useState(null)
  const [selectedSlot, setSelectedSlot] = useState(null)

  const cells = useMemo(() => buildCalendarGrid(viewYear, viewMonth), [viewYear, viewMonth])

  const canGoPrev = useMemo(() => {
    const firstAllowed = new Date(today.getFullYear(), today.getMonth(), 1)
    return new Date(viewYear, viewMonth, 1) > firstAllowed
  }, [viewYear, viewMonth, today])

  const goPrev = () => {
    if (!canGoPrev) return
    if (viewMonth === 0) {
      setViewMonth(11)
      setViewYear((y) => y - 1)
    } else {
      setViewMonth((m) => m - 1)
    }
  }
  const goNext = () => {
    if (viewMonth === 11) {
      setViewMonth(0)
      setViewYear((y) => y + 1)
    } else {
      setViewMonth((m) => m + 1)
    }
  }

  const selectDate = (day) => {
    if (!day || isClosed(viewYear, viewMonth, day) || isPast(viewYear, viewMonth, day)) return
    setSelectedDate({ year: viewYear, month: viewMonth, day })
    setSelectedCourt(null)
    setSelectedSlot(null)
  }

  const dateLabel = selectedDate
    ? `${selectedDate.day} de ${MONTHS[selectedDate.month]} de ${selectedDate.year}`
    : null

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-slate-900">Reserva tu cancha</h1>
        <p className="mt-1 text-slate-500">Selecciona fecha, cancha y horario. Reservaciones de 90 minutos.</p>
      </div>

      {/* Step indicator */}
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-green text-sm font-bold text-white">
          {selectedCourt ? (selectedSlot ? '4' : '3') : selectedDate ? '2' : '1'}
        </div>
        <span className="font-semibold text-slate-700">
          {!selectedDate ? 'Selecciona una fecha' : !selectedCourt ? 'Selecciona una cancha' : !selectedSlot ? 'Selecciona un horario' : 'Confirma tu reservación'}
        </span>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
        {/* Calendar */}
        <div className="card p-6">
          <div className="mb-4 flex items-center justify-between">
            <button
              onClick={goPrev}
              disabled={!canGoPrev}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition hover:bg-slate-50 disabled:opacity-30"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <h2 className="text-lg font-bold capitalize text-slate-900">
              {MONTHS[viewMonth]} {viewYear}
            </h2>
            <button
              onClick={goNext}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition hover:bg-slate-50"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>

          {/* Day headers */}
          <div className="mb-2 grid grid-cols-7 gap-1">
            {DAYS.map((d) => (
              <div key={d} className="py-2 text-center text-xs font-semibold text-slate-400">{d}</div>
            ))}
          </div>

          {/* Calendar grid */}
          <div className="grid grid-cols-7 gap-1">
            {cells.map((day, i) => {
              if (day === null) return <div key={i} />
              const closed = isClosed(viewYear, viewMonth, day)
              const past = isPast(viewYear, viewMonth, day)
              const selected = selectedDate?.day === day && selectedDate?.month === viewMonth && selectedDate?.year === viewYear
              const disabled = closed || past

              return (
                <button
                  key={i}
                  onClick={() => selectDate(day)}
                  disabled={disabled}
                  className={`relative flex aspect-square flex-col items-center justify-center rounded-lg text-sm transition ${
                    selected
                      ? 'bg-brand-green text-white font-bold'
                      : disabled
                        ? 'cursor-not-allowed bg-slate-100 text-slate-400'
                        : 'text-slate-700 hover:bg-brand-lime/20'
                  }`}
                >
                  <span>{day}</span>
                  {closed && !past && <span className="text-[9px] font-medium">Cerrado</span>}
                  {!closed && !past && !selected && (
                    <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-brand-green" />
                  )}
                </button>
              )
            })}
          </div>

          {/* Legend */}
          <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-500">
            <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded border border-slate-300 bg-white" /> Disponible</span>
            <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded border border-slate-300 bg-pink-100" /> Reservado</span>
            <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded bg-slate-100" /> Cerrado</span>
            <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded border border-slate-300 bg-white" /> Fecha pasada</span>
            <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded bg-brand-green" /> Seleccionado</span>
          </div>

          {/* Court selection */}
          {selectedDate && (
            <div className="mt-6 border-t border-slate-200 pt-6">
              <h3 className="mb-3 font-semibold text-slate-700">Selecciona una cancha</h3>
              <div className="grid grid-cols-2 gap-4">
                {[1, 2].map((court) => (
                  <button
                    key={court}
                    onClick={() => setSelectedCourt(court)}
                    className={`flex items-center gap-3 rounded-xl border-2 p-4 transition ${
                      selectedCourt === court
                        ? 'border-brand-green bg-brand-lime/10'
                        : 'border-slate-200 hover:border-brand-green/50'
                    }`}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-green/10 text-brand-green font-bold">
                      {court}
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-slate-900">Cancha {court}</div>
                      <div className="text-xs text-slate-500">90 min · $520 MXN</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Time slot selection */}
          {selectedCourt && (
            <div className="mt-6 border-t border-slate-200 pt-6">
              <h3 className="mb-3 font-semibold text-slate-700">Selecciona un horario</h3>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {TIME_SLOTS.map((slot) => (
                  <button
                    key={slot}
                    onClick={() => setSelectedSlot(slot)}
                    className={`rounded-xl border-2 px-4 py-3 text-sm font-medium transition ${
                      selectedSlot === slot
                        ? 'border-brand-green bg-brand-green text-white'
                        : 'border-slate-200 text-slate-700 hover:border-brand-green/50'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Summary sidebar */}
        <div className="card h-fit p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-lime/15">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 text-brand-green">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </div>
            <h3 className="font-bold text-slate-900">Resumen</h3>
          </div>

          {!selectedDate ? (
            <div className="mt-6 text-center">
              <p className="text-slate-400">Elige una fecha</p>
              <p className="mt-4 text-sm text-slate-400">
                Completa los pasos para ver el resumen de tu reservación.
              </p>
            </div>
          ) : (
            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 h-5 w-5 text-brand-green">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <div>
                  <div className="text-xs text-slate-400">Fecha</div>
                  <div className="font-semibold text-slate-900">{dateLabel}</div>
                </div>
              </div>

              {selectedCourt && (
                <div className="flex items-start gap-3">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 h-5 w-5 text-brand-green">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <div>
                    <div className="text-xs text-slate-400">Cancha</div>
                    <div className="font-semibold text-slate-900">Cancha {selectedCourt}</div>
                  </div>
                </div>
              )}

              {selectedSlot && (
                <div className="flex items-start gap-3">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 h-5 w-5 text-brand-green">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <div>
                    <div className="text-xs text-slate-400">Horario</div>
                    <div className="font-semibold text-slate-900">{selectedSlot}</div>
                  </div>
                </div>
              )}

              {selectedSlot && (
                <div className="border-t border-slate-200 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Total</span>
                    <span className="text-2xl font-bold text-slate-900">$520 <span className="text-sm font-normal text-slate-400">MXN</span></span>
                  </div>
                  <button className="btn-primary mt-4 w-full">
                    Pagar con Mercado Pago
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
