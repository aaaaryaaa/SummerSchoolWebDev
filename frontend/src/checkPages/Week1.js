import React, { useEffect, useState } from 'react'

export default function Week1() {
    const [week, setWeek] = useState()

    useEffect(() => {
        const fetchWeek = async () => {
            const response = await fetch('/api/progress/week1')
            const json = await response.json()

            if(response.ok){
                setWeek(json)
            }
        }

        fetchWeek()
    }, [])


    // make handlesubmit for each task checkbox and make them as patch req
    const handleCheck = async (e) => {


    }

    return (
        <div>
            <div>
                <h1>WEEK 1</h1>
                <h3>DID U FINISH?</h3>
                <input type="checkbox" id="checkbox" onClick={handleCheck}/>task1
                <input type="checkbox" id="checkbox" onClick={handleCheck}/>task2
                <input type="checkbox" id="checkbox" onClick={handleCheck}/>task3
                <input type="checkbox" id="checkbox" onClick={handleCheck}/>task4
                <input type="checkbox" id="checkbox" onClick={handleCheck}/>task5
                <input type="checkbox" id="checkbox" onClick={handleCheck}/>task6
            </div>
            <div>
                <h3>EVERYONE'S PROGRESS</h3>
            </div>
            <div>
                {week && week.map((x) => (
                    <p key={x._id}>
                        {x._id}---{x.name}---{x.task1?'done':'notdone'}---{x.task2?'done':'notdone'}---{x.task3?'done':'notdone'}---{x.task4?'done':'notdone'}---{x.task5?'done':'notdone'}---{x.task6?'done':'notdone'}
                           
                    </p>
                ))}
            </div>
        </div>
    )
}
