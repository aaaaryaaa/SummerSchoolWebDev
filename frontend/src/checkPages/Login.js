// src/components/Login.js
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import BaseUrl from '../BaseUrl';

const Login = ({ setUser, setSelectedDomains }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    phone_number: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        BaseUrl + "/api/auth/login",
        formData
      );

      console.log(response.data); // Log the entire response for debugging

      const user = response.data.user; // Assuming the server returns the user object
      if (!user) {
        throw new Error("User data is not present in the response");
      }

      setUser(user);

      if (!user.domains) {
        throw new Error("Domains are not present in the user data");
      }

      setSelectedDomains(user.domains); // Assuming the user object contains selected domains

      toast.success("Login successful");
      navigate("/");
    } catch (error) {
      console.error(error); // Log the error for debugging
      toast.error(error.response?.data?.error || "An error occurred");
      setLoading(false);
    }
  };

  const handleGoSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="relative h-screen">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-700 bg-opacity-50 rounded-md p-8 w-full h-auto 2xl:w-2/5 2xl:h-3/5 lg:h-2/3 lg:w-3/5 xl:w-1/2 sm:h-3/5 sm:w-3/5 md:w-2/3 md:h-2/3">
        <h2 className="text-2xl font-bold text-center mb-6 text-white text-[43.89px] font-['Archivo'] leading-[65.83px]">
          Login
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 flex flex-col sm:flex-row items-center">
            <div className="text-white sm:w-52 text-[1.5rem] sm:text-[2rem] md:text-[1.5rem] lg:text-[2rem] font-normal font-['Ruda'] leading-[2rem] sm:leading-[4rem] px-6 ml-0 sm:ml-8 mb-2 sm:mb-0 2xl:px-6 2xl:ml-8 lg:px-6 lg:ml-2 xl:ml-14 md:ml-2 md:px-2">
              Phone No :
            </div>
            <input
              type="text"
              placeholder="Type here"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              className="input input-ghost w-full max-w-xs border-solid border-b-2 border-b-gray-300 px-6"
            />
          </div>
          <div className="mb-4 flex flex-col sm:flex-row items-center">
            <div className="text-white sm:w-52 text-[1.5rem] sm:text-[2rem] md:text-[1.5rem] lg:text-[2rem] font-normal font-['Ruda'] leading-[2rem] sm:leading-[4rem] px-6 ml-0 sm:ml-8 mb-2 sm:mb-0 2xl:px-6 2xl:ml-8 lg:px-6 lg:ml-2 xl:ml-14 md:ml-2 md:px-2">
              Password :
            </div>
            <input
              type="password"
              placeholder="Type here"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="input input-ghost w-full max-w-xs border-solid border-b-2 border-b-gray-300 pl-6 pr-6"
            />
          </div>
          <button className="w-full sm:w-[150px] h-[44px] bg-amber-300 rounded-[35px] shadow border border-rose-50 mt-6 text-black text-[1.5rem] font-bold font-['Archivo'] lg:ml-52 lg:mt-5 xl:ml-64 md:ml-36">
            Login
          </button>
        </form>
        <div className="mt-6 text-center text-white">
          Don't have an account?{" |   "}
          <button
            type="button"
            onClick={handleGoSignup}
            className="text-blue-400 hover:underline"
          >
            Signup
          </button>
        </div>
      </div>
      {loading && ( // Conditionally render loading component
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <span className="loading loading-ring loading-lg"></span>
          </div>
        )}
    </div>
  );
};

export default Login;
