import React from 'react'
import { useNavigate } from 'react-router-dom'

function Nav() {
  const navigate = useNavigate();

  return (
    <div>
      <nav>
        <ul>
          <li onClick={() => navigate('/home')} style={{cursor: 'pointer'}}>Home</li>
          <li onClick={() => navigate('/busbooking')} style={{cursor: 'pointer'}}>Bus Booking</li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav

