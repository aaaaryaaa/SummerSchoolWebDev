// src/components/LandingPage.js
import React from 'react'
import { useNavigate } from 'react-router-dom'
import backgroundImage from './images/Navigation+hero part1.svg'

const LandingPage = ({ user }) => {
  const navigate = useNavigate()

  const handleSignup = () => {
    navigate('/signup')
  }

  const handleLogin = () => {
    navigate('/login')
  }

  // const handleWeekNavigation = (domain) => {
  //   navigate(`/${domain}`)
  // }
  return (
    <div className="">
      {/* section1 */}
      <div className="flex justify-center items-center h-screen relative">
        <img
          src={backgroundImage}
          style={{ width: '130%', height: '100%', objectFit: 'cover' }}
          alt="background"
        />
        <h1 className="absolute text-7xl font-bold text-white pb-32">
          TRACK YOUR PROGRESS NOW{' '}
        </h1>
        <div className="absolute inset-0 flex justify-center items-center">
          {user ? (
            <div></div>
          ) : (
            <div className="flex flex-row justify-center items-center space-x-4 mt-60">
              <button
                onClick={handleSignup}
                className="px-6 py-3 bg-yellow-500 text-white rounded shadow-2xl hover:bg-green-700 transition duration-300 "
              >
                Signup
              </button>
              <button
                onClick={handleLogin}
                className="px-6 py-3 bg-yellow-500 text-white rounded hover:bg-blue-600 transition duration-300"
              >
                Login
              </button>
            </div>
          )}
          {/* THIS IS DOMAIN BUTTONS NOT REQUIRED ALREADY IN NAVBAR */}
          {/* <div className="flex flex-col space-y-4 mt-20">
            <button
              onClick={() => handleWeekNavigation('webdev')}
              style={{ position: 'relative', zIndex: 10 }}
              className="mt-20"
            >
              Web Dev
            </button>
            <button
              onClick={() => handleWeekNavigation('appdev')}
              style={{ position: 'relative', zIndex: 10 }}
            >
              App Dev
            </button>
            <button
              onClick={() => handleWeekNavigation('aiml')}
              style={{ position: 'relative', zIndex: 10 }}
            >
              AIML
            </button>
            <button
              onClick={() => handleWeekNavigation('dsa')}
              style={{ position: 'relative', zIndex: 10 }}
            >
              DSA
            </button>
            <button
              onClick={() => handleWeekNavigation('design')}
              style={{ position: 'relative', zIndex: 10 }}
            >
              Design
            </button>
          </div> */}
        </div>
      </div>
      {/* Separator */}
      <div className="flex h-20 bg-gradient-to-b from-slate-950 to-black -mt-32">
        {/* Adjust height and gradient direction as needed */}
      </div>
      {/* section2 */}
      {/* <div className="flex justify-center items-center h-screen relative bg-black">
        <div className="absolute inset-0 flex justify-center items-center ">
          <div className="flex flex-row justify-center items-center space-x-40 -mt-24 ">
            <img src={css} style={{ width: "200px", height: "200px" }}></img>
            <img src={html} style={{ width: "200px", height: "200px" }}></img>
            <img src={js} style={{ width: "200px", height: "200px" }}></img>
            <img src={react} style={{ width: "200px", height: "200px" }}></img>
          </div>
        </div>
        <div>
          <img src={curvyvector} className="w-full -mt-48"></img>
        </div>
      </div> */}
    </div>
  )
}

export default LandingPage
