import React from "react";
import { Navbar, Music } from "./compo/index";
export default function App() {
  return (
    <>
      <div className="bg-black h-[170vh] md:h-[200vh]">
        {/* Navbar */}
        <Navbar />
        {/* Main Tittle */}
        <center className="space-x-4 text-white text-3xl my-12 font-extrabold md:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-pink-600">
            Relax
          </span>
          <span className="text-transparent bg-clip-text bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-emerald-400 via-violet-600 to-sky-100 ">
            Chill
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-bl from-orange-600 via-yellow-600 to-green-400">
            Code
          </span>
        </center>
        {/* Music Cards */}
        <Music />
      </div>
    </>
  );
}
