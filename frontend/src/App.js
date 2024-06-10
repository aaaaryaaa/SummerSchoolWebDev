import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import LandingPage from "./LandingPage";
import Navbar from "./Navbar";
import AIML from "./checkPages/AIML";
import Appdev from "./checkPages/Appdev";
import Design from "./checkPages/Design";
import Dsa from "./checkPages/Dsa";
import ErrorPage from "./checkPages/ErrorPage";
import Footer from "./checkPages/Footer";
import Login from "./checkPages/Login";
import Signup from "./checkPages/Signup";
import Unselected from "./checkPages/Unselected";
import WebDev from "./checkPages/WebDev";
import AIMLWeek1 from "./checkPages/domain/AIMLWeek1";
import AIMLWeek2 from "./checkPages/domain/AIMLWeek2";
import AIMLWeek3 from "./checkPages/domain/AIMLWeek3";
import AIMLWeek4 from "./checkPages/domain/AIMLWeek4";
import AppWeek1 from "./checkPages/domain/AppWeek1";
import AppWeek2 from "./checkPages/domain/AppWeek2";
import AppWeek3 from "./checkPages/domain/AppWeek3";
import AppWeek4 from "./checkPages/domain/AppWeek4";
import DesignWeek1 from "./checkPages/domain/DesignWeek1";
import DesignWeek2 from "./checkPages/domain/DesignWeek2";
import DesignWeek3 from "./checkPages/domain/DesignWeek3";
import DesignWeek4 from "./checkPages/domain/DesignWeek4";
import DsaWeek1 from "./checkPages/domain/DsaWeek1";
import DsaWeek2 from "./checkPages/domain/DsaWeek2";
import DsaWeek3 from "./checkPages/domain/DsaWeek3";
import DsaWeek4 from "./checkPages/domain/DsaWeek4";
import DsaWeek5 from "./checkPages/domain/DsaWeek5";
import DsaWeek6 from "./checkPages/domain/DsaWeek6";
import WebWeek1 from "./checkPages/domain/WebWeek1";
import WebWeek2 from "./checkPages/domain/WebWeek2";
import WebWeek3 from "./checkPages/domain/WebWeek3";
import WebWeek4 from "./checkPages/domain/WebWeek4";
import WebWeek5 from "./checkPages/domain/WebWeek5";
function App() {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user')
    return savedUser ? JSON.parse(savedUser) : null
  })
  const [selectedDomains, setSelectedDomains] = useState(() => {
    const savedDomains = localStorage.getItem('selectedDomains')
    return savedDomains ? JSON.parse(savedDomains) : []
  })

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user))
    } else {
      localStorage.removeItem('user')
    }
  }, [user])

  useEffect(() => {
    if (selectedDomains.length > 0) {
      localStorage.setItem('selectedDomains', JSON.stringify(selectedDomains))
    } else {
      localStorage.removeItem('selectedDomains')
    }
  }, [selectedDomains])
  const checkDomainAccess = (domain) => {
    if (!user) return false
    if (!user.domains) return false
    const checkArray = Object.keys(user.domains).filter(
      (domain) => user.domains[domain]
    )
    if (!Array.isArray(checkArray) || checkArray === undefined) {
      return false // or handle this case as needed
    }
    return checkArray.includes(domain)
  }

  return (
    <div className='w-full'>
      <Router>
        <Navbar
          user={user}
          setUser={setUser}
          selectedDomains={selectedDomains}
        />
        <Routes>
          <Route path="/" element={<LandingPage user={user} />} />
          <Route path="/footer" element={<Footer />} />
          <Route
            path="/login"
            element={
              <Login
                setUser={setUser}
                setSelectedDomains={setSelectedDomains}
              />
            }
          />
          <Route path="/signup" element={<Signup setUser={setUser} />} />
          {/* <Route path="/home" element={<Homepage user={user} />} /> */}
          <Route
            path="/dsa"
            element={
              checkDomainAccess('DSA') ? <Dsa user={user} /> : <Unselected />
            }
          />
          <Route
            path="/dsa/week1"
            element={
              checkDomainAccess('DSA') ? (
                <DsaWeek1 user={user} />
              ) : (
                <Unselected />
              )
            }
          />
          <Route
            path="/dsa/week2"
            element={
              checkDomainAccess('DSA') ? (
                <DsaWeek2 user={user} />
              ) : (
                <Unselected />
              )
            }
          />
          <Route
            path="/dsa/week3"
            element={
              checkDomainAccess('DSA') ? (
                <DsaWeek3 user={user} />
              ) : (
                <Unselected />
              )
            }
          />
          <Route
            path="/dsa/week4"
            element={
              checkDomainAccess('DSA') ? (
                <DsaWeek4 user={user} />
              ) : (
                <Unselected />
              )
            }
          />
          <Route
            path="/dsa/week5"
            element={
              checkDomainAccess('DSA') ? (
                <DsaWeek5 user={user} />
              ) : (
                <Unselected />
              )
            }
          />
          <Route
            path="/dsa/week6"
            element={
              checkDomainAccess('DSA') ? (
                <DsaWeek6 user={user} />
              ) : (
                <Unselected />
              )
            }
          />
          <Route
            path="/aiml"
            element={
              checkDomainAccess('AI-ML') ? <AIML user={user} /> : <Unselected />
            }
          />
          <Route
            path="/aiml/week1"
            element={
              checkDomainAccess('AI-ML') ? (
                <AIMLWeek1 user={user} />
              ) : (
                <Unselected />
              )
            }
          />
          <Route
            path="/aiml/week2"
            element={
              checkDomainAccess('AI-ML') ? (
                <AIMLWeek2 user={user} />
              ) : (
                <Unselected />
              )
            }
          />
          <Route
            path="/aiml/week3"
            element={
              checkDomainAccess('AI-ML') ? (
                <AIMLWeek3 user={user} />
              ) : (
                <Unselected />
              )
            }
          />
          <Route
            path="/aiml/week4"
            element={
              checkDomainAccess('AI-ML') ? (
                <AIMLWeek4 user={user} />
              ) : (
                <Unselected />
              )
            }
          />
          <Route
            path="/webdev"
            element={
              checkDomainAccess('Web Development') ? (
                <WebDev user={user} />
              ) : (
                <Unselected />
              )
            }
          />
          <Route
            path="/webdev/week1"
            element={
              checkDomainAccess('Web Development') ? (
                <WebWeek1 user={user} />
              ) : (
                <Unselected />
              )
            }
          />
          <Route
            path="/webdev/week2"
            element={
              checkDomainAccess('Web Development') ? (
                <WebWeek2 user={user} />
              ) : (
                <Unselected />
              )
            }
          />
          <Route
            path="/webdev/week3"
            element={
              checkDomainAccess('Web Development') ? (
                <WebWeek3 user={user} />
              ) : (
                <Unselected />
              )
            }
          />
          <Route
            path="/webdev/week4"
            element={
              checkDomainAccess('Web Development') ? (
                <WebWeek4 user={user} />
              ) : (
                <Unselected />
              )
            }
          />
          <Route
            path="/webdev/week5"
            element={
              checkDomainAccess('Web Development') ? (
                <WebWeek5 user={user} />
              ) : (
                <Unselected />
              )
            }
          />
          <Route
            path="/appdev"
            element={
              checkDomainAccess('App Development') ? (
                <Appdev user={user} />
              ) : (
                <Unselected />
              )
            }
          />
          <Route
            path="/appdev/week1"
            element={
              checkDomainAccess('App Development') ? (
                <AppWeek1 user={user} />
              ) : (
                <Unselected />
              )
            }
          />
          <Route
            path="/appdev/week2"
            element={
              checkDomainAccess('App Development') ? (
                <AppWeek2 user={user} />
              ) : (
                <Unselected />
              )
            }
          />
          <Route
            path="/appdev/week3"
            element={
              checkDomainAccess('App Development') ? (
                <AppWeek3 user={user} />
              ) : (
                <Unselected />
              )
            }
          />
          <Route
            path="/appdev/week4"
            element={
              checkDomainAccess('App Development') ? (
                <AppWeek4 user={user} />
              ) : (
                <Unselected />
              )
            }
          />
          <Route
            path="/design"
            element={
              checkDomainAccess('Design') ? (
                <Design user={user} />
              ) : (
                <Unselected />
              )
            }
          />
          <Route
            path="/design/week1"
            element={
              checkDomainAccess('Design') ? (
                <DesignWeek1 user={user} />
              ) : (
                <Unselected />
              )
            }
          />
          <Route
            path="/design/week2"
            element={
              checkDomainAccess('Design') ? (
                <DesignWeek2 user={user} />
              ) : (
                <Unselected />
              )
            }
          />
          <Route
            path="/design/week3"
            element={
              checkDomainAccess('Design') ? (
                <DesignWeek3 user={user} />
              ) : (
                <Unselected />
              )
            }
          />
          <Route
            path="/design/week4"
            element={
              checkDomainAccess('Design') ? (
                <DesignWeek4 user={user} />
              ) : (
                <Unselected />
              )
            }
          />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  )
}

export default App
