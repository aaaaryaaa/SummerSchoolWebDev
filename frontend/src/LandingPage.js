import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "./images/Navigation+hero part1.svg";
import aiml from "./images/aiml.jpg";
import appdev from "./images/appdev.jpg";
import design from "./images/design.jpg";
import dsa from "./images/dsa.jpg";
import webdev from "./images/webdev.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Scroll from "./Scroll";
gsap.registerPlugin(ScrollTrigger);

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
  const main = useRef();



  const handleSignup = () => {
    navigate("/signup");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const checkDomainAccess = (domain) => {
    if (!user) return false;
    if (!user.domains) return false;
    const checkArray = Object.keys(user.domains).filter(
      (domain) => user.domains[domain]
    );
    if (!Array.isArray(checkArray) || checkArray === undefined) {
      return false; // or handle this case as needed
    }
    return checkArray.includes(domain);
  };

  return (
    <div className="bg-black">
      {/* section1 */}
    <Scroll />

      {user ? (
        <div
          className="flex flex-col items-center justify-center space-y-10"
          ref={main}
        >
          <div className="flex flex-wrap justify-center space-x-10 bg-black">
            <Card
              imgSrc={dsa}
              title="DSA"
              description="Master problem-solving with data structures and algorithms."
              link="/dsa"
              onClick={() => navigate("/dsa")}
            />
            <Card
              imgSrc={design}
              title="Design"
              description="Craft visually appealing and user-friendly interfaces with design principles."
              link="/design"
              onClick={() => navigate("/design")}
            />
            <Card
              imgSrc={webdev}
              title="Web Development"
              description="Build dynamic and responsive websites for impactful online experiences."
              link="/webdev"
              onClick={() => navigate("/webdev")}
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
        <div></div>
      )}
    </div>
  );
};

export default LandingPage;
