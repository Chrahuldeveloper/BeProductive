import React, { useState } from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { RiTodoFill } from "react-icons/ri";
import { GiPumpkin } from "react-icons/gi";
import { Todo } from "./index";
export default function Navbar() {
  const [openmodel, setopenmodel] = useState(false);
  const OpenModel = () => {
    setopenmodel(!openmodel);
  };
  const Tweet =
"Unwinding%20with%20%40lofilife__.%20All%20in%20one%20spot%20with%20ambient%20sounds🎧%2C%20a%20built-in%20Pomodoro%20timer🍅%2C%20and%20a%20to-do%20list%20💝";
  return (
    <>
      <nav
        className={`flex bg-black justify-between md:justify-around items-center px-8 glass bg-transparent sticky top-0 left-0  `}
      >
        <div>
          <img
            src="https://lofi-life.vercel.app/images/logo.svg"
            alt=""
            className="w-20 h-20 md:w-22 md:h-22"
          />
        </div>
        <ul className="flex items-center space-x-6 md:space-x-8">
          <div className="flex flex-col cursor-pointer items-center justify-center relative">
            <a href={`https://twitter.com/intent/tweet?text=${Tweet}`}>
              <AiOutlineTwitter color="white" size={24} />
              <div className="bg-blue-400 absolute inset-0 rounded-sm blur-md opacity-90"></div>
            </a>
          </div>
          <div
            className="flex flex-col items-center cursor-pointer justify-center relative"
            onClick={OpenModel}
          >
            <RiTodoFill color="white" size={24} />
            <div className="bg-violet-500 absolute inset-0 rounded-sm blur-md opacity-90"></div>
          </div>
          <div className="flex flex-col items-center  cursor-pointer justify-center relative">
            <div className="bg-red-600 absolute inset-0 rounded-sm blur-md opacity-90"></div>
            <GiPumpkin color="white" size={24} />
          </div>
        </ul>
      </nav>
      {openmodel ? (
        <Todo openmodel={openmodel} setopenmodel={setopenmodel} />
      ) : null}
    </>
  );
}
