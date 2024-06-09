import React from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from './Sidebar'

const WebDev = () => {
  const navigate = useNavigate()

  const handleWeekNavigation = (week) => {
    navigate(`/webdev/week${week}`)
  }

  return (
    <div className="flex h-screen">
      <Sidebar domain="webdev" />
      <div className="flex-1 ml-64 p-4 mt-20">
        <h1 className="text-xl font-bold">Welcome to Web Dev</h1>
        <div className="flex flex-col space-y-4">
          <button
            onClick={() => handleWeekNavigation(1)}
            style={{ position: 'relative', zIndex: 10 }}
            className="mt-20"
          >
            Week 1
          </button>
          <button
            onClick={() => handleWeekNavigation(2)}
            style={{ position: 'relative', zIndex: 10 }}
          >
            Week 2
          </button>
          <button
            onClick={() => handleWeekNavigation(3)}
            style={{ position: 'relative', zIndex: 10 }}
          >
            Week 3
          </button>
          <button
            onClick={() => handleWeekNavigation(4)}
            style={{ position: 'relative', zIndex: 10 }}
          >
            Week 4
          </button>
        </div>
      </div>
    </div>
  )
}

export default WebDev
