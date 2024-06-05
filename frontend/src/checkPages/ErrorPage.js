
import React from "react";
import { Link } from "react-router-dom";
import niggesh from "../assets/niggesh1.jpg";
const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 absolute inset-0 z-10">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-600">404</h1>
        <p className="text-2xl mt-4">
          Oops! Looks like you foolishly stumbled upon a page that doesn't
          exist.<br></br>
          Smh 🤦‍♂️<br></br>
          Niggesh here is working to fix it.
          <img
            src={niggesh}
            style={{ width: "200px", height: "300px", display: "block", margin: "auto"}}
            alt="niggesh"
          ></img>
          Meanwhile, you can go back home.
        </p>
        <Link to="/home" className="btn btn-primary mt-6">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
