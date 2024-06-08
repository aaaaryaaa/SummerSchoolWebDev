import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import background from "../assets/background1.jpg";

const Signup = ({ setUser }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    phone_number: "",
    password: "",
    name: "",
    domains: {
      "DSA": false,
      "AI-ML": false,
      "Web Development": false,
      "App Development": false,
      "Design": false,
    },
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({
        ...formData,
        domains: {
          ...formData.domains,
          [value]: checked,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const selectedDomains = Object.keys(formData.domains).filter(
      (domain) => formData.domains[domain]
    );

    if (selectedDomains.length < 1 || selectedDomains.length > 3) {
      toast.error("Please select between 1 and 3 domains");
      return;
    }

    const dataToSubmit = {
      ...formData,
      domains: selectedDomains,
    };

    try {
      const response = await axios.post(
        "http://localhost:4000/api/auth/signup",
        dataToSubmit
      );
      console.log(dataToSubmit);
      toast.success(response.data.message);
      navigate("/home");
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };

  const handleGoLogin = () => {
    navigate("/login");
  };

  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-md"
        style={{
          backgroundImage: `url(${background})`,
        }}
      ></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-700 bg-opacity-50 rounded-md p-8 w-full h-auto md:w-4/5 md:h-3/4 lg:w-2/3 lg:h-3/4 xl:w-1/2 xl:h-3/4 2xl:p-8 2xl:w-2/5 2xl:h-2/3">
        <h2 className="text-2xl font-bold text-center mb-6 text-white text-[43.89px] font-['Archivo'] leading-[65.83px]">
          Signup
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4  flex flex-col sm:flex-row items-center">
            <div className="text-white sm:w-52 text-[1.5rem] sm:text-[2rem] lg:text-[2rem] font-normal font-['Ruda'] leading-[2rem] sm:leading-[4rem] md:px-6 md:ml-4 lg:ml-10 2xl:px-6 ">
              Phone No :
            </div>
            <input
              type="text"
              name="phone_number"
              placeholder="Type here"
              value={formData.phone_number}
              onChange={handleChange}
              className="input input-ghost w-full max-w-xs border-solid border-b-2 border-b-gray-300 px-6"
            />
          </div>
          <div className="mb-4 flex flex-col sm:flex-row items-center">
            <div className="text-white sm:w-52 text-[1.5rem] sm:text-[2rem] lg:text-[2rem] font-normal font-['Ruda'] leading-[2rem] sm:leading-[4rem] md:px-6 md:ml-4 lg:ml-10 2xl:px-6">
              Password :
            </div>
            <input
              type="password"
              name="password"
              placeholder="Type here"
              value={formData.password}
              onChange={handleChange}
              className="input input-ghost w-full max-w-xs border-solid border-b-2 border-b-gray-300 px-6"
            />
          </div>
          <div className="mb-4 flex flex-col sm:flex-row items-center">
            <div className="text-white sm:w-52 text-[1.5rem] sm:text-[2rem] lg:text-[2rem] font-normal font-['Ruda'] leading-[2rem] sm:leading-[4rem] md:px-6 md:ml-4 lg:ml-10 2xl:px-6">
              Full Name :
            </div>
            <input
              type="text"
              name="name"
              placeholder="Type here"
              value={formData.name}
              onChange={handleChange}
              className="input input-ghost w-full max-w-xs border-solid border-b-2 border-b-gray-300 px-6"
            />
          </div>
          <div className="mb-4 flex flex-col text-white text-[30.89px] font-normal font-['Ruda'] leading-[65.83px] px-6">
            Domains:
            <div className="ml-4">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="domains"
                  value="DSA"
                  checked={formData.domains["DSA"]}
                  onChange={handleChange}
                />
                <span>DSA</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="domains"
                  value="AI-ML"
                  checked={formData.domains["AI-ML"]}
                  onChange={handleChange}
                />
                <span>AI-ML</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="domains"
                  value="Web Development"
                  checked={formData.domains["Web Development"]}
                  onChange={handleChange}
                />
                <span>Web Development</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="domains"
                  value="App Development"
                  checked={formData.domains["App Development"]}
                  onChange={handleChange}
                />
                <span>App Development</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="domains"
                  value="Design"
                  checked={formData.domains["Design"]}
                  onChange={handleChange}
                />
                <span>Design</span>
              </label>
            </div>
          </div>
          <button className="w-full sm:w-[150px] h-[44px] bg-amber-300 rounded-[35px] shadow border border-rose-50 mt-6 text-black text-[1.5rem] font-bold font-['Archivo'] lg:ml-60 lg:mt-5 xl:ml-64 md:ml-52">
            Signup
          </button>
        </form>
        <div className="mt-6 text-center text-white">
          Already have an account?{" "}
          <button
            onClick={handleGoLogin}
            className="text-blue-400 hover:underline"
          >
            Login
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;
