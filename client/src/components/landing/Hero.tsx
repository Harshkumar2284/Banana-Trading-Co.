import { useState } from "react";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState("hidden");
  return (
    <div className = "w-full min-h-96 flex justify-center items-center  lg:mt-20">
       <div className="lg:mr-20 sm:text-center lg:text-left">
        <h1 className="heading  primary-color text-5xl lg:text-8xl">Trade.Crash.</h1>
        <h1 className="heading  primary-color text-5xl lg:text-8xl ">Repeat.</h1>
        <h1 className="text-xl lg:text-2xl font-semibold text-[#ffe695]">The ultimate trade market simulation</h1>
        <button className="bg-linear-to-t from-[#E9D9AC] to-[#FCFDF9] border-b-3 border-[#946C27] primary-color font-bold px-4 py-2 rounded-xl mt-4" onClick={() => setIsModalOpen("block")}>Get Started</button>
       </div>
       <div className="w-1/4 border h-96 hidden lg:block border-black">
        <h1 className="">image placeholder</h1>
       </div>
    </div>
  )
}
