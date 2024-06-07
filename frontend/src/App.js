import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LandingPage from "./LandingPage";
import Navbar from "./Navbar";
import ErrorPage from "./checkPages/ErrorPage";
import Login from "./checkPages/Login";
import Signup from "./checkPages/Signup";
import Homepage from "./checkPages/Homepage";
import Dsa from "./checkPages/Dsa";
import AIML from "./checkPages/AIML";
import WebDev from "./checkPages/WebDev";
import Appdev from "./checkPages/Appdev";
import Design from "./checkPages/Design";
import Unselected from "./checkPages/Unselected";

function App() {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [selectedDomains, setSelectedDomains] = useState(() => {
    const savedDomains = localStorage.getItem("selectedDomains");
    return savedDomains ? JSON.parse(savedDomains) : [];
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  useEffect(() => {
    if (selectedDomains.length > 0) {
      localStorage.setItem("selectedDomains", JSON.stringify(selectedDomains));
    } else {
      localStorage.removeItem("selectedDomains");
    }
  }, [selectedDomains]);
  const checkDomainAccess = (domain) => {
    if (!Array.isArray(selectedDomains) || selectedDomains === undefined) {
      return false; // or handle this case as needed
    }
    return selectedDomains.includes(domain);
  };

  return (
    <div>
      <Router>
        <Navbar
          user={user}
          setUser={setUser}
          selectedDomains={selectedDomains}
        />
        <Routes>
          <Route path="/home" element={<LandingPage user={user} />} />
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
          <Route path="/home" element={<Homepage user={user} />} />
          <Route
            path="/dsa"
            element={
              checkDomainAccess("DSA") ? <Dsa user={user} /> : <Unselected />
            }
          />
          <Route
            path="/aiml"
            element={
              checkDomainAccess("AI-ML") ? <AIML user={user} /> : <Unselected />
            }
          />
          <Route
            path="/webdev"
            element={
              checkDomainAccess("Web Development") ? (
                <WebDev user={user} />
              ) : (
                <Unselected />
              )
            }
          />
          <Route
            path="/appdev"
            element={
              checkDomainAccess("App Development") ? (
                <Appdev user={user} />
              ) : (
                <Unselected />
              )
            }
          />
          <Route
            path="/design"
            element={
              checkDomainAccess("Design") ? (
                <Design user={user} />
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
  );
}

export default App;
