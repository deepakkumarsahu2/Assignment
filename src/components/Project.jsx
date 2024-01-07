import React from "react";
import Logo1 from "../assets/Amazon.png";
import Logo2 from "../assets/TodoList.png";
import Logo3 from "../assets/Weather.png";
import logo4 from "../assets/portfolio.png";
import { NavLink } from "react-router-dom";

export default function Project() {
  return (
    <div className="bg-[#60768B]">
      <h1 className="flex flex-wrap item-center justify-center text-2xl font-bold text-black mx-5 ">
        Project Details
      </h1>

      <div className=" flex flex-wrap py-10">
        <div className="p-7 m-auto w-full md:w-1/2 lg:w-1/3">
          <img src={logo4} alt="" className="w-[400px] h-[400px] rounded-md" />
          <h1 className="text-xl font-bold text-white">Portfolio Website</h1>
          <h1 className="text-lg font-semibold text-justify">
            It is a portfolio website which is created in using react js. It's
            my personal portfolio to showcase my technical skills. This is
            created by modern technologies in react concept like Routing, each
            item created inform of functional component and custom css .
          </h1>
          <div className="flex justify-between my-5">
            <button className="border border-transparent rounded-md bg-indigo-500 w-24 h-7 text-white font-semibold hover:text-indigo-500 hover:bg-white ">
              <NavLink
                target="_blank"
                to="https://deepak-kumar-sahu.netlify.app/"
              >
                VIEW
              </NavLink>
            </button>
            <button className="border border-transparent rounded-md bg-indigo-500 w-24 h-7 text-white font-semibold hover:text-indigo-500 hover:bg-white ">
              <NavLink
                target="_blank"
                to="https://github.com/deepakkumarsahu2/Portfolio"
              >
                Source
              </NavLink>
            </button>
          </div>
        </div>
        <div className="p-7 m-auto w-full md:w-1/2 lg:w-1/3">
          <img src={Logo3} alt="" className="w-[400px] h-[400px] rounded-md" />
          <h1 className="text-xl font-bold text-white">Weather Website</h1>
          <h1 className="text-lg font-semibold text-justify">
            {" "}
            The React Weather App is a dynamic and user-friendly application
            designed to provide real-time weather information at your
            fingertips. Built using React.js and leveraging the power of modern
            hooks and API data fetching, this application delivers an intuitive
            and seamless experience for users seeking up-to-date weather
            details.
          </h1>
          <div className="flex justify-between my-5">
            <button className="border border-transparent rounded-md bg-indigo-500 w-24 h-7 text-white font-semibold hover:text-indigo-500 hover:bg-white ">
              <NavLink
                target="_blank"
                to="https://weather-app-dpk.netlify.app/"
              >
                VIEW
              </NavLink>
            </button>
            <button className="border border-transparent rounded-md bg-indigo-500 w-24 h-7 text-white font-semibold hover:text-indigo-500 hover:bg-white ">
              <NavLink
                target="_blank"
                to="https://github.com/deepakkumarsahu2/Weather-App"
              >
                Source
              </NavLink>
            </button>
          </div>
        </div>
        <div className="p-7 m-auto w-full md:w-1/2 lg:w-1/3">
          <img src={Logo2} alt="" className="w-[400px] h-[400px] rounded-md" />
          <h1 className="text-xl font-bold text-white"> TodoList Website</h1>
          <h1 className="text-lg font-semibold text-justify">
            {" "}
            Elevate your task management experience with the React TodoList App
            – a sleek and intuitive application designed to help you stay
            organized and boost productivity. This app is built using React,
            harnessing the power of functional components and hooks to provide a
            seamless user experience.
          </h1>
          <div className="flex justify-between my-5">
            <button className="border border-transparent rounded-md bg-indigo-500 w-24 h-7 text-white font-semibold hover:text-indigo-500 hover:bg-white ">
              <NavLink target="_blank" to="https://todo-list-dpk2.netlify.app/">
                VIEW
              </NavLink>
            </button>
            <button className="border border-transparent rounded-md bg-indigo-500 w-24 h-7 text-white font-semibold hover:text-indigo-500 hover:bg-white ">
              <NavLink
                target="_blank"
                to="https://github.com/deepakkumarsahu2/Todo_List"
              >
                Source
              </NavLink>
            </button>
          </div>
        </div>
        <div className="p-7 m-auto w-full md:w-1/2 lg:w-1/3">
          <img src={Logo1} alt="" className="w-[400px] h-[400px] rounded-md" />
          <h1 className="text-xl font-bold text-white">Amazon Website</h1>
          <h1 className="text-lg font-semibold text-justify">
            {" "}
            The Amazon Clone project is a web development endeavor that
            replicates the functionality and design of the renowned e-commerce
            giant, Amazon. Developed using HTML and CSS, this clone offers a
            visually appealing and responsive user interface, mirroring the
            familiar layout of the original platform.
          </h1>
          <div className="flex justify-between my-5">
            <button className="border border-transparent rounded-md bg-indigo-500 w-24 h-7 text-white font-semibold hover:text-indigo-500 hover:bg-white ">
              <NavLink
                target="_blank"
                to="https://deepakkumarsahu2.github.io/Amazon_clone/"
              >
                {" "}
                VIEW
              </NavLink>
            </button>
            <button className="border border-transparent rounded-md bg-indigo-500 w-24 h-7 text-white font-semibold hover:text-indigo-500 hover:bg-white ">
              <NavLink
                target="_blank"
                to="https://github.com/deepakkumarsahu2/Amazon_clone"
              >
                Source
              </NavLink>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
