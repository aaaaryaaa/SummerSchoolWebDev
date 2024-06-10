import React from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from './Sidebar'

const Design = () => {
  const navigate = useNavigate()

  const handleWeekNavigation = (week) => {
    navigate(`/design/week${week}`)
  }

<<<<<<< HEAD
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
=======
  return (
    <div className="flex h-screen">
      <Sidebar domain="design" />
      <div className="flex-1 ml-64 p-4 mt-20">
        <h1 className="text-xl font-bold">Welcome to Design</h1>
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
>>>>>>> e2212c531ee95495a089ed12babdf8ff96cfdbe6
    </div>
  </div>
);

}

export default Design
