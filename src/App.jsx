import Sidebar from "./components/common/Sidebar"
import { Routes, Route } from "react-router-dom"

import Dashboard from "./pages/Dashboard"
import Assets from "./pages/Assets"
import Booking from "./pages/Booking"
import SellCars from "./pages/SellCars"

function App() {
  return (
    <>
      <div className="flex h-screen bg-white dark:bg-[#1F2128] text-[#808191] overflow-hidden">

        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 dark:bg-[#1F2128] bg-[#F5F5F5]"/>
          <div className="absolute inset-0 backdrop-blur-sm"/>
        </div>
      <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/assets" element={<Assets />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/sell-cars" element={<SellCars />} />
        </Routes>
      </div>
    </>
  )
}

export default App
