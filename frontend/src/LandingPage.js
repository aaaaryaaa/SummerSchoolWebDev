// src/components/LandingPage.js
import React from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "./images/Navigation+hero part1.svg";
import aiml from "./images/aiml.jpg";
import appdev from "./images/appdev.jpg";
import design from "./images/design.jpg";
import dsa from "./images/dsa.jpg";
import webdev from "./images/webdev.jpg";
const Card = ({ imgSrc, title, description, link }) => (
  <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 m-5">
    <div className="h-96 w-72">
      <img
        className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
        src={imgSrc}
        alt={title}
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
    <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
      <h1 className="font-dmserif text-2xl font-bold mb-6 text-white">
        {title}
      </h1>
      <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        {description}
      </p>
    </div>
  </div>
);
const LandingPage = ({ user }) => {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/signup");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="bg-black">
      {/* section1 */}
      <div className="flex justify-center items-center h-screen relative">
        <img
          src={backgroundImage}
          style={{ width: "130%", height: "100%", objectFit: "cover" }}
          alt="background"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
        <h1 className="absolute text-7xl font-bold text-white">
          TRACK YOUR PROGRESS NOW{" "}
        </h1>
        <div className="absolute inset-0 flex justify-center items-center">
          {user ? (
            <div></div>
          ) : (
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
          )}
        </div>
      </div>

      {user ? (
        <div className="flex flex-col items-center justify-center space-y-10">
          <div className="flex flex-wrap justify-center space-x-10">
            <Card
              imgSrc={dsa}
              title="DSA"
              description="Master problem-solving with data structures and algorithms."
              link="/dsa"
            />
            <Card
              imgSrc={design}
              title="Design"
              description="Craft visually appealing and user-friendly interfaces with design principles."
              link="/design"
            />
            <Card
              imgSrc={webdev}
              title="Web Development"
              description="Build dynamic and responsive websites for impactful online experiences."
              link="/webdev"
            />
          </div>
          <div className="flex flex-wrap justify-center space-x-10">
            <Card
              imgSrc={appdev}
              title="App Development"
              description="Create engaging mobile apps for iOS and Android platforms."
              link="/appdev"
            />
            <Card
              imgSrc={aiml}
              title="AI & ML"
              description="Explore the frontier of AI and ML for intelligent systems."
              link="/aiml"
            />
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <Card
            imgSrc={dsa}
            title="Data Structures & Algorithms"
            description="Master problem-solving with data structures and algorithms."
            link="/dsa"
          />
          <Card
            imgSrc={design}
            title="Design"
            description="Craft visually appealing and user-friendly interfaces with design principles."
            link="/design"
          />
          <Card
            imgSrc={webdev}
            title="Web Development"
            description="Build dynamic and responsive websites for impactful online experiences."
            link="/webdev"
          />
          <Card
            imgSrc={appdev}
            title="App Development"
            description="Create engaging mobile apps for iOS and Android platforms."
            link="/appdev"
          />
          <Card
            imgSrc={aiml}
            title="AI & ML"
            description="Explore the frontier of AI and ML for intelligent systems."
            link="/aiml"
          />
        </div>
      )}
    </div>
  );
};
export default LandingPage;
