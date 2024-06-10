import React from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from './Sidebar'
import sampleimg from '../images/sample.jpg'

const WebDev = () => {
  const navigate = useNavigate()

  const handleWeekNavigation = (week) => {
    navigate(`/webdev/week${week}`)
  }

  return (
    <div className="flex h-screen bg-black">
      <Sidebar domain="webdev" />
      <div className="flex-1 ml-52 p-4 mt-24">
        <h1 className="text-6xl font-bold text-center">Welcome to Web Dev</h1>
        <div className="flex justify-center mt-12">
          <img src={sampleimg} alt="sample" className="w-2/3" />
        </div>
      </div>
    </div>
  )
}

export default WebDev
