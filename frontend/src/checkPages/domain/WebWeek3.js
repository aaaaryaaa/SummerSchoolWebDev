import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import BaseUrl from '../../BaseUrl'
import arrowdownblack from '../../assets/arrowdownblack.svg'
import arrowupblack from '../../assets/arrowupblack.svg'
import everyoneprog from '../../assets/everyoneprogress.svg'
import MobileSidebar from '../MobileSidebar'
import Sidebar from '../Sidebar'
export default function WebWeek3({ user }) {
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
    // if (obj.task5) n += 1
    // if (obj.task6) n += 1
    return ((n * 100) / num).toFixed(2)
  }

  const fetchWeek = async () => {
    const response = await fetch(BaseUrl + '/api/progress/webweek3')
    const json = await response.json()

    if (response.ok) {
      setWeek(json)
    }
  }

  const fetchRecord = async () => {
    // console.log(user.user.phone_number)
    const response = await fetch(
      BaseUrl + '/api/progress/webweek3/' + user.phone_number
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
      link5,
    }

    const response = await fetch(
      BaseUrl + '/api/progress/webweek3/' + user.phone_number,
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
      toast.success('Task Information Updated')
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
    <div>
      <div className="lg:grid lg:grid-cols-10 w-full">
        <div className="col-span-1 lg:block hidden ">
          <Sidebar domain="webdev" />
        </div>
        <div className="lg:hidden block relative top-20">
          <MobileSidebar domain="webdev" />
        </div>
        <div className="lg:col-span-9 ">
          {true ? (
            <>
              <div className="lg:mt-20 w-full">
                <h1 className=" text-center text-[#00CDB7] lg:text-6xl text-2xl relative top-14 py-10 font-bold">
                  WEB WEEK 3
                </h1>
                <div className="w-full">
                  {record && (
                    <div className="lg:w-full lg:flex lg:flex-row w-fit ml-auto mr-auto">
                      {/* card design */}
                      <div className="cardContainer lg:pl-5">
                        <div className="card flex flex-row justify-center lg:space-x-16">
                          <div className="flex flex-col space-y-4">
                            <aside className=" text-white p-10 rounded-lg w-fit lg:max-w-[40rem] font-mono">
                              <div className="flex lg:flex-row flex-col gap-10 bgfiltercard">
                                <div className=" p-2">
                                  <div className="flex justify-between items-center pb-4">
                                    <div className="flex space-x-2 text-red-500">
                                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    </div>
                                  </div>
                                  <div className="lg:mt-14">
                                    <p className="text-[#00CDB7]">
                                      $ npm install details
                                    </p>
                                    <p className="truncate">
                                      Name: {record.name}
                                    </p>
                                    <p className="">Phone No: {record._id}</p>
                                    <p className="text-[#00CDB7]">
                                      $ npm install links
                                    </p>
                                    {record.link1 !== '' ? (
                                      <a href={record.link1} target="_blank">
                                        <p className="text-white underline underline-offset-1 truncate">
                                          {record.link1}
                                        </p>
                                      </a>
                                    ) : (
                                      <p>Nothing yet.</p>
                                    )}
                                    {record.link2 !== '' ? (
                                      <a href={record.link2} target="_blank">
                                        <p className="text-white underline underline-offset-1 truncate">
                                          {record.link2}
                                        </p>
                                      </a>
                                    ) : (
                                      <p>Nothing yet.</p>
                                    )}
                                    {record.link3 !== '' ? (
                                      <a href={record.link3} target="_blank">
                                        <p className="text-white underline underline-offset-1 truncate">
                                          {record.link3}
                                        </p>
                                      </a>
                                    ) : (
                                      <p>Nothing yet.</p>
                                    )}
                                    {record.link4 !== '' ? (
                                      <a href={record.link4} target="_blank">
                                        <p className="text-white underline underline-offset-1 truncate">
                                          {record.link4}
                                        </p>
                                      </a>
                                    ) : (
                                      <p>Nothing yet.</p>
                                    )}
                                    {record.link5 !== '' ? (
                                      <a href={record.link5} target="_blank">
                                        <p className="text-white underline underline-offset-1 truncate">
                                          {record.link5}
                                        </p>
                                      </a>
                                    ) : (
                                      <p>Nothing yet.</p>
                                    )}
                                    <p className="text-[#00CDB7]">$</p>
                                  </div>
                                </div>
                                <div className="flex flex-col justify-center gap-5">
                                  <div className="flex justify-center text-2xl">
                                    Your Progress
                                  </div>
                                  <div
                                    className="radial-progress bg-[black] text-[#00CDB7] border-4 border-[black]"
                                    style={{
                                      '--value': calcProgress(record, 4),
                                      '--size': '14rem',
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

                                      {/* <input
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
                                </label> */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </aside>
                          </div>
                        </div>
                      </div>
                      {/* card design end */}

                      {/* start of form */}
                      <form
                        onSubmit={handleSubmit}
                        className="w-full lg:p-20 p-5"
                      >
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
                                <div className="flex justify-between align-middle">
                                  Open Task 1 : JS Basics
                                  <img
                                    src={arrowdownblack}
                                    alt=">"
                                    className="w-8 h-8"
                                  />
                                </div>
                              </a>
                              <a id="show1" href="#show1" className="show">
                                <div className="flex justify-between align-middle">
                                  Close Task 1 : JS Basics
                                  <img
                                    src={arrowupblack}
                                    alt="<"
                                    className="w-8 h-8"
                                  />
                                </div>
                              </a>
                              <div className="details">
                                <li>
                                  <a
                                    href="https://youtu.be/PkZNo7MFNFg?si=P_dbyKD8DZTTldQU"
                                    target="_blank"
                                    className="text-[blue]"
                                  >
                                    Full JS Course
                                  </a>
                                </li>
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
                                <div className="flex justify-between align-middle">
                                  Open Task 2 : JS DOM Manipulation
                                  <img
                                    src={arrowdownblack}
                                    alt=">"
                                    className="w-8 h-8"
                                  />
                                </div>
                              </a>
                              <a id="show2" href="#show2" className="show">
                                <div className="flex justify-between align-middle">
                                  Close Task 2 : JS DOM Manipulation
                                  <img
                                    src={arrowupblack}
                                    alt="<"
                                    className="w-8 h-8"
                                  />
                                </div>
                              </a>
                              <div className="details">
                                <li>
                                  <a
                                    href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9gfoKa5la9dsdCNpuey2s-V"
                                    target="_blank"
                                    className="text-[blue]"
                                  >
                                    JS DOM Tutorial
                                  </a>
                                </li>
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
                                <div className="flex justify-between align-middle">
                                  Open Task 3 : JS Objects & Prototypes
                                  <img
                                    src={arrowdownblack}
                                    alt=">"
                                    className="w-8 h-8"
                                  />
                                </div>
                              </a>
                              <a id="show3" href="#show3" className="show">
                                <div className="flex justify-between align-middle">
                                  Close Task 3 : JS Objects & Prototypes
                                  <img
                                    src={arrowupblack}
                                    alt="<"
                                    className="w-8 h-8"
                                  />
                                </div>
                              </a>
                              <div className="details">
                                <li>
                                  <a
                                    href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9i5yvDkJgt60vNVWffpblB7"
                                    target="_blank"
                                    className="text-[blue]"
                                  >
                                    Object Oriented JS
                                  </a>
                                </li>
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
                                <div className="flex justify-between align-middle">
                                  Open Task 4 : Week Submissions
                                  <img
                                    src={arrowdownblack}
                                    alt=">"
                                    className="w-8 h-8"
                                  />
                                </div>
                              </a>
                              <a id="show4" href="#show4" className="show">
                                <div className="flex justify-between align-middle">
                                  Close Task 4 : Week Submissions
                                  <img
                                    src={arrowupblack}
                                    alt="<"
                                    className="w-8 h-8"
                                  />
                                </div>
                              </a>
                              <div className="details">
                                Choose respective project:
                                <li>
                                  <a
                                    href="https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv"
                                    target="_blank"
                                    className="text-[blue]"
                                  >
                                    For e-commerce
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj"
                                    target="_blank"
                                    className="text-[blue]"
                                  >
                                    For personal portfolio
                                  </a>
                                </li>
                                {/* </div>
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
                          <div className='flex justify-between align-middle'>
                            Open Task 5
                            <img src={arrowdownblack} alt=">" className='w-8 h-8' />
                          </div>
                        </a>
                        <a id="show5" href="#show5" className="show">
                          <div className='flex justify-between align-middle'>
                            Close Task 5
                            <img src={arrowupblack} alt="<" className='w-8 h-8' />
                          </div>
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
                          <div className='flex justify-between align-middle'>
                            Open Task 6
                            <img src={arrowdownblack} alt=">" className='w-8 h-8' />
                          </div>
                        </a>
                        <a id="show6" href="#show6" className="show">
                          <div className='flex justify-between align-middle'>
                            Close Task 6
                            <img src={arrowupblack} alt="<" className='w-8 h-8' />
                          </div>
                        </a>
                        <div className="details"> */}
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
                          <div className="centereddiv">
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
              <div className="centereddiv flex flex-row">
                <img src={everyoneprog} alt="everyone's progress" />
                <div className=" bgfiltercard scrollcontainer h-[50rem] overflow-auto m-5 gap-5">
                  {week &&
                    week.map((x) => (
                      <div key={x._id} className="flex flex-col my-1">
                        <aside className="bg-black text-white rounded-lg w-full lg:max-w-[25rem] font-mono p-4">
                          <div className="flex justify-between items-center">
                            <div className="flex space-x-2 text-red-500">
                              <div className="w-3 h-3 rounded-full bg-red-500"></div>
                              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                              <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                          </div>
                          <div className="lg:flex ">
                            <div className="mt-4">
                              <p className="text-[#00CDB7]">
                                $ npm install details
                              </p>
                              <p className="truncate">Name: {x.name}</p>
                              <p className="">Phone No: {x._id}</p>
                              <p className="text-[#00CDB7]">
                                $ npm install links
                              </p>
                              {x.link1 !== '' ? (
                                <a href={x.link1} target="_blank">
                                  <p className="text-white underline underline-offset-1 truncate">
                                    {x.link1}
                                  </p>
                                </a>
                              ) : (
                                <p>Nothing yet.</p>
                              )}
                              {x.link2 !== '' ? (
                                <a href={x.link2} target="_blank">
                                  <p className="text-white underline underline-offset-1 truncate">
                                    {x.link2}
                                  </p>
                                </a>
                              ) : (
                                <p>Nothing yet.</p>
                              )}
                              {x.link3 !== '' ? (
                                <a href={x.link3} target="_blank">
                                  <p className="text-white underline underline-offset-1 truncate">
                                    {x.link3}
                                  </p>
                                </a>
                              ) : (
                                <p>Nothing yet.</p>
                              )}
                              {x.link4 !== '' ? (
                                <a href={x.link4} target="_blank">
                                  <p className="text-white underline underline-offset-1 truncate">
                                    {x.link4}
                                  </p>
                                </a>
                              ) : (
                                <p>Nothing yet.</p>
                              )}
                              {x.link5 !== '' ? (
                                <a href={x.link5} target="_blank">
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
                                '--value': calcProgress(x, 4),
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
                                    <svg
                                      viewBox="0 0 12 9"
                                      height="9px"
                                      width="12px"
                                    >
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
                                    <svg
                                      viewBox="0 0 12 9"
                                      height="9px"
                                      width="12px"
                                    >
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
                                    <svg
                                      viewBox="0 0 12 9"
                                      height="9px"
                                      width="12px"
                                    >
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
                                    <svg
                                      viewBox="0 0 12 9"
                                      height="9px"
                                      width="12px"
                                    >
                                      <polyline points="1 5 4 8 11 1"></polyline>
                                    </svg>
                                  </span>
                                  <span className="text-lg"></span>
                                </label>

                                {/* <input
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
                          </label> */}
                                {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga libero, porro quo tempore facere odio saepe. */}
                              </div>
                            </div>
                          </div>
                        </aside>
                      </div>
                    ))}
                </div>
              </div>
            </>
          ) : (
            <>
              <div>
                <h1 className="h-screen text-center text-[#00CDB7] lg:text-6xl text-2xl relative top-14 py-10 font-bold">
                  COMING SOON...
                </h1>
              </div>
            </>
          )}
        </div>
        <div className="h-20 w-full"></div>
      </div>
      <div className="h-40"></div>
      <div className='lg:block hidden'>
        <div className=" w-auto flex justify-center ml-60">
          <div className="absolute top-0 w-3/5 border-t-2 border-white"></div>
          <p className="z-10 my-5 pt-5 border-t-2 border-white">
            In case you ever foolishly forget, this was made with{' '}
            <span role="img" aria-label="heart">
              ❤️
            </span>{' '}
            by Aarya, Roopanshi, and Nikhilesh
          </p>
        </div>
      </div>
    </div>
  )
}
