import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../Sidebar'

export default function DesignWeek4({ user }) {
  const navigate = useNavigate()

  const [week, setWeek] = useState()
  const [record, setRecord] = useState()
  const [taskone, setTaskOne] = useState()
  const [tasktwo, setTaskTwo] = useState()
  const [taskthree, setTaskThree] = useState()
  const [taskfour, setTaskFour] = useState()
  const [taskfive, setTaskFive] = useState()
  const [tasksix, setTaskSix] = useState()
  const [taskseven, setTaskSeven] = useState()
  const [taskeight, setTaskEight] = useState()
  const [linkone, setLinkOne] = useState()
  const [linktwo, setLinkTwo] = useState()

  const fetchWeek = async () => {
    const response = await fetch(
      'http://localhost:4000/api/progress/designweek4'
    )
    const json = await response.json()

    if (response.ok) {
      setWeek(json)
    }
  }

  const fetchRecord = async () => {
    // console.log(user.user.phone_number)
    const response = await fetch(
      'http://localhost:4000/api/progress/designweek4/' + user.phone_number
    )
    const json = await response.json()

    if (response.ok) {
      setRecord(json)
      setTaskOne(json.task1)
      setTaskTwo(json.task2)
      setTaskThree(json.task3)
      setTaskFour(json.task4)
      setTaskFive(json.task5)
      setTaskSix(json.task6)
      setTaskSeven(json.task7)
      setTaskEight(json.task8)
      setLinkOne(json.link1)
      setLinkTwo(json.link2)
    }
  }

  useEffect(() => {
    fetchRecord()
    fetchWeek()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    let task1 = taskone
    let task2 = tasktwo
    let task3 = taskthree
    let task4 = taskfour
    let task5 = taskfive
    let task6 = tasksix
    let task7 = taskseven
    let task8 = taskeight
    let link1 = linkone
    let link2 = linktwo

    const task = {
      task1,
      task2,
      task3,
      task4,
      task5,
      task6,
      task7,
      task8,
      link1,
      link2,
    }

    const response = await fetch(
      'http://localhost:4000/api/progress/designweek4/' + user.phone_number,
      {
        method: 'PATCH',
        body: JSON.stringify(task),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )

    const json = await response.json()

    if (response.ok) {
      // console.log(json)
    }

    fetchRecord()
    fetchWeek()
  }

  const handleCheck1 = () => {
    setTaskOne(!taskone)
  }

  const handleCheck2 = () => {
    setTaskTwo(!tasktwo)
  }

  const handleCheck3 = () => {
    setTaskThree(!taskthree)
  }

  const handleCheck4 = () => {
    setTaskFour(!taskfour)
  }

  const handleCheck5 = () => {
    setTaskFive(!taskfive)
  }

  const handleCheck6 = () => {
    setTaskSix(!tasksix)
  }

  const handleCheck7 = () => {
    setTaskSeven(!taskseven)
  }

  const handleCheck8 = () => {
    setTaskEight(!taskeight)
  }

  const handleGoHome = () => {
    navigate('/')
  }

  return (
    <div className="flex h-screen">
      <Sidebar domain="design" />
      <div className="flex-1 ml-64 p-4 mt-20">
        <h1 className="text-xl font-bold">Design WEEK 4</h1>
        <h3 className="text-lg mt-4">DID YOU FINISH?</h3>
        <div>
          {record && (
            <div>
              {record.name}---{record.task1 ? 'done' : 'not done'}---
              {record.task2 ? 'done' : 'not done'}---
              {record.task3 ? 'done' : 'not done'}---
              {record.task4 ? 'done' : 'not done'}---
              {record.task5 ? 'done' : 'not done'}---
              {record.task6 ? 'done' : 'not done'}---{record.link1}---
              {record.link2}
              <form onSubmit={handleSubmit}>
                <input
                  type="checkbox"
                  checked={taskone}
                  onChange={handleCheck1}
                />{' '}
                task1
                <input
                  type="checkbox"
                  checked={tasktwo}
                  onChange={handleCheck2}
                />{' '}
                task2
                <input
                  type="checkbox"
                  checked={taskthree}
                  onChange={handleCheck3}
                />{' '}
                task3
                <input
                  type="checkbox"
                  checked={taskfour}
                  onChange={handleCheck4}
                />{' '}
                task4
                <input
                  type="checkbox"
                  checked={taskfive}
                  onChange={handleCheck5}
                />{' '}
                task5
                <input
                  type="checkbox"
                  checked={tasksix}
                  onChange={handleCheck6}
                />{' '}
                task6
                <input
                  type="text"
                  value={linkone}
                  placeholder="Enter Link 1"
                  onChange={(e) => {
                    setLinkOne(e.target.value)
                  }}
                />
                <input
                  type="text"
                  value={linktwo}
                  placeholder="Enter Link 2"
                  onChange={(e) => {
                    setLinkTwo(e.target.value)
                  }}
                />
                <button>SUBMIT</button>
              </form>
            </div>
          )}
        </div>
        <div>
          <h3>EVERYONE'S PROGRESS</h3>
        </div>
        <div>
          {week &&
            week.map((x) => (
              <p key={x._id}>
                {x._id}---{x.name}---{x.task1 ? 'done' : 'not done'}---
                {x.task2 ? 'done' : 'not done'}---
                {x.task3 ? 'done' : 'not done'}---
                {x.task4 ? 'done' : 'not done'}---
                {x.task5 ? 'done' : 'not done'}---
                {x.task6 ? 'done' : 'not done'}---{x.link1}---{x.link2}
              </p>
            ))}
        </div>
        <button onClick={handleGoHome}>GO BACK TO HOME</button>
      </div>
    </div>
  )
}
