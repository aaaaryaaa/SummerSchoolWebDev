import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Week1() {
  const [week, setWeek] = useState()
  const [record, setRecord] = useState()
  const [taskone, setTaskOne] = useState()
  const [tasktwo, setTaskTwo] = useState()
  const [taskthree, setTaskThree] = useState()
  const [taskfour, setTaskFour] = useState()
  const [taskfive, setTaskFive] = useState()
  const [tasksix, setTaskSix] = useState()

  useEffect(() => {
    const fetchWeek = async () => {
      const response = await fetch('http://localhost:4000/api/progress/week1')
      const json = await response.json()

      if (response.ok) {
        setWeek(json)
      }
    }

    const fetchRecord = async () => {
      const response = await fetch(
        'http://localhost:4000/api/progress/week1/' + 9845780894
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
      }
    }

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

    const task = { task1, task2, task3, task4, task5, tasksix }

    const response = await fetch(
      'http://localhost:4000/api/progress/week1/' + 9845780894,
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
      console.log(json)
    }
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

  return (
    <div className="flex justify-center items-center h-full">
      <div className="w-4/5">
        <div className="text-8xl text-center">WEEK 1</div>
        <div className=" bg-gray-500 p-10">
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">Project 1</div>
            <div className="collapse-content">
              <p>hello</p>
              <label>
                <input
                  type="checkbox"
                  checked={taskone}
                  onChange={handleCheck1}
                />
                Task 1
              </label>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">Project 2</div>
            <div className="collapse-content">
              <p>hello</p>
              <label>
                <input
                  type="checkbox"
                  checked={tasktwo}
                  onChange={handleCheck2}
                />
                Task 2
              </label>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">Project 3</div>
            <div className="collapse-content">
              <p>hello</p>
              <label>
                <input
                  type="checkbox"
                  checked={taskthree}
                  onChange={handleCheck3}
                />
                Task 3
              </label>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">Project 4</div>
            <div className="collapse-content">
              <p>hello</p>
              <label>
                <input
                  type="checkbox"
                  checked={taskfour}
                  onChange={handleCheck4}
                />
                Task 4
              </label>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">Project 5</div>
            <div className="collapse-content">
              <p>hello</p>
              <label>
                <input
                  type="checkbox"
                  checked={taskfive}
                  onChange={handleCheck5}
                />
                Task 5
              </label>
            </div>
          </div>
          {record && (
            <div className="bg-white p-4 rounded-lg shadow-lg m-4">
              <h3 className="text-lg font-semibold mb-2">{record.name}</h3>
              <div className="flex justify-between mb-2">
                <span>{record.task1 ? 'done' : 'notdone'}</span>
                <span>{record.task2 ? 'done' : 'notdone'}</span>
                <span>{record.task3 ? 'done' : 'notdone'}</span>
                <span>{record.task4 ? 'done' : 'notdone'}</span>
                <span>{record.task5 ? 'done' : 'notdone'}</span>
                <span>{record.task6 ? 'done' : 'notdone'}</span>
              </div>
              {/* <form onSubmit={handleSubmit}>
                <div className="flex justify-between mb-2">
                  <label>
                    <input
                      type="checkbox"
                      checked={taskone}
                      onChange={handleCheck1}
                    />
                    Task 1
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      checked={tasktwo}
                      onChange={handleCheck2}
                    />
                    Task 2
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      checked={taskthree}
                      onChange={handleCheck3}
                    />
                    Task 3
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      checked={taskfour}
                      onChange={handleCheck4}
                    />
                    Task 4
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      checked={taskfive}
                      onChange={handleCheck5}
                    />
                    Task 5
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      checked={tasksix}
                      onChange={handleCheck6}
                    />
                    Task 6
                  </label>
                </div>
                <button className="bg-blue-500 text-white py-2 px-4 rounded">
                  SUBMIT
                </button>
              </form> */}
            </div>
          )}
          <h3 className="mt-4 mb-2 text-xl">EVERYONE'S PROGRESS</h3>
          <div className="grid grid-cols-2 gap-4">
            {week &&
              week.map((x) => (
                <div
                  key={x._id}
                  className="bg-white p-4 rounded-lg shadow grid grid-cols-2 gap-4"
                >
                  <p>
                    <strong>Name:</strong> {x.name}
                  </p>
                  <p>
                    <strong>ID:</strong> {x._id}
                  </p>

                  <p>
                    <strong>Task 1:</strong> {x.task1 ? 'done' : 'notdone'}
                  </p>
                  <p>
                    <strong>Task 2:</strong> {x.task2 ? 'done' : 'notdone'}
                  </p>
                  <p>
                    <strong>Task 3:</strong> {x.task3 ? 'done' : 'notdone'}
                  </p>
                  <p>
                    <strong>Task 4:</strong> {x.task4 ? 'done' : 'notdone'}
                  </p>
                  <p>
                    <strong>Task 5:</strong> {x.task5 ? 'done' : 'notdone'}
                  </p>
                  <p>
                    <strong>Task 6:</strong> {x.task6 ? 'done' : 'notdone'}
                  </p>
                </div>
              ))}
          </div>
        </div>
        <button className="bg-blue-500 text-white py-2 px-4 rounded">
          <Link to="/">Go to Homepage</Link>
        </button>
      </div>
    </div>
  )
}
