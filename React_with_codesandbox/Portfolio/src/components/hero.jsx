import React from "react";
import Heropic from "../assets/Avatar.png";

const hero = () => {
  return (
    <>
      <section
        className="flex justify-around items-center p-10 space-x-10 
        lg:flex-row ssm:flex-col ssm:space-y-10 text-white"
      >
        <div className="lg:w-1/3 ssm:w-fit font-mono">
          <p className="text-2xl mb-5 text-slate-300">I'm</p>
          <h1
            className="text-3xl pb-3 font-bold uppercase
            bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 inline-block text-transparent bg-clip-text"
          >
            Saurabh Chavan
          </h1>
          <hr />
          <h1
            className="text-4xl pt-3 font-bold uppercase 
            bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 inline-block text-transparent bg-clip-text
            animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5"
          >
            Web Developer
          </h1>
          <p className="text-1xl mt-5 mb-5 text-slate-300">
            Building user-friendly and responsive web experiences.
          </p>
        </div>
        <div>
          <img
            src={Heropic}
            alt=""
            width={330}
            height={330}
            className="rounded-full hover:border-1 hover:border-gray-700 shadow-lg hover:shadow-orange-600/100
            transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-orange-500 duration-400"
          />
        </div>
      </section>
    </>
  );
};

export default hero;
