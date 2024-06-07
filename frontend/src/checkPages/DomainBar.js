import React from "react";
import { Link, useNavigate } from "react-router-dom";

const DomainBar = ({ selectedDomains }) => {
  const navigate = useNavigate();
  const allDomains = [
    "Home",
    "DSA",
    "AI-ML",
    "Web Development",
    "App Development",
    "Design",
  ];

  const handleDomainClick = (domain) => {
    if (domain === "Home" || selectedDomains.includes(domain)) {
      navigate(`/${domain.replace(" ", "").toLowerCase()}`);
    } else {
      navigate("/unselected");
    }
  };

  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        {allDomains.map((domain) => (
          <li
            key={domain}
            className="text-white cursor-pointer"
            onClick={() => handleDomainClick(domain)}
          >
            {domain}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DomainBar;
