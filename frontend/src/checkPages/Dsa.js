import React from 'react'
import { useNavigate } from 'react-router-dom'

const Dsa = () => {
  const navigate = useNavigate()

  const handleWeekNavigation = (week) => {
    navigate(`/dsa/week${week}`)
  }

  return (
    <div>
      <h1>Welcome to the DSA Page</h1>
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
  )
}

export default Dsa
