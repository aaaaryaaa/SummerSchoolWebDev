import React from 'react'
import { useNavigate } from 'react-router-dom'

const Design = () => {
  const navigate = useNavigate()

  const handleWeekNavigation = (week) => {
    navigate(`/design/week${week}`)
  }

return (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
    <h1 className="text-4xl font-bold mb-8">Welcome to the Design Page</h1>
    <div className="flex flex-col space-y-4">
      {[1, 2, 3, 4].map((week) => (
        <button
          key={week}
          onClick={() => handleWeekNavigation(week)}
          className="relative z-10 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          Week {week}
        </button>
      ))}
    </div>
  </div>
);

}

export default Design
