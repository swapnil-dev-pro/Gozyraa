import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import FlightResults from './pages/FlightResults'
import HotelResults from './pages/HotelResults'
import Tours from './pages/Tours'
import Contact from './pages/Contact'
import Visa from './pages/Visa'
import Profile from './pages/Profile'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flights" element={<FlightResults />} />
        <Route path="/hotels" element={<HotelResults />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/visa" element={<Visa />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App