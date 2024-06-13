import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import crossmark from './assets/crossmark.svg'
import hamburgericon from './assets/hamburgericon.svg'
import istemask from './images/istemask.svg'

export default function Navbar({ user, setUser }) {
  const dropdownRef = useRef(null);
  const navigate = useNavigate()

  const [navOpen, setNavOpen] = useState(false)

  const handleLogout = () => {
    localStorage.removeItem('token')
    setUser(null)
    navigate('/')
  }

  const handleNavOpen = () => {
    setNavOpen(!navOpen)
  }

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setNavOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleWebDev = () => {
    navigate('/webdev')
  }

  const handleAppDev = () => {
    navigate('/appdev')
  }

  const handleAIML = () => {
    navigate('/aiml')
  }

  const handleDSA = () => {
    navigate('/dsa')
  }

  const handleDesign = () => {
    navigate('/design')
  }

  const handleGoHome = () => {
    navigate('/')
  }

  return (
    <div className="fixed z-10 w-full">
      {user ? (
        <nav className=" border-gray-200 dark:bg-transaprent lg:h-20">
          {' '}
          {/*absolute inset-0 z-10*/}
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img src={istemask} className="h-8" alt="ISTE LOGO" />
              <span className="lg:block hidden self-center lg:text-2xl text-lg font-semibold whitespace-nowrap dark:text-white">
                ISTE TrackSpace
              </span>
            </a>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <button
                type="button"
                onClick={handleLogout}
                className="text-white focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              >
                Logout
              </button>
              <button
                onClick={handleNavOpen}
                data-collapse-toggle="navbar-cta"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-cta"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <>
                {!navOpen && (
                  <>
                  <img src={hamburgericon} alt='ham' />
                  </>
                )}
                {navOpen && (
                  <>
                  <img src={crossmark} alt='cross' />
                  </>
                )}
                </>
              </button>
            </div>
            <div
              className="items-center justify-between hidden w-full sm:flex md:w-auto md:order-1"
              id="navbar-cta"
            >
              <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                <li>
                  <button
                    onClick={handleGoHome}
                    className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleWebDev}
                    className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Web Dev
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleAppDev}
                    className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    App Dev
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleAIML}
                    className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    AIML
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleDSA}
                    className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    DSA
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleDesign}
                    className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Design
                  </button>
                </li>
              </ul>
            </div>
            <div className="md:hidden lg:hidden w-full">
              {navOpen ? (
                <div className="w-full bg-transparent h-fit" ref={dropdownRef}>
                  <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                    <li>
                      <button
                        onClick={handleGoHome}
                        className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      >
                        Home
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleWebDev}
                        className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      >
                        Web Dev
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleAppDev}
                        className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      >
                        App Dev
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleAIML}
                        className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      >
                        AIML
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleDSA}
                        className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      >
                        DSA
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleDesign}
                        className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      >
                        Design
                      </button>
                    </li>
                  </ul>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </nav>
      ) : (
        <div></div>
      )}
    </div>
  )
}
