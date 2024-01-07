import React from "react";
import coding from "../assets/Coding.png";
import { NavLink } from "react-router-dom";
import doc from "../assets/Cv.pdf";

export default function Hero() {
  return (
    <div>
      <div className="bg-[#60768B] flex flex-wrap justify-around items-center p-7 h-screen">
        <div className=" py-10 ">
          <h1 className="text-2xl font-bold">Hello,</h1>
          <h1 className="text-3xl font-bold">
            This is <span className=" text-[#7312F3] "> Deepak Kumar</span>
          </h1>
          <h1 className="text-xl font-semibold text-[#2B07B0] ">
            Front-End Developer
          </h1>
          <div className="py-5 flex gap-5 ">
            <button className="border border-transparent rounded-md bg-indigo-500 w-24 h-7 text-white font-semibold hover:text-indigo-500 hover:bg-white ">
              <NavLink to="/portfolio"> Portfolio</NavLink>
            </button>
            <button className="border border-transparent rounded-md bg-indigo-500 w-24 h-7 text-white font-semibold hover:text-indigo-500 hover:bg-white ">
              <a href={doc} download={doc}>
                {" "}
                Resume
              </a>
            </button>
          </div>
        </div>
        <div className="w-96 h-96">
          <img src={coding} alt="" className=" rounded-lg" />
        </div>
      </div>
    </div>
  );
}
