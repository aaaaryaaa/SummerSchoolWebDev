import React, { useEffect, useState } from 'react'

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
            const response = await fetch('http://localhost:4000/api/progress/week1/' + 9845780894)
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


    // make handlesubmit for each task checkbox and make them as patch req
    const handleSubmit = async (e) => {
        let task1 = taskone
        let task2 = tasktwo
        let task3 = taskthree
        let task4 = taskfour
        let task5 = taskfive
        let task6 = tasksix

        const task = { task1, task2, task3, task4, task5, task6 }

        const response = await fetch('http://localhost:4000/api/progress/week1/' + 9845780894, {
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

    const handleCheck6 = async (e) => {
        setTaskSix(!tasksix)

        // let task6 = !record.task6
        // const task = { task6 }

        // const response = await fetch('/api/progress/week1/' + 9845780894, {
        //     method: 'PATCH',
        //     body: JSON.stringify(task),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // })

        // const json = await response.json()

        // if(!response.ok){
        //     setTaskSix(!tasksix)
        // }

        // if(response.ok){
        //     console.log(json)
        // }
    }

    return (
        <div>
            <div>
                <h1>WEEK 1</h1>
                <h3>DID U FINISH?</h3>
                <div>
                    {record && (
                        <div>
                            {record.name}---{record.task1 ? 'done' : 'notdone'}---{record.task2 ? 'done' : 'notdone'}---{record.task3 ? 'done' : 'notdone'}---{record.task4 ? 'done' : 'notdone'}---{record.task5 ? 'done' : 'notdone'}---{record.task6 ? 'done' : 'notdone'}
                            <form onSubmit={handleSubmit}>
                                <input type="checkbox" checked={taskone} onChange={handleCheck1}/>task1
                                <input type="checkbox" checked={tasktwo} onChange={handleCheck2}/>task2
                                <input type="checkbox" checked={taskthree} onChange={handleCheck3}/>task3
                                <input type="checkbox" checked={taskfour} onChange={handleCheck4}/>task4
                                <input type="checkbox" checked={taskfive} onChange={handleCheck5}/>task5
                                <input type="checkbox" checked={tasksix} onChange={handleCheck6}/>task6
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
                        {x._id}---{x.name}---{x.task1 ? 'done' : 'notdone'}---{x.task2 ? 'done' : 'notdone'}---{x.task3 ? 'done' : 'notdone'}---{x.task4 ? 'done' : 'notdone'}---{x.task5 ? 'done' : 'notdone'}---{x.task6 ? 'done' : 'notdone'}

                    </p>
                ))}
            </div>
        </div>
    )
}
