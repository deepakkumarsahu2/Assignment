import React from "react";
import logo from "../assets/skill.gif";
export default function MySkill() {
  return (
    <div>
      <div className="flex flex-wrap item-center justify-center text-2xl font-bold text-black mx-5">
        My Skill Section
      </div>
      <div className="w-screen h-screen flex m-auto">
        <img src={logo} alt="" className="m-auto" />
      </div>
    </div>
  );
}
