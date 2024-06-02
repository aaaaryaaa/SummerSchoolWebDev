// src/App.js
import React, { useState, useEffect } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Homepage from './checkPages/Homepage'
import Login from './checkPages/Login'
import Signup from './checkPages/Signup'
import Week1 from './checkPages/Week1'
import Week2 from './checkPages/Week2'
import Week3 from './checkPages/Week3'
import Week4 from './checkPages/Week4'
import ErrorPage from './checkPages/ErrorPage'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user')
    return savedUser ? JSON.parse(savedUser) : null
  })

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user))
    } else {
      localStorage.removeItem('user')
    }
  }, [user])
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Homepage user={user} setUser={setUser} />}
          />
          <Route
            path="/login"
            element={<Login user={user} setUser={setUser} />}
          />
          <Route path="/signup" element={<Signup setUser={setUser} />} />
          <Route path="/week1" element={<Week1 user={user} />}></Route>
          <Route path="/week2" element={<Week2 user={user} />}></Route>
          <Route path="/week3" element={<Week3 user={user} />}></Route>
          <Route path="/week4" element={<Week4 user={user} />}></Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  )
}

export default App
