import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="bg-[#7CBAF2] p-4 sticky top-0 ">
        <div className="max-w-full mx-auto p-[14px] flex justify-between text-center">
          <div className="text-2xl font-bold ">Portfolio</div>
          {toggle ? (
            <AiOutlineClose
              onClick={() => setToggle(!toggle)}
              className="text-2xl text-white font-bold md:hidden block"
            />
          ) : (
            <AiOutlineMenu
              onClick={() => setToggle(!toggle)}
              className="text-2xl text-white font-bold md:hidden block"
            />
          )}

          <ul className="hidden md:flex gap-14 text-lg font-bold text-white ">
            <li className="hover:text-slate-600  active:text-slate-600 ">
              {" "}
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="hover:text-slate-600 active:text-slate-600  ">
              <NavLink to="/portfolio">Portfolio</NavLink>
            </li>
            <li className="hover:text-slate-600  active:text-slate-600 ">
              <NavLink to="/skills">Skils</NavLink>
            </li>
            <li className="hover:text-slate-600  active:text-slate-600 ">
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
          {/* responsive menu */}
          <ul
            className={` duration-300 md:hidden text-base text-left font-bold text-black fixed bg-[#BCD9F4] top-[90px] ${
              toggle ? `left-[0]` : `left-[-100%]`
            } w-full h-screen`}
          >
            <li className="p-5">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="p-5">
              <NavLink to="/portfolio">Portfolio</NavLink>
            </li>
            <li className="p-5">
              <NavLink to="/skills">Skils</NavLink>
            </li>
            <li className="p-5">
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
