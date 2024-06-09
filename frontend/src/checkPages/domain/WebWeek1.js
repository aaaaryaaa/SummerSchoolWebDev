import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function WebWeek1({ user }) {
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

  function calcProgress(obj, num) {
    let n = 0;
    if (obj.task1) n += 1;
    if (obj.task2) n += 1;
    if (obj.task3) n += 1;
    if (obj.task4) n += 1;
    if (obj.task5) n += 1;
    if (obj.task6) n += 1;
    return ((n * 100) / num).toFixed(2);
  }

  const fetchWeek = async () => {
    const response = await fetch('http://localhost:4000/api/progress/webweek1')
    const json = await response.json()

    if (response.ok) {
      setWeek(json)
    }
  }

  const fetchRecord = async () => {
    // console.log(user.user.phone_number)
    const response = await fetch(
      'http://localhost:4000/api/progress/webweek1/' + user.phone_number
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



    const task = { task1, task2, task3, task4, task5, task6, task7, task8, link1, link2 }

    const response = await fetch(
      'http://localhost:4000/api/progress/webweek1/' + user.phone_number,
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
    navigate("/");
  }

  return (
    <div className='centereddiv'>
      <div className='mt-20'>
        <h1>WEB WEEK 1</h1>
        <h3>DID U FINISH?</h3>
        <div>
          {record && (
            <div>
              {record.name}---{record.task1 ? 'done' : 'notdone'}---{record.task2 ? 'done' : 'notdone'}---{record.task3 ? 'done' : 'notdone'}---{record.task4 ? 'done' : 'notdone'}---{record.task5 ? 'done' : 'notdone'}---{record.task6 ? 'done' : 'notdone'}---{record.link1}---{record.link2}

              <div class="cardContainer">
                <div class="card flex flex-row justify-center space-x-16">
                  <div className='flex flex-col space-y-4'>
                    <p class="city">Name: {record.name}</p>
                    <p class="city">Phone No: {record._id}</p>
                  </div>
                  <div className="radial-progress bg-primary text-primary-content border-4 border-primary" style={{ "--value": calcProgress(record, 6), "--size": "10rem" }} role="progressbar">{calcProgress(record, 6)}</div>
                  <div class="checkbox-wrapper flex flex-col">
                    <input style={{ display: 'none' }} checked={taskone} onChange={handleCheck1} disabled={true} type="checkbox" id="cbx" class="inp-cbx" />
                    <label for="cbx" class="cbx">
                      <span>
                        <svg viewBox="0 0 12 9" height="9px" width="12px">
                          <polyline points="1 5 4 8 11 1"></polyline>
                        </svg>
                      </span>
                      <span className='text-lg'>To-do</span>
                    </label>

                    <input style={{ display: 'none' }} checked={tasktwo} onChange={handleCheck2} disabled={true} type="checkbox" id="cbx" class="inp-cbx" />
                    <label for="cbx" class="cbx">
                      <span>
                        <svg viewBox="0 0 12 9" height="9px" width="12px">
                          <polyline points="1 5 4 8 11 1"></polyline>
                        </svg>
                      </span>
                      <span className='text-lg'>To-do</span>
                    </label>

                    <input style={{ display: 'none' }} checked={taskthree} onChange={handleCheck3} disabled={true} type="checkbox" id="cbx" class="inp-cbx" />
                    <label for="cbx" class="cbx">
                      <span>
                        <svg viewBox="0 0 12 9" height="9px" width="12px">
                          <polyline points="1 5 4 8 11 1"></polyline>
                        </svg>
                      </span>
                      <span className='text-lg'>To-do</span>
                    </label>

                    <input style={{ display: 'none' }} checked={taskfour} onChange={handleCheck4} disabled={true} type="checkbox" id="cbx" class="inp-cbx" />
                    <label for="cbx" class="cbx">
                      <span>
                        <svg viewBox="0 0 12 9" height="9px" width="12px">
                          <polyline points="1 5 4 8 11 1"></polyline>
                        </svg>
                      </span>
                      <span className='text-lg'>To-do</span>
                    </label>

                    <input style={{ display: 'none' }} checked={taskfive} onChange={handleCheck5} disabled={true} type="checkbox" id="cbx" class="inp-cbx" />
                    <label for="cbx" class="cbx">
                      <span>
                        <svg viewBox="0 0 12 9" height="9px" width="12px">
                          <polyline points="1 5 4 8 11 1"></polyline>
                        </svg>
                      </span>
                      <span className='text-lg'>To-do</span>
                    </label>

                    <input style={{ display: 'none' }} checked={tasksix} onChange={handleCheck6} disabled={true} type="checkbox" id="cbx" class="inp-cbx" />
                    <label for="cbx" class="cbx">
                      <span>
                        <svg viewBox="0 0 12 9" height="9px" width="12px">
                          <polyline points="1 5 4 8 11 1"></polyline>
                        </svg>
                      </span>
                      <span className='text-lg'>To-do</span>
                    </label>
                  </div>
                </div>
              </div>
              <form onSubmit={handleSubmit}>
                <input type="checkbox" checked={taskone} onChange={handleCheck1} />task1
                <input type="checkbox" checked={tasktwo} onChange={handleCheck2} />task2
                <input type="checkbox" checked={taskthree} onChange={handleCheck3} />task3
                <input type="checkbox" checked={taskfour} onChange={handleCheck4} />task4
                <input type="checkbox" checked={taskfive} onChange={handleCheck5} />task5
                <input type="checkbox" checked={tasksix} onChange={handleCheck6} />task6


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
            {x._id}---{x.name}---{x.task1 ? 'done' : 'notdone'}---{x.task2 ? 'done' : 'notdone'}---{x.task3 ? 'done' : 'notdone'}---{x.task4 ? 'done' : 'notdone'}---{x.task5 ? 'done' : 'notdone'}---{x.task6 ? 'done' : 'notdone'}---{x.link1}---{x.link2}

          </p>
        ))}
      </div>
      <button onClick={handleGoHome}>GO BACK TO HOME</button>
    </div>
  )
}
