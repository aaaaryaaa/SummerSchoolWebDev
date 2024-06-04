// src/components/Signup.js
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Signup = ({ user }) => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    phone_number: '',
    password: '',
    name: '',
  })
  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(
        'http://localhost:3000/api/auth/signup',
        formData
      )
      setMessage(response.data.message)
      toast.success(response.data.message)

      // Initializing all weeks db
      const res1 = await fetch('http://localhost:3000/api/progress/week1', {
        method: 'POST',
        body: JSON.stringify({
          _id: formData.phone_number,
          name: formData.name,
          task1: false,
          task2: false,
          task3: false,
          task4: false,
          task5: false,
          task6: false,
          link1: "",
          link2: "",
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const json1 = await res1.json()

      const res2 = await fetch('http://localhost:3000/api/progress/week2', {
        method: 'POST',
        body: JSON.stringify({
          _id: formData.phone_number,
          name: formData.name,
          task1: false,
          task2: false,
          task3: false,
          task4: false,
          task5: false,
          link1: "",
          link2: "",
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const json2 = await res2.json()

      const res3 = await fetch('http://localhost:3000/api/progress/week3', {
        method: 'POST',
        body: JSON.stringify({
          _id: formData.phone_number,
          name: formData.name,
          task1: false,
          task2: false,
          task3: false,
          task4: false,
          link1: "",
          link2: "",
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const json3 = await res3.json()

      const res4 = await fetch('http://localhost:3000/api/progress/week4', {
        method: 'POST',
        body: JSON.stringify({
          _id: formData.phone_number,
          name: formData.name,
          task1: false,
          task2: false,
          link1: "",
          link2: "",
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const json4 = await res4.json()

      navigate('/')
    } catch (error) {
      setMessage(error.response.data.error)
      toast.error(error.response.data.error)
    }
  }

  const handleGoLogin = () => {
    navigate('/login')
  }

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="phone_number"
          placeholder="Phone Number"
          value={formData.phone_number}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <button type="submit">Signup</button>
      </form>
      {message && <p>{message}</p>}
      <div>
        Already have login? GO LOGIN THEN
        <button onClick={handleGoLogin}>Login</button>
      </div>
      <button onClick={()=>{navigate("/")}}>GO BACK HOME</button>
      <ToastContainer />
    </div>
  )
}

export default Signup
