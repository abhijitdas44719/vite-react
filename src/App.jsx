import React, { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Busbooking from './components/Busbooking'

// Placeholder components for new routes
const Buses = () => <div>Manage Buses Page</div>;
const ScheduleTrip = () => <div>Schedule Trip Page</div>;
const RevenueReport = () => <div>Revenue Report Page</div>;
const PassengerList = () => <div>Passenger List Page</div>;
const Bookings = () => <div>Bookings Page</div>;
const Settings = () => <div>Settings Page</div>;

function App() {
  

  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/busbooking" element={<Busbooking />} />
        {/* Routes for Quick Actions from Home page */}
        <Route path="/buses" element={<Buses />} />
        <Route path="/trips/schedule" element={<ScheduleTrip />} />
        <Route path="/reports/revenue" element={<RevenueReport />} />
        <Route path="/passengers" element={<PassengerList />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}



export default App
