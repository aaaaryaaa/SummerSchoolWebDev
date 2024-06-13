import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import crossmark from './assets/crossmark.svg';
import hamburgericon from './assets/hamburgericon.svg';
import logo from './assets/logo.jpeg';

const NewNav = ({ user, setUser }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const navigate = useNavigate()

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem('token')
        setUser(null)
        navigate('/')
    }

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
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
        <div>
            {user && (
                <nav className="bgfiltercard  p-4 fixed z-10 w-full">
                    <div className="container mx-auto flex justify-between items-center">
                        <div>
                            <a
                                href="/"
                                className="flex items-center space-x-3 rtl:space-x-reverse"
                            >
                                <img src={logo} className="h-10" alt="ISTE LOGO" />
                                <span className="lg:block hidden self-center lg:text-2xl text-lg font-semibold whitespace-nowrap dark:text-white">
                                    ISTE TrackSpace
                                </span>
                            </a>
                        </div>
                        <div className="flex items-center">
                            <div className="hidden md:flex space-x-10">
                                <a onClick={handleGoHome} className="text-white cursor-pointer hover:text-[#00CDB7] font-extrabold">Home</a>
                                <a onClick={handleWebDev} className="text-white cursor-pointer hover:text-[#00CDB7] font-extrabold">WebDev</a>
                                <a onClick={handleAppDev} className="text-white cursor-pointer hover:text-[#00CDB7] font-extrabold">AppDev</a>
                                <a onClick={handleAIML} className="text-white cursor-pointer hover:text-[#00CDB7] font-extrabold">AIML</a>
                                <a onClick={handleDSA} className="text-white cursor-pointer hover:text-[#00CDB7] font-extrabold">DSA</a>
                                <a onClick={handleDesign} className="text-white cursor-pointer hover:text-[#00CDB7] font-extrabold">Design</a>
                            </div>
                            <div className="md:hidden">
                                <button
                                    onClick={handleToggle}
                                    className="text-white focus:outline-none bgfiltercard"
                                >
                                    <>
                                        {!isOpen && (
                                            <>
                                                <img src={hamburgericon} alt='ham' className='h-3 px-2' />
                                            </>
                                        )}
                                        {isOpen && (
                                            <>
                                                <img src={crossmark} alt='cross' className='h-3 px-2'/>
                                            </>
                                        )}
                                    </>
                                </button>
                            </div>
                        </div>
                        <div className="text-red-600 border border-red-600 p-2 rounded-lg">
                            <a onClick={handleLogout} className="text-red-600 font-extrabold cursor-pointer">Logout</a>
                        </div>
                    </div>
                    {isOpen && (
                        <div
                            className="md:hidden absolute top-20 left-0 right-0 mynav bgfiltercard bg-[black] space-y-4 p-4 text-white flex flex-col"
                            ref={dropdownRef}
                        >
                            <a onClick={handleGoHome} className="cursor-pointer text-[#00CDB7] font-extrabold">Home</a>
                            <a onClick={handleWebDev} className="cursor-pointer hover:text-[#00CDB7] font-extrabold">WebDev</a>
                            <a onClick={handleAppDev} className="cursor-pointer hover:text-[#00CDB7] font-extrabold">AppDev</a>
                            <a onClick={handleAIML} className="cursor-pointer hover:text-[#00CDB7] font-extrabold">AIML</a>
                            <a onClick={handleDSA} className="cursor-pointer hover:text-[#00CDB7] font-extrabold">DSA</a>
                            <a onClick={handleDesign} className="cursor-pointer hover:text-[#00CDB7] font-extrabold">Design</a>
                        </div>
                    )}
                </nav>
            )}
        </div>
    );
};

export default NewNav;
