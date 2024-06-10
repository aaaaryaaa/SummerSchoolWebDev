import React from "react";

const Footer = ({ handleMeetTheTeam }) => {
  return (
    <footer className="w-full py-4 bg-gray-800 text-white flex flex-col items-center space-y-4">
      <button
        onClick={handleMeetTheTeam}
        className="px-6 py-2 my-72 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
      >
        Meet the Team
      </button>
      <div className="flex space-x-4">
        <a
          href="https://www.instagram.com/istemmanipal/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          Instagram
        </a>
        <a
          href="https://www.linkedin.com/company/istemmanipal/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          LinkedIn
        </a>
        <a
          href="mailto:contact@istemmanipal.com"
          className="hover:text-gray-400"
        >
          Email
        </a>
      </div>
    </footer>
  );
};

export default Footer;
