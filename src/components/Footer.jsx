import React from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="flex flex-col items-center bg-neutral-900 text-center text-white">
        <div className="container px-6 pt-6">
          <div className="mb-6 flex justify-center gap-5 ">
            <NavLink
              to="https://www.linkedin.com/in/deepakkumarsahu2/"
              target="_blank"
            >
              {" "}
              <FaLinkedin size={20} />
            </NavLink>
            <NavLink
              target="_blank"
              to="https://instagram.com/sahu.deepakkk_?igshid=NzZlODBkYWE4Ng=="
            >
              {" "}
              <FaInstagram size={20} />
            </NavLink>
            <NavLink target="_blank" to="https://github.com/deepakkumarsahu2">
              {" "}
              <FaGithub size={20} />
            </NavLink>
          </div>
        </div>

        <div className="w-full p-4 text-center">
          © 2024 Copyright: <a className="text-whitehite">Deepak Kumar sahu</a>
        </div>
      </footer>
    </>
  );
}
