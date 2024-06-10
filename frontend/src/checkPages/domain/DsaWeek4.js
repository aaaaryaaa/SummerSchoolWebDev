import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import everyoneprog from '../../assets/everyoneprogress.svg'
import Sidebar from '../Sidebar'

export default function DsaWeek4({ user }) {
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
  const [linkthree, setLinkThree] = useState()
  const [linkfour, setLinkFour] = useState()
  const [linkfive, setLinkFive] = useState()

  function calcProgress(obj, num) {
    let n = 0
    if (obj.task1) n += 1
    if (obj.task2) n += 1
    if (obj.task3) n += 1
    if (obj.task4) n += 1
    if (obj.task5) n += 1
    if (obj.task6) n += 1
    return ((n * 100) / num).toFixed(2)
  }

  const fetchWeek = async () => {
    const response = await fetch('http://localhost:4000/api/progress/dsaweek4')
    const json = await response.json()

    if (response.ok) {
      setWeek(json)
    }
  }

  const fetchRecord = async () => {
    // console.log(user.user.phone_number)
    const response = await fetch(
      'http://localhost:4000/api/progress/dsaweek4/' + user.phone_number
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
      setLinkThree(json.link3)
      setLinkFour(json.link4)
      setLinkFive(json.link5)
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
    let link3 = linkthree
    let link4 = linkfour
    let link5 = linkfive

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
      link3,
      link4,
      link5
    }

    const response = await fetch(
      'http://localhost:4000/api/progress/dsaweek4/' + user.phone_number,
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
    <div className="grid grid-cols-10 w-full">
      <div className='col-span-1'><Sidebar domain="dsa" /></div>
      <div className="col-span-9">
        <div className="mt-24 w-full">
          <h1 className=" text-center text-6xl py-10">DSA WEEK 4</h1>
          <div className='w-full'>
            {record && (
              <div className="progressdash w-full flex flex-row">
                {/* card design */}
                <div className="cardContainer pl-5">
                  <div className="card flex flex-row justify-center space-x-16">
                    <div className="flex flex-col space-y-4">
                      <aside className="bg-black text-white p-10 rounded-lg w-fit max-w-[40rem] font-mono">
                        <div className="flex justify-between items-center pb-4">
                          <div className="flex space-x-2 text-red-500">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                          </div>
                          <div>Progress Card</div>
                        </div>
                        <div className="flex">
                          <div className="mt-14">
                            <p className="text-[#00CDB7]">$ npm install details</p>
                            <p className="truncate">Name: {record.name}</p>
                            <p className="">Phone No: {record._id}</p>
                            <p className="text-[#00CDB7]">$ npm install links</p>
                            {record.link1 !== '' ? (
                              <a href={record.link1} target='_blank'>
                                <p className="text-white underline underline-offset-1 truncate">
                                  {record.link1}
                                </p>
                              </a>
                            ) : (
                              <p>Nothing yet.</p>
                            )}
                            {record.link2 !== '' ? (
                              <a href={record.link2} target='_blank'>
                                <p className="text-white underline underline-offset-1 truncate">
                                  {record.link2}
                                </p>
                              </a>
                            ) : (
                              <p>Nothing yet.</p>
                            )}
                            {record.link3 !== '' ? (
                              <a href={record.link3} target='_blank'>
                                <p className="text-white underline underline-offset-1 truncate">
                                  {record.link3}
                                </p>
                              </a>
                            ) : (
                              <p>Nothing yet.</p>
                            )}
                            {record.link4 !== '' ? (
                              <a href={record.link4} target='_blank'>
                                <p className="text-white underline underline-offset-1 truncate">
                                  {record.link4}
                                </p>
                              </a>
                            ) : (
                              <p>Nothing yet.</p>
                            )}
                            {record.link5 !== '' ? (
                              <a href={record.link5} target='_blank'>
                                <p className="text-white underline underline-offset-1 truncate">
                                  {record.link5}
                                </p>
                              </a>
                            ) : (
                              <p>Nothing yet.</p>
                            )}
                            <p className="text-[#00CDB7]">$</p>
                          </div>
                          <div
                            className="radial-progress bg-[black] text-[#00CDB7] border-4 border-[black]"
                            style={{
                              '--value': calcProgress(record, 6),
                              '--size': '16rem',
                              '--thickness': '0.75rem',
                            }}
                            role="progressbar"
                          >
                            {/* {calcProgress(record, 6)} */}
                            <div className="checkbox-wrapper flex flex-col text-[#b9b8c3]">
                              <input
                                style={{ display: 'none' }}
                                checked={taskone}
                                onChange={handleCheck1}
                                disabled={true}
                                type="checkbox"
                                id="cbx"
                                className="inp-cbx"
                              />
                              <label htmlFor="cbx" className="cbx">
                                <span>
                                  <svg
                                    viewBox="0 0 12 9"
                                    height="9px"
                                    width="12px"
                                  >
                                    <polyline points="1 5 4 8 11 1"></polyline>
                                  </svg>
                                </span>
                                <span className="text-lg">Task 1</span>
                              </label>

                              <input
                                style={{ display: 'none' }}
                                checked={tasktwo}
                                onChange={handleCheck2}
                                disabled={true}
                                type="checkbox"
                                id="cbx"
                                className="inp-cbx"
                              />
                              <label htmlFor="cbx" className="cbx">
                                <span>
                                  <svg
                                    viewBox="0 0 12 9"
                                    height="9px"
                                    width="12px"
                                  >
                                    <polyline points="1 5 4 8 11 1"></polyline>
                                  </svg>
                                </span>
                                <span className="text-lg">Task 2</span>
                              </label>

                              <input
                                style={{ display: 'none' }}
                                checked={taskthree}
                                onChange={handleCheck3}
                                disabled={true}
                                type="checkbox"
                                id="cbx"
                                className="inp-cbx"
                              />
                              <label htmlFor="cbx" className="cbx">
                                <span>
                                  <svg
                                    viewBox="0 0 12 9"
                                    height="9px"
                                    width="12px"
                                  >
                                    <polyline points="1 5 4 8 11 1"></polyline>
                                  </svg>
                                </span>
                                <span className="text-lg">Task 3</span>
                              </label>

                              <input
                                style={{ display: 'none' }}
                                checked={taskfour}
                                onChange={handleCheck4}
                                disabled={true}
                                type="checkbox"
                                id="cbx"
                                className="inp-cbx"
                              />
                              <label htmlFor="cbx" className="cbx">
                                <span>
                                  <svg
                                    viewBox="0 0 12 9"
                                    height="9px"
                                    width="12px"
                                  >
                                    <polyline points="1 5 4 8 11 1"></polyline>
                                  </svg>
                                </span>
                                <span className="text-lg">Task 4</span>
                              </label>

                              <input
                                style={{ display: 'none' }}
                                checked={taskfive}
                                onChange={handleCheck5}
                                disabled={true}
                                type="checkbox"
                                id="cbx"
                                className="inp-cbx"
                              />
                              <label htmlFor="cbx" className="cbx">
                                <span>
                                  <svg
                                    viewBox="0 0 12 9"
                                    height="9px"
                                    width="12px"
                                  >
                                    <polyline points="1 5 4 8 11 1"></polyline>
                                  </svg>
                                </span>
                                <span className="text-lg">Task 5</span>
                              </label>

                              <input
                                style={{ display: 'none' }}
                                checked={tasksix}
                                onChange={handleCheck6}
                                disabled={true}
                                type="checkbox"
                                id="cbx"
                                className="inp-cbx"
                              />
                              <label htmlFor="cbx" className="cbx">
                                <span>
                                  <svg
                                    viewBox="0 0 12 9"
                                    height="9px"
                                    width="12px"
                                  >
                                    <polyline points="1 5 4 8 11 1"></polyline>
                                  </svg>
                                </span>
                                <span className="text-lg">Task 6</span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </aside>
                    </div>
                  </div>
                </div>
                {/* card design end */}

                {/* start of form */}
                <form onSubmit={handleSubmit} className="w-full p-20">
                  <div className="grid gap-4 w-full">
                    <div className="form-control flex flex-row w-full">
                      <label className="cursor-pointer label">
                        <input
                          type="checkbox"
                          checked={taskone}
                          onChange={handleCheck1}
                          className="checkbox checkbox-accent"
                        />
                      </label>
                      <div className="bgfiltercard ml-6 w-full">
                        <a id="hide1" href="#hide1" className="hide">
                          Open Task 1
                        </a>
                        <a id="show1" href="#show1" className="show">
                          Close Task 1
                        </a>
                        <div className="details">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Laborum ducimus labore facilis quia nihil
                          explicabo asperiores?
                        </div>
                      </div>
                    </div>
                    <div className="form-control flex flex-row">
                      <label className="cursor-pointer label">
                        <input
                          type="checkbox"
                          checked={tasktwo}
                          onChange={handleCheck2}
                          className="checkbox checkbox-accent"
                        />
                      </label>
                      <div className="bgfiltercard ml-6 w-full">
                        <a id="hide2" href="#hide2" className="hide">
                          Open Task 2
                        </a>
                        <a id="show2" href="#show2" className="show">
                          Close Task 2
                        </a>
                        <div className="details">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Laborum ducimus labore facilis quia nihil
                          explicabo asperiores?
                        </div>
                      </div>
                    </div>
                    <div className="form-control flex flex-row">
                      <label className="cursor-pointer label">
                        <input
                          type="checkbox"
                          checked={taskthree}
                          onChange={handleCheck3}
                          className="checkbox checkbox-accent"
                        />
                      </label>
                      <div className="bgfiltercard ml-6 w-full">
                        <a id="hide3" href="#hide3" className="hide">
                          Open Task 3
                        </a>
                        <a id="show3" href="#show3" className="show">
                          Close Task 3
                        </a>
                        <div className="details">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Laborum ducimus labore facilis quia nihil
                          explicabo asperiores?
                        </div>
                      </div>
                    </div>
                    <div className="form-control flex flex-row">
                      <label className="cursor-pointer label">
                        <input
                          type="checkbox"
                          checked={taskfour}
                          onChange={handleCheck4}
                          className="checkbox checkbox-accent"
                        />
                      </label>
                      <div className="bgfiltercard ml-6 w-full">
                        <a id="hide4" href="#hide4" className="hide">
                          Open Task 4
                        </a>
                        <a id="show4" href="#show4" className="show">
                          Close Task 4
                        </a>
                        <div className="details">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Laborum ducimus labore facilis quia nihil
                          explicabo asperiores?
                        </div>
                      </div>
                    </div>
                    <div className="form-control flex flex-row">
                      <label className="cursor-pointer label">
                        <input
                          type="checkbox"
                          checked={taskfive}
                          onChange={handleCheck5}
                          className="checkbox checkbox-accent"
                        />
                      </label>
                      <div className="bgfiltercard ml-6 w-full">
                        <a id="hide5" href="#hide5" className="hide">
                          Open Task 5
                        </a>
                        <a id="show5" href="#show5" className="show">
                          Close Task 5
                        </a>
                        <div className="details">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Laborum ducimus labore facilis quia nihil
                          explicabo asperiores?
                        </div>
                      </div>
                    </div>
                    <div className="form-control flex flex-row">
                      <label className="cursor-pointer label">
                        <input
                          type="checkbox"
                          checked={tasksix}
                          onChange={handleCheck6}
                          className="checkbox checkbox-accent"
                        />
                      </label>
                      <div className="bgfiltercard ml-6 w-full">
                        <a id="hide6" href="#hide6" className="hide">
                          Open Task 6
                        </a>
                        <a id="show6" href="#show6" className="show">
                          Close Task 6
                        </a>
                        <div className="details">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Laborum ducimus labore facilis quia nihil
                          explicabo asperiores?
                          <div className="mt-2 grid gap-2">
                            <input
                              type="text"
                              value={linkone}
                              placeholder="Enter Link 1"
                              onChange={(e) => {
                                setLinkOne(e.target.value)
                              }}
                              className="input input-bordered input-accent w-full max-w-xs"
                            />
                            <input
                              type="text"
                              value={linktwo}
                              placeholder="Enter Link 2"
                              onChange={(e) => {
                                setLinkTwo(e.target.value)
                              }}
                              className="input input-bordered input-accent w-full max-w-xs"
                            />
                            <input
                              type="text"
                              value={linkthree}
                              placeholder="Enter Link 3"
                              onChange={(e) => {
                                setLinkThree(e.target.value)
                              }}
                              className="input input-bordered input-accent w-full max-w-xs"
                            />
                            <input
                              type="text"
                              value={linkfour}
                              placeholder="Enter Link 4"
                              onChange={(e) => {
                                setLinkFour(e.target.value)
                              }}
                              className="input input-bordered input-accent w-full max-w-xs"
                            />
                            <input
                              type="text"
                              value={linkfive}
                              placeholder="Enter Link 5"
                              onChange={(e) => {
                                setLinkFive(e.target.value)
                              }}
                              className="input input-bordered input-accent w-full max-w-xs"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='centereddiv'>
                      <button className="btn-31">
                        <span className="text-container">
                          <span className="text">Update Progress</span>
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
                {/* end of form */}
              </div>
            )}
          </div>
        </div>
        <div className='centereddiv flex flex-row'>
          <img src={everyoneprog} alt="everyone's progress" />
          <div className="centereddiv bgfiltercard scrollcontainer h-[50rem] overflow-auto m-10 gap-5">
            {week &&
              week.map((x) => (
                <div key={x._id} className="flex flex-col my-1">
                  <aside className="bg-black text-white rounded-lg w-full max-w-[25rem] font-mono p-4">
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-2 text-red-500">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                    </div>
                    <div className="flex ">
                      <div className="mt-4">
                        <p className="text-[#00CDB7]">$ npm install details</p>
                        <p className="truncate">Name: {x.name}</p>
                        <p className="">Phone No: {x._id}</p>
                        <p className="text-[#00CDB7]">$ npm install links</p>
                        {x.link1 !== '' ? (
                          <a href={x.link1} target='_blank'>
                            <p className="text-white underline underline-offset-1 truncate">
                              {x.link1}
                            </p>
                          </a>
                        ) : (
                          <p>Nothing yet.</p>
                        )}
                        {x.link2 !== '' ? (
                          <a href={x.link2} target='_blank'>
                            <p className="text-white underline underline-offset-1 truncate">
                              {x.link2}
                            </p>
                          </a>
                        ) : (
                          <p>Nothing yet.</p>
                        )}
                        {x.link3 !== '' ? (
                          <a href={x.link3} target='_blank'>
                            <p className="text-white underline underline-offset-1 truncate">
                              {x.link3}
                            </p>
                          </a>
                        ) : (
                          <p>Nothing yet.</p>
                        )}
                        {x.link4 !== '' ? (
                          <a href={x.link4} target='_blank'>
                            <p className="text-white underline underline-offset-1 truncate">
                              {x.link4}
                            </p>
                          </a>
                        ) : (
                          <p>Nothing yet.</p>
                        )}
                        {x.link5 !== '' ? (
                          <a href={x.link5} target='_blank'>
                            <p className="text-white underline underline-offset-1 truncate">
                              {x.link5}
                            </p>
                          </a>
                        ) : (
                          <p>Nothing yet.</p>
                        )}
                        <p className="text-[#00CDB7]">$</p>
                      </div>
                      <div
                        className="radial-progress bg-[black] text-[#00CDB7] border-4 border-[black]"
                        style={{
                          '--value': calcProgress(x, 6),
                          '--size': '10rem',
                          '--thickness': '0.75rem',
                        }}
                        role="progressbar"
                      >
                        {/* {calcProgress(record, 6)} */}
                        <div className="checkbox-wrapper grid grid-cols-3 text-[#b9b8c3]">
                          <input
                            style={{ display: 'none' }}
                            checked={x.task1}
                            disabled={true}
                            type="checkbox"
                            id="cbx"
                            className="inp-cbx"
                          />
                          <label htmlFor="cbx" className="cbx">
                            <span>
                              <svg viewBox="0 0 12 9" height="9px" width="12px">
                                <polyline points="1 5 4 8 11 1"></polyline>
                              </svg>
                            </span>
                            <span className="text-lg"></span>
                          </label>

                          <input
                            style={{ display: 'none' }}
                            checked={x.task2}
                            disabled={true}
                            type="checkbox"
                            id="cbx"
                            className="inp-cbx"
                          />
                          <label htmlFor="cbx" className="cbx">
                            <span>
                              <svg viewBox="0 0 12 9" height="9px" width="12px">
                                <polyline points="1 5 4 8 11 1"></polyline>
                              </svg>
                            </span>
                            <span className="text-lg"></span>
                          </label>

                          <input
                            style={{ display: 'none' }}
                            checked={x.task3}
                            disabled={true}
                            type="checkbox"
                            id="cbx"
                            className="inp-cbx"
                          />
                          <label htmlFor="cbx" className="cbx">
                            <span>
                              <svg viewBox="0 0 12 9" height="9px" width="12px">
                                <polyline points="1 5 4 8 11 1"></polyline>
                              </svg>
                            </span>
                            <span className="text-lg"></span>
                          </label>

                          <input
                            style={{ display: 'none' }}
                            checked={x.task4}
                            disabled={true}
                            type="checkbox"
                            id="cbx"
                            className="inp-cbx"
                          />
                          <label htmlFor="cbx" className="cbx">
                            <span>
                              <svg viewBox="0 0 12 9" height="9px" width="12px">
                                <polyline points="1 5 4 8 11 1"></polyline>
                              </svg>
                            </span>
                            <span className="text-lg"></span>
                          </label>

                          <input
                            style={{ display: 'none' }}
                            checked={x.task5}
                            disabled={true}
                            type="checkbox"
                            id="cbx"
                            className="inp-cbx"
                          />
                          <label htmlFor="cbx" className="cbx">
                            <span>
                              <svg viewBox="0 0 12 9" height="9px" width="12px">
                                <polyline points="1 5 4 8 11 1"></polyline>
                              </svg>
                            </span>
                            <span className="text-lg"></span>
                          </label>

                          <input
                            style={{ display: 'none' }}
                            checked={x.task6}
                            disabled={true}
                            type="checkbox"
                            id="cbx"
                            className="inp-cbx"
                          />
                          <label htmlFor="cbx" className="cbx">
                            <span>
                              <svg viewBox="0 0 12 9" height="9px" width="12px">
                                <polyline points="1 5 4 8 11 1"></polyline>
                              </svg>
                            </span>
                            <span className="text-lg"></span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </aside>
                </div>
              ))}
          </div>
        </div>
        {/* <button onClick={handleGoHome}>GO BACK TO HOME</button> */}
      </div>
    </div>
  )
}
