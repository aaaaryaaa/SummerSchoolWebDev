import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import background from '../assets/background1.jpg'

const Signup = ({ user, setUser }) => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    phone_number: '',
    password: '',
    name: '',
    domains: {
      DSA: false,
      'AI-ML': false,
      'Web Development': false,
      'App Development': false,
      Design: false,
    },
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        domains: {
          ...formData.domains,
          [value]: checked,
        },
      })
    } else {
      setFormData({
        ...formData,
        [name]: value,
      })
    }
    // console.log(formData);
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const selectedDomains = Object.keys(formData.domains).filter(
      (domain) => formData.domains[domain]
    )

    console.log(selectedDomains)

    if (selectedDomains.length < 1) {
      toast.error('Select a minimum of 1 domain')
      return
    }

    if (
      selectedDomains.length < 1 ||
      (selectedDomains.length == 4 && !selectedDomains.includes('DSA')) ||
      selectedDomains.length > 4
    ) {
      toast.error('Only a maximum of 3 allowed, 4 allowed if DSA is ticked')
      return
    }

    const dataToSubmit = {
      ...formData,
      domains: selectedDomains,
    }

    let arr = dataToSubmit.domains

    const checkDomainAccess = (domain) => {
      if (arr === undefined) {
        return false // or handle this case as needed
      }
      return arr.includes(domain)
    }

    setFormData({
      ...formData,
      domains: {
        DSA: checkDomainAccess('DSA'),
        'AI-ML': checkDomainAccess('AI-ML'),
        'Web Development': checkDomainAccess('Web Development'),
        'App Development': checkDomainAccess('App Development'),
        Design: checkDomainAccess('Design'),
      },
    })

    try {
      console.log(dataToSubmit)

      const response = await axios.post(
        'http://localhost:4000/api/auth/signup',
        formData
      )

      let dsa = false
      let aiml = false
      let web = false
      let app = false
      let des = false

      //THIS CODE FOR INITIALISING REQUIRED DBS ONLY

      if (checkDomainAccess('DSA')) {
        console.log(checkDomainAccess('DSA') + ' dsa')
        dsa = true
        // Initializing all weeks db
        const res1 = await fetch(
          'http://localhost:4000/api/progress/dsaweek1',
          {
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
              task7: false,
              task8: false,
              link1: '',
              link2: '',
              link3: '',
              link4: '',
              link5: '',
            }),
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )

        const json1 = await res1.json()

        const res2 = await fetch(
          'http://localhost:4000/api/progress/dsaweek2',
          {
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
              task7: false,
              task8: false,
              link1: '',
              link2: '',
              link3: '',
              link4: '',
              link5: '',
            }),
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )

        const json2 = await res2.json()

        const res3 = await fetch(
          'http://localhost:4000/api/progress/dsaweek3',
          {
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
              task7: false,
              task8: false,
              link1: '',
              link2: '',
              link3: '',
              link4: '',
              link5: '',
            }),
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )

        const json3 = await res3.json()

        const res4 = await fetch(
          'http://localhost:4000/api/progress/dsaweek4',
          {
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
              task7: false,
              task8: false,
              link1: '',
              link2: '',
              link3: '',
              link4: '',
              link5: '',
            }),
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )

        const json4 = await res4.json()

        const res5 = await fetch(
          'http://localhost:4000/api/progress/dsaweek5',
          {
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
              task7: false,
              task8: false,
              link1: '',
              link2: '',
              link3: '',
              link4: '',
              link5: '',
            }),
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )

        const json5 = await res5.json()

        const res6 = await fetch(
          'http://localhost:4000/api/progress/dsaweek6',
          {
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
              task7: false,
              task8: false,
              link1: '',
              link2: '',
              link3: '',
              link4: '',
              link5: '',
            }),
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )

        const json6 = await res6.json()
      }

      if (checkDomainAccess('AI-ML')) {
        console.log(checkDomainAccess('AI-ML') + ' aiml')
        aiml = true

        const res1 = await fetch(
          'http://localhost:4000/api/progress/aimlweek1',
          {
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
              task7: false,
              task8: false,
              link1: '',
              link2: '',
              link3: '',
              link4: '',
              link5: '',
            }),
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )

        const json1 = await res1.json()

        const res2 = await fetch(
          'http://localhost:4000/api/progress/aimlweek2',
          {
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
              task7: false,
              task8: false,
              link1: '',
              link2: '',
              link3: '',
              link4: '',
              link5: '',
            }),
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )

        const json2 = await res2.json()

        const res3 = await fetch(
          'http://localhost:4000/api/progress/aimlweek3',
          {
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
              task7: false,
              task8: false,
              link1: '',
              link2: '',
              link3: '',
              link4: '',
              link5: '',
            }),
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )

        const json3 = await res3.json()

        const res4 = await fetch(
          'http://localhost:4000/api/progress/aimlweek4',
          {
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
              task7: false,
              task8: false,
              link1: '',
              link2: '',
              link3: '',
              link4: '',
              link5: '',
            }),
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )

        const json4 = await res4.json()
      }

      if (checkDomainAccess('Web Development')) {
        console.log(checkDomainAccess('Web Development') + ' web')
        web = true

        const res1 = await fetch(
          'http://localhost:4000/api/progress/webweek1',
          {
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
              task7: false,
              task8: false,
              link1: '',
              link2: '',
              link3: '',
              link4: '',
              link5: '',
            }),
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )

        const json1 = await res1.json()

        const res2 = await fetch(
          'http://localhost:4000/api/progress/webweek2',
          {
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
              task7: false,
              task8: false,
              link1: '',
              link2: '',
              link3: '',
              link4: '',
              link5: '',
            }),
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )

        const json2 = await res2.json()

        const res3 = await fetch(
          'http://localhost:4000/api/progress/webweek3',
          {
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
              task7: false,
              task8: false,
              link1: '',
              link2: '',
              link3: '',
              link4: '',
              link5: '',
            }),
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )

        const json3 = await res3.json()

        const res4 = await fetch(
          'http://localhost:4000/api/progress/webweek4',
          {
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
              task7: false,
              task8: false,
              link1: '',
              link2: '',
              link3: '',
              link4: '',
              link5: '',
            }),
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )

        const json4 = await res4.json()

        const res5 = await fetch(
          'http://localhost:4000/api/progress/webweek5',
          {
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
              task7: false,
              task8: false,
              link1: '',
              link2: '',
              link3: '',
              link4: '',
              link5: '',
            }),
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )

        const json5 = await res5.json()
      }

      if (checkDomainAccess('App Development')) {
        console.log(checkDomainAccess('App Development') + ' app')
        app = true

        const res1 = await fetch(
          'http://localhost:4000/api/progress/appweek1',
          {
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
              task7: false,
              task8: false,
              link1: '',
              link2: '',
              link3: '',
              link4: '',
              link5: '',
            }),
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )

        const json1 = await res1.json()

        const res2 = await fetch(
          'http://localhost:4000/api/progress/appweek2',
          {
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
              task7: false,
              task8: false,
              link1: '',
              link2: '',
              link3: '',
              link4: '',
              link5: '',
            }),
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )

        const json2 = await res2.json()

        const res3 = await fetch(
          'http://localhost:4000/api/progress/appweek3',
          {
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
              task7: false,
              task8: false,
              link1: '',
              link2: '',
              link3: '',
              link4: '',
              link5: '',
            }),
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )

        const json3 = await res3.json()

        const res4 = await fetch(
          'http://localhost:4000/api/progress/appweek4',
          {
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
              task7: false,
              task8: false,
              link1: '',
              link2: '',
              link3: '',
              link4: '',
              link5: '',
            }),
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )

        const json4 = await res4.json()
      }

      if (checkDomainAccess('Design')) {
        console.log(checkDomainAccess('Design') + ' Design')
        des = true

        const res1 = await fetch(
          'http://localhost:4000/api/progress/designweek1',
          {
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
              task7: false,
              task8: false,
              link1: '',
              link2: '',
              link3: '',
              link4: '',
              link5: '',
            }),
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )

        const json1 = await res1.json()

        const res2 = await fetch(
          'http://localhost:4000/api/progress/designweek2',
          {
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
              task7: false,
              task8: false,
              link1: '',
              link2: '',
              link3: '',
              link4: '',
              link5: '',
            }),
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )

        const json2 = await res2.json()

        const res3 = await fetch(
          'http://localhost:4000/api/progress/designweek3',
          {
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
              task7: false,
              task8: false,
              link1: '',
              link2: '',
              link3: '',
              link4: '',
              link5: '',
            }),
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )

        const json3 = await res3.json()

        const res4 = await fetch(
          'http://localhost:4000/api/progress/designweek4',
          {
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
              task7: false,
              task8: false,
              link1: '',
              link2: '',
              link3: '',
              link4: '',
              link5: '',
            }),
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )

        const json4 = await res4.json()
      }

      toast.success(response.data.message)
      toast.success('Please login to continue')
      navigate('/')
    } catch (error) {
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
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-700 bg-opacity-50 rounded-md p-8 w-full h-auto md:w-4/5 md:h-3/4 lg:w-2/3 lg:h-3/4 xl:w-1/2 xl:h-3/4 2xl:p-8 2xl:w-2/5 2xl:h-3/4">
        <h2 className="text-2xl font-bold text-center mb-6 text-white text-[43.89px] font-['Archivo'] leading-[65.83px]">
          Signup
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4  flex flex-col sm:flex-row items-center">
            <div className="text-white sm:w-52 text-[1.5rem] sm:text-[2rem] lg:text-[2rem] font-normal font-['Ruda'] leading-[2rem] sm:leading-[4rem] md:px-6 md:ml-4 lg:ml-10 2xl:px-6 ">
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
          <div className="mb-4 flex flex-col sm:flex-row items-center">
            <div className="text-white sm:w-52 text-[1.5rem] sm:text-[2rem] lg:text-[2rem] font-normal font-['Ruda'] leading-[2rem] sm:leading-[4rem] md:px-6 md:ml-4 lg:ml-10 2xl:px-6">
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
          <div className="mb-4 flex flex-col sm:flex-row items-center">
            <div className="text-white sm:w-52 text-[1.5rem] sm:text-[2rem] lg:text-[2rem] font-normal font-['Ruda'] leading-[2rem] sm:leading-[4rem] md:px-6 md:ml-4 lg:ml-10 2xl:px-6">
              Full Name :
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
          <div className="mb-4 flex flex-col text-white text-[30.89px] font-normal font-['Ruda'] px-6 mt-2">
            Domains:
            <div className="ml-4 flex flex-row ">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="domains"
                  value="DSA"
                  checked={formData.domains['DSA']}
                  onChange={handleChange}
                />
                <span className="text-[1.1rem] pr-2">DSA</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="domains"
                  value="AI-ML"
                  checked={formData.domains['AI-ML']}
                  onChange={handleChange}
                />
                <span className="text-[1.1rem] pr-2">AI-ML</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="domains"
                  value="Web Development"
                  checked={formData.domains['Web Development']}
                  onChange={handleChange}
                />
                <span className="text-[1.1rem] pr-2">Web Development</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="domains"
                  value="App Development"
                  checked={formData.domains['App Development']}
                  onChange={handleChange}
                />
                <span className="text-[1.1rem] pr-2">App Development</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="domains"
                  value="Design"
                  checked={formData.domains['Design']}
                  onChange={handleChange}
                />
                <span className="text-[1.1rem]">Design</span>
              </label>
            </div>
          </div>
          <button className="w-full sm:w-[150px] h-[44px] bg-amber-300 rounded-[35px] shadow border border-rose-50 mt-6 text-black text-[1.5rem] font-bold font-['Archivo'] lg:ml-60 lg:mt-5 xl:ml-64 md:ml-52">
            Signup
          </button>
        </form>
        <div className="mt-6 text-center text-white">
          Already have an account?{' '}
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
