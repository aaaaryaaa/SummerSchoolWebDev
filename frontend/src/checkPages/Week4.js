import React, { useEffect, useState } from 'react'

export default function Week4() {
  const [week, setWeek] = useState()
  const [record, setRecord] = useState()
  const [taskone, setTaskOne] = useState()
  const [tasktwo, setTaskTwo] = useState()

  useEffect(() => {
    const fetchWeek = async () => {
      const response = await fetch('http://localhost:3000/api/progress/week4')
      const json = await response.json()

      if (response.ok) {
        setWeek(json)
      }
    }

    const fetchRecord = async () => {
      const response = await fetch(
        'http://localhost:3000/api/progress/week4/' + 9845780894
      )
      const json = await response.json()

      if (response.ok) {
        setRecord(json)
        setTaskOne(json.task1)
        setTaskTwo(json.task2)
      }
    }

    fetchRecord()
    fetchWeek()
  }, [])

  const handleSubmit = async (e) => {
    let task1 = taskone
    let task2 = tasktwo

    const task = { task1, task2 }

    const response = await fetch(
      'http://localhost:3000/api/progress/week4/' + 9845780894,
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

  return (
    <div>
            <div>
                <h1>WEEK 4</h1>
                <h3>DID U FINISH?</h3>
                <div>
                    {record && (
                        <div>
                            {record.name}---{record.task1 ? 'done' : 'notdone'}---{record.task2 ? 'done' : 'notdone'}
                            <form onSubmit={handleSubmit}>
                                <input type="checkbox" checked={taskone} onChange={handleCheck1}/>task1
                                <input type="checkbox" checked={tasktwo} onChange={handleCheck2}/>task2
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
                        {x._id}---{x.name}---{x.task1 ? 'done' : 'notdone'}---{x.task2 ? 'done' : 'notdone'}

                    </p>
                ))}
            </div>
        </div>
  )
}
