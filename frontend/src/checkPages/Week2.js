import React, { useEffect, useState } from 'react'

export default function Week2() {
    const [week, setWeek] = useState()
    const [record, setRecord] = useState()
    const [taskone, setTaskOne] = useState()
    const [tasktwo, setTaskTwo] = useState()
    const [taskthree, setTaskThree] = useState()
    const [taskfour, setTaskFour] = useState()
    const [taskfive, setTaskFive] = useState()

    useEffect(() => {
        const fetchWeek = async () => {
            const response = await fetch('http://localhost:3000/api/progress/week2')
            const json = await response.json()

            if (response.ok) {
                setWeek(json)
            }
        }

        const fetchRecord = async () => {
            const response = await fetch('http://localhost:3000/api/progress/week2/' + 9845780894)
            const json = await response.json()

            if (response.ok) {
                setRecord(json)
                setTaskOne(json.task1)
                setTaskTwo(json.task2)
                setTaskThree(json.task3)
                setTaskFour(json.task4)
                setTaskFive(json.task5)
            }
        }

        fetchRecord()
        fetchWeek()

    }, [])


    // make handlesubmit for each task checkbox and make them as patch req
    const handleSubmit = async (e) => {
        let task1 = taskone
        let task2 = tasktwo
        let task3 = taskthree
        let task4 = taskfour
        let task5 = taskfive

        const task = { task1, task2, task3, task4, task5 }

        const response = await fetch('http://localhost:3000/api/progress/week2/' + 9845780894, {
            method: 'PATCH',
            body: JSON.stringify(task),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()

        if(response.ok){
            console.log(json)
        }
    }

    const handleCheck1 = async (e) => {
        setTaskOne(!taskone)

        // let task1 = !record.task1
        // const task = { task1 }

        // const response = await fetch('/api/progress/week1/' + 9845780894, {
        //     method: 'PATCH',
        //     body: JSON.stringify(task),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // })

        // const json = await response.json()

        // if(!response.ok){
        //     setTaskOne(!taskone)
        // }

        // if(response.ok){
        //     console.log(json)
        // }
    }

    const handleCheck2 = async (e) => {
        setTaskTwo(!tasktwo)

        // let task2 = !record.task2
        // const task = { task2 }

        // const response = await fetch('/api/progress/week1/' + 9845780894, {
        //     method: 'PATCH',
        //     body: JSON.stringify(task),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // })

        // const json = await response.json()

        // if(!response.ok){
        //     setTaskTwo(!tasktwo)
        // }

        // if(response.ok){
        //     console.log(json)
        // }
    }

    const handleCheck3 = async (e) => {
        setTaskThree(!taskthree)

        // let task3 = !record.task3
        // const task = { task3 }

        // const response = await fetch('/api/progress/week1/' + 9845780894, {
        //     method: 'PATCH',
        //     body: JSON.stringify(task),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // })

        // const json = await response.json()

        // if(!response.ok){
        //     setTaskThree(!taskthree)
        // }

        // if(response.ok){
        //     console.log(json)
        // }
    }

    const handleCheck4 = async (e) => {
        setTaskFour(!taskfour)

        // let task4 = !record.task4
        // const task = { task4 }

        // const response = await fetch('/api/progress/week1/' + 9845780894, {
        //     method: 'PATCH',
        //     body: JSON.stringify(task),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // })

        // const json = await response.json()

        // if(!response.ok){
        //     setTaskFour(!taskfour)
        // }

        // if(response.ok){
        //     console.log(json)
        // }
    }

    const handleCheck5 = async (e) => {
        setTaskFive(!taskfive)

        // let task5 = !record.task5
        // const task = { task5 }

        // const response = await fetch('/api/progress/week1/' + 9845780894, {
        //     method: 'PATCH',
        //     body: JSON.stringify(task),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // })

        // const json = await response.json()

        // if(!response.ok){
        //     setTaskFive(!taskfive)
        // }

        // if(response.ok){
        //     console.log(json)
        // }
    }

    return (
        <div>
            <div>
                <h1>WEEK 2</h1>
                <h3>DID U FINISH?</h3>
                <div>
                    {record && (
                        <div>
                            {record.name}---{record.task1 ? 'done' : 'notdone'}---{record.task2 ? 'done' : 'notdone'}---{record.task3 ? 'done' : 'notdone'}---{record.task4 ? 'done' : 'notdone'}---{record.task5 ? 'done' : 'notdone'}
                            <form onSubmit={handleSubmit}>
                                <input type="checkbox" checked={taskone} onChange={handleCheck1}/>task1
                                <input type="checkbox" checked={tasktwo} onChange={handleCheck2}/>task2
                                <input type="checkbox" checked={taskthree} onChange={handleCheck3}/>task3
                                <input type="checkbox" checked={taskfour} onChange={handleCheck4}/>task4
                                <input type="checkbox" checked={taskfive} onChange={handleCheck5}/>task5
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
                        {x._id}---{x.name}---{x.task1 ? 'done' : 'notdone'}---{x.task2 ? 'done' : 'notdone'}---{x.task3 ? 'done' : 'notdone'}---{x.task4 ? 'done' : 'notdone'}---{x.task5 ? 'done' : 'notdone'}

                    </p>
                ))}
            </div>
        </div>
    )
}
