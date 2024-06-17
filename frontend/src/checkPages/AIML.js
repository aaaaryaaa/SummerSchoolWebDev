import React from 'react'
import { useNavigate } from 'react-router-dom'
import MobileSidebar from './MobileSidebar'
import Sidebar from './Sidebar'

const AIML = () => {
  const navigate = useNavigate()

  const handleWeekNavigation = (week) => {
    navigate(`/aiml/week${week}`)
  }

  return (
    <div className="flex flex-col bg-black">
      <div className="lg:block hidden ">
        <Sidebar domain="aiml" />
      </div>
      <div className="lg:hidden block relative top-20">
        <MobileSidebar domain="aiml" />
      </div>
      <div className="flex-1  p-4 mt-24">
        <h1 className="lg:text-6xl text-3xl font-bold text-center text-white lg:ml-52">
          Welcome to AI-ML Domain
        </h1>
        {/* DaisyUI Timeline Component */}
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical flex-1 lg:ml-64 p-4 lg:mt-32">
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <time className="font-mono italic">Week 1</time>
              <div className="text-lg font-black"> Python fundamentals</div>
              Learning python , numpy and pandas
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic">Week 2</time>
              <div className="text-lg font-black">
                Data Preprocessing and Visualization
              </div>
              Learn how to manipulate and visualize data for Machine Learning
              models
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <time className="font-mono italic">Week 3</time>
              <div className="text-lg font-black">Introduction to ML</div>
              ML fundamentals and linear regression
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic">Week 4</time>
              <div className="text-lg font-black">
                More Supervised Learning algorithms
              </div>
              Learn logistic Regression, SVM, decision trees, etc.
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <time className="font-mono italic">Project Implementation</time>
              <div className="text-lg font-black"> Model Implementation</div>
              Develop your own predictive ML models
            </div>
          </li>
        </ul>
      </div>
      <div className="h-20"></div>
      <div className="h-10"></div>
      <div className='lg:block hidden'>
        <div className=" w-auto flex justify-center ml-60">
          <div className="absolute top-0 w-3/5 border-t-2 border-white"></div>
          <p className="z-10 my-5 pt-5 border-t-2 border-white">
            In case you ever foolishly forget, this was made with{' '}
            <span role="img" aria-label="heart">
              ❤️
            </span>{' '}
            by Aarya, Roopanshi, and Nikhilesh
          </p>
        </div>
      </div>
    </div>
  )
}

export default AIML
