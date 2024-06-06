import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import istemask from './images/istemask.svg';

export default function Navbar({ user, setUser }) {
    const navigate = useNavigate()

    const [navOpen, setNavOpen] = useState(false)

    const handleLogout = () => {
        localStorage.removeItem("token");
        setUser(null);
        navigate("/");
    };

    const handleNavOpen = () => {
        setNavOpen(!navOpen)
    }

    const handleWeek1 = () => {
        navigate("/week1")
    }

    const handleWeek2 = () => {
        navigate("/week2")
    }

    const handleWeek3 = () => {
        navigate("/week3")
    }

    const handleWeek4 = () => {
        navigate("/week4")
    }

    const handleGoHome = () => {
        navigate("/");
      }

    return (


        <nav class=" border-gray-200 dark:bg-transaprent">

            {user ? (
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={istemask} class="h-8" alt="Flowbite Logo" />
                        <span class="self-center lg:text-2xl text-lg font-semibold whitespace-nowrap dark:text-white">ISTE TrackSpace</span>
                    </a>
                    <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button type="button" onClick={handleLogout} class="text-white focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Logout</button>
                        <button onClick={handleNavOpen} data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                        <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                            <li>
                                <button onClick={handleGoHome} class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</button>
                            </li>
                            <li>
                                <button onClick={handleWeek1} class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Week 1</button>
                            </li>
                            <li>
                                <button onClick={handleWeek2} class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Week 2</button>
                            </li>
                            <li>
                                <button onClick={handleWeek3} class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Week 3</button>
                            </li>
                            <li>
                                <button onClick={handleWeek4} class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Week 4</button>
                            </li>
                        </ul>
                    </div>
                    <div className='lg:hidden w-full'>
                        {navOpen ? (
                            <div className='w-full bg-transparent h-fit'>
                                <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                                    <li>
                                        <button onClick={handleGoHome} class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</button>
                                    </li>
                                    <li>
                                        <button onClick={handleWeek1} class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Week 1</button>
                                    </li>
                                    <li>
                                        <button onClick={handleWeek2} class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Week 2</button>
                                    </li>
                                    <li>
                                        <button onClick={handleWeek3} class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Week 3</button>
                                    </li>
                                    <li>
                                        <button onClick={handleWeek4} class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Week 4</button>
                                    </li>
                                </ul>
                            </div>
                        ) : (
                            <div></div>
                        )}
                    </div>
                </div>
            ) : (
                <div>

                </div>
            )}
        </nav>

    )
}
