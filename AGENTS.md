# La Palapa Padel Club

Frontend SPA for court reservations, synced from www.lapalapapadelclub.com.

## Stack
- Vite + React 18 + React Router 6
- Tailwind CSS 3
- No backend — all pages are presentational (auth forms are static)

## Development
```
docker compose -f docker-compose.base44.yml up -d
```
App runs on port 3000 (mapped to Vite dev server on 5173).

## Pages
- `/` — Home (hero, features, steps, CTA)
- `/reservar` — Booking calendar with court & time selection
- `/mis-reservaciones` — My reservations (requires login)
- `/mi-cuenta` — My account (requires login)
- `/login` — Login
- `/register` — Registration
- `/forgot-password` — Password reset
