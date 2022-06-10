import React from "react";

const Hero = () => {
  return (
    <div className="bg-slate-100 min-h-screen pt-16 container mx-auto xl:px-20 grid grid-cols-2 items-center justify-between">
      <div className="-mt-10">
        <h1 className="text-6xl font-Kdam leading-relaxed">
          Solaiman Islam Naiem
        </h1>
        <p className="text-3xl">Front End Developer &amp; UI UX Designer</p>
      </div>
      <div className="">
        <img
          className="rounded-full max-w-md ring-8 ring-offset-8 ring-gray-800 mx-auto"
          src="https://i.ibb.co/gyDpq0W/solaiman-Custom.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
