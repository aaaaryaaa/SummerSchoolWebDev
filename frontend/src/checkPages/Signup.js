import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import background from '../assets/background1.jpg'

const Signup = ({ setUser }) => {
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
        'http://localhost:4000/api/auth/signup',
        formData
      )
      setMessage(response.data.message)
      toast.success(response.data.message)
      navigate('/')

      // You can set the user state here if needed
      // setUser(response.data.user);
    } catch (error) {
      setMessage(error.response.data.error)
      toast.error(error.response.data.error)
    }
  }

  const handleGoLogin = () => {
    navigate('/login')
  }

  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-md"
        style={{
          backgroundImage: `url(${background})`,
        }}
      ></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-700 bg-opacity-50 rounded-md p-8 w-2/5 h-2/3">
        <h2 className="text-2xl font-bold text-center mb-6 text-white text-[43.89px] font-['Archivo'] leading-[65.83px]">
          Signup
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4  flex flex-row items-center">
            <div className="text-white w-52 text-[30.89px] font-normal font-['Ruda'] leading-[65.83px] px-6 ml-8">
              Phone No :
            </div>
            <input
              type="text"
              name="phone_number"
              placeholder="Type here"
              value={formData.phone_number}
              onChange={handleChange}
              className="input input-ghost w-full max-w-xs border-solid border-b-2 border-b-gray-300 px-6"
            />
          </div>
          <div className="mb-4 flex flex-row items-center">
            <div className="text-white w-52 text-[30.89px] font-normal font-['Ruda'] leading-[65.83px] px-6 ml-8">
              Password :
            </div>
            <input
              type="password"
              name="password"
              placeholder="Type here"
              value={formData.password}
              onChange={handleChange}
              className="input input-ghost w-full max-w-xs border-solid border-b-2 border-b-gray-300 px-6"
            />
          </div>
          <div className="mb-4 flex flex-row items-center">
            <div className="text-white w-52 text-[30.89px] font-normal font-['Ruda'] leading-[65.83px] px-6 ml-8">
              Name :
            </div>
            <input
              type="text"
              name="name"
              placeholder="Type here"
              value={formData.name}
              onChange={handleChange}
              className="input input-ghost w-full max-w-xs border-solid border-b-2 border-b-gray-300 px-6"
            />
          </div>
          <button className="w-[150px] h-[44px] bg-amber-300 rounded-[35px] shadow border border-rose-50 ml-56 mt-6 text-black text-[25.89px] font-bold font-['Archivo']">
            Signup
          </button>
        </form>
        {/* {message && (
          <p className="mt-4 underline text-white text-center">{message}</p>
        )} */}
        <div className="mt-6 text-center text-white">
          Already have an account?{'   |     '}
          <button
            onClick={handleGoLogin}
            className="text-blue-400 hover:underline"
          >
            Login
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Signup
