// src/components/LandingPage.js
import React from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "./images/Navigation+hero part1.svg";
import curvyvector from "./images/Vector 2.svg";
import css from "./images/icons8-css.svg";
import html from "./images/icons8-html.svg";
import js from "./images/js.svg";
import react from "./images/Ellipse 2.svg";
import separator from "./images/Rectangle 29.png";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/signup");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="-mt-24">
      {/* section1 */}
      <div className="flex justify-center items-center h-screen relative">
        <img
          src={backgroundImage}
          style={{ width: "100%", height: "70%", objectFit: "cover" }}
          alt="background"
        />
        <h1 className="absolute text-7xl font-bold text-white pb-32">
          TRACK YOUR PROGRESS NOW{" "}
        </h1>
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="flex flex-row justify-center items-center space-x-4 mt-60">
            <button
              onClick={handleSignup}
              className="px-6 py-3 bg-yellow-500 text-white rounded shadow-2xl hover:bg-green-700 transition duration-300 "
            >
              Signup
            </button>
            <button
              onClick={handleLogin}
              className="px-6 py-3 bg-yellow-500 text-white rounded hover:bg-blue-600 transition duration-300"
            >
              Login
            </button>
          </div>
        </div>
      </div>
      {/* Separator */}
      <div className="flex h-20 bg-gradient-to-b from-slate-950 to-black -mt-32">
        {/* Adjust height and gradient direction as needed */}
      </div>
      {/* section2 */}
      <div className="flex justify-center items-center h-screen relative bg-black">
        <div className="absolute inset-0 flex justify-center items-center ">
          <div className="flex flex-row justify-center items-center space-x-40 -mt-24 ">
            <img src={css} style={{ width: "200px", height: "200px" }}></img>
            <img src={html} style={{ width: "200px", height: "200px" }}></img>
            <img src={js} style={{ width: "200px", height: "200px" }}></img>
            <img src={react} style={{ width: "200px", height: "200px" }}></img>
          </div>
        </div>
        <div>
          <img src={curvyvector} className="w-full -mt-48"></img>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
