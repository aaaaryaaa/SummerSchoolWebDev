import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Week3({ user }) {
  const navigate = useNavigate()

  const [week, setWeek] = useState()
  const [record, setRecord] = useState()
  const [taskone, setTaskOne] = useState()
  const [tasktwo, setTaskTwo] = useState()
  const [taskthree, setTaskThree] = useState()
  const [taskfour, setTaskFour] = useState()
  const [linkone, setLinkOne] = useState()
  const [linktwo, setLinkTwo] = useState()

  const fetchWeek = async () => {
    const response = await fetch('http://localhost:4000/api/progress/week3')
    const json = await response.json()

    if (response.ok) {
      setWeek(json)
    }
  }

  const fetchRecord = async () => {
    const response = await fetch(
      'http://localhost:4000/api/progress/week3/' + user.user.phone_number
    )
    const json = await response.json()

    if (response.ok) {
      setRecord(json)
      setTaskOne(json.task1)
      setTaskTwo(json.task2)
      setTaskThree(json.task3)
      setTaskFour(json.task4)
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
    let link1 = linkone
    let link2 = linktwo

    const task = { task1, task2, task3, task4, link1, link2 }

    const response = await fetch(
      'http://localhost:4000/api/progress/week3/' + user.user.phone_number,
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

  const handleGoHome = () => {
    navigate("/");
  }

  return (
    <div>
            <div className='mt-20'>
                <h1>WEEK 3</h1>
                <h3>DID U FINISH?</h3>
                <div>
                    {record && (
                        <div>
                            {record.name}---{record.task1 ? 'done' : 'notdone'}---{record.task2 ? 'done' : 'notdone'}---{record.task3 ? 'done' : 'notdone'}---{record.task4 ? 'done' : 'notdone'}---{record.link1}---{record.link2}
                            <form onSubmit={handleSubmit}>
                                <input type="checkbox" checked={taskone} onChange={handleCheck1}/>task1
                                <input type="checkbox" checked={tasktwo} onChange={handleCheck2}/>task2
                                <input type="checkbox" checked={taskthree} onChange={handleCheck3}/>task3
                                <input type="checkbox" checked={taskfour} onChange={handleCheck4}/>task4
                                <input type="text" value={linkone} placeholder="Enter Link 1" onChange={(e) => { setLinkOne(e.target.value) }} />
                                <input type="text" value={linktwo} placeholder="Enter Link 2" onChange={(e) => { setLinkTwo(e.target.value) }} />
                                <button>SUBMIT</button>
                            </form>
                        </div>
                    )}
                </div>
            </div>
            <div>
                <h3>EVERYONE'S PROGRESS</h3>
            </div>
            <div>
                {week && week.map((x) => (
                    <p key={x._id}>
                        {x._id}---{x.name}---{x.task1 ? 'done' : 'notdone'}---{x.task2 ? 'done' : 'notdone'}---{x.task3 ? 'done' : 'notdone'}---{x.task4 ? 'done' : 'notdone'}---{x.link1}---{x.link2}

                    </p>
                ))}
            </div>
            <button onClick={handleGoHome}>GO BACK TO HOME</button>
        </div>
  )
}
