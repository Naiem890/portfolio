import { ArrowRightIcon, ArrowSmRightIcon } from "@heroicons/react/solid";
import React from "react";
import projectImg from "../../images/project-3.png";
const TaskManager = () => {
  const projectStack = [
    "ReactJS",
    "Firebase",
    "React Router",
    "NodeJS",
    "Express",
    "Mongodb",
    "admin",
    "jwt",
  ];
  return (
    <div>
      <div className="bg-red-200">
        <div className="container mx-auto  pb-10  pt-28  gap-6  px-6  xl:px-20 grid md:grid-cols-2 items-start md:items-center justify-between text-center md:text-left">
          <div>
            <h1 className="text-5xl capitalize font-Kdam">Task Manager</h1>
            <p className="mt-6 text-lg xl:text-xl text-gray-500 mx-auto md:mx-0 sm:w-10/12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis quas necessitatibus velit id cumque vero facilis at
              aliquid sequi, possimus minima adipisci voluptas laboriosam
              eligendi?
            </p>
            <div className="flex mt-4 gap-2 mx-auto md:mx-0 justify-center md:justify-start sm:w-10/12 opacity-60 flex-wrap">
              {projectStack.map((stack) => {
                return <div className="btn btn-outline btn-xs">{stack}</div>;
              })}
            </div>
            <a
              target="_blank"
              href="https://tools-hub-e018a.web.app/"
              className="btn-md  mt-6 font-bold btn"
              rel="noreferrer"
            >
              Live Link
              <ArrowSmRightIcon className="h-6 ml-2 -mr-2"></ArrowSmRightIcon>
            </a>
          </div>
          <div>
            <img src={projectImg} className="" alt="" />
          </div>
        </div>
      </div>

      <div className="my-12  container mx-auto px-6  xl:px-20 ">
        <h2 className="text-4xl font-Kdam text-center">Project Features</h2>

        <div className="grid md:grid-cols-2 gap-6 items-center grid-cols-1 mt-14">
          <div>
            <img src={projectImg} alt="" />
          </div>
          <div>
            <h3 className="text-3xl leading-snug font-Kdam  text-[#D51C00]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius,
              minima!
            </h3>
            <ul className=" mt-6 flex flex-col gap-2">
              <li className="flex gap-3 text-gray-500">
                <ArrowRightIcon className="h-6 text-red-600"></ArrowRightIcon>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis, assumenda? Officiis, assumenda? Officiis, assumenda?
              </li>
              <li className="flex gap-3 text-gray-500">
                <ArrowRightIcon className="h-6 text-red-600"></ArrowRightIcon>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis, assumenda? Officiis, assumenda? Officiis, assumenda?
              </li>
              <li className="flex gap-3 text-gray-500">
                <ArrowRightIcon className="h-6 text-red-600"></ArrowRightIcon>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis, assumenda? Officiis, assumenda? Officiis, assumenda?
              </li>
              <li className="flex gap-3 text-gray-500">
                <ArrowRightIcon className="h-6 text-red-600"></ArrowRightIcon>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis, assumenda? Officiis, assumenda? Officiis, assumenda?
              </li>
            </ul>
          </div>
        </div>
        <div className="grid md:grid-cols-2  gap-6 items-center grid-cols-1 mt-14">
          <div className="md:order-1 order-2">
            <h3 className="text-3xl leading-snug font-Kdam  text-[#D51C00]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius,
              minima!
            </h3>
            <ul className=" mt-6 flex flex-col gap-2">
              <li className="flex gap-3 text-gray-500">
                <ArrowRightIcon className="h-6 text-red-600"></ArrowRightIcon>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis, assumenda? Officiis, assumenda? Officiis, assumenda?
              </li>
              <li className="flex gap-3 text-gray-500">
                <ArrowRightIcon className="h-6 text-red-600"></ArrowRightIcon>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis, assumenda? Officiis, assumenda? Officiis, assumenda?
              </li>
              <li className="flex gap-3 text-gray-500">
                <ArrowRightIcon className="h-6 text-red-600"></ArrowRightIcon>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis, assumenda? Officiis, assumenda? Officiis, assumenda?
              </li>
              <li className="flex gap-3 text-gray-500">
                <ArrowRightIcon className="h-6 text-red-600"></ArrowRightIcon>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis, assumenda? Officiis, assumenda? Officiis, assumenda?
              </li>
            </ul>
          </div>
          <div className="md:order-2 order-1">
            <img src={projectImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskManager;
