import './App.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Busbooking from './components/Busbooking'

interface PlaceholderProps {
  children?: React.ReactNode;
}

// Placeholder components with proper typing
const PlaceholderPage: React.FC<PlaceholderProps> = ({ children }) => (
  <div className="page-container">{children}</div>
);

const Buses = () => <PlaceholderPage>Manage Buses Page</PlaceholderPage>
const ScheduleTrip = () => <PlaceholderPage>Schedule Trip Page</PlaceholderPage>
const RevenueReport = () => <PlaceholderPage>Revenue Report Page</PlaceholderPage>
const PassengerList = () => <PlaceholderPage>Passenger List Page</PlaceholderPage>
const Bookings = () => <PlaceholderPage>Bookings Page</PlaceholderPage>
const Settings = () => <PlaceholderPage>Settings Page</PlaceholderPage>

const App = () => (
  <BrowserRouter>
    <div className="app-container">
      <Nav />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/busbooking" element={<Busbooking />} />
          <Route path="/buses" element={<Buses />} />
          <Route path="/trips/schedule" element={<ScheduleTrip />} />
          <Route path="/reports/revenue" element={<RevenueReport />} />
          <Route path="/passengers" element={<PassengerList />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </BrowserRouter>
)

export default App
