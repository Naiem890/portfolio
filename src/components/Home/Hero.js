import React from "react";

const Hero = () => {
  return (
    <div className="bg-slate-100">
      <div className=" container mx-auto py-5 min-h-screen pt-28 md:pt-16 gap-6  px-6  xl:px-20 grid md:grid-cols-2 items-start md:items-center justify-between text-center md:text-left">
        <div className="md:-mt-10">
          <h1 className="xl:text-6xl text-5xl font-Kdam leading-snug mb-3 xl:leading-relaxed">
            Solaiman Islam Naiem
          </h1>
          <p className="md:text-3xl text-2xl">
            Front End Developer &amp; UI UX Designer
          </p>
        </div>
        <div className="p-6">
          <img
            className="rounded-full xl:max-w-md ring-8 ring-offset-8 ring-gray-800 mx-auto"
            src="https://i.ibb.co/gyDpq0W/solaiman-Custom.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
