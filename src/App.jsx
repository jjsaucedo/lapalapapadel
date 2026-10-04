import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Reservar from './pages/Reservar.jsx'
import MisReservaciones from './pages/MisReservaciones.jsx'
import MiCuenta from './pages/MiCuenta.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import ForgotPassword from './pages/ForgotPassword.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/reservar" element={<Reservar />} />
        <Route path="/mis-reservaciones" element={<MisReservaciones />} />
        <Route path="/mi-cuenta" element={<MiCuenta />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Route>
    </Routes>
  )
}
