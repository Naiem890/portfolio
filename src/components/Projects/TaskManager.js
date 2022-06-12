import { ArrowRightIcon, ArrowSmRightIcon } from "@heroicons/react/solid";
import React from "react";
import projectImg from "../../images/project-3.png";

import projectDesImg1 from "../../images/project-3-details-1.png";

const TaskManager = () => {
  const projectStack = [
    "ReactJS",
    "TailwindCSS",
    "Firebase",
    "React Router",
    "NodeJS",
    "Express",
    "Mongodb",
  ];
  return (
    <div>
      <div className="bg-blue-200">
        <div className="container mx-auto  pb-16  pt-36  gap-6  px-6  xl:px-20 grid md:grid-cols-2 items-start md:items-center justify-between text-center md:text-left">
          <div>
            <h1 className="text-5xl capitalize font-Kdam">Task manager</h1>
            <p className="mt-6 text-lg xl:text-xl text-gray-500 mx-auto md:mx-0 sm:w-10/12">
              A small web app for keep track of daily task. User can add, delete
              and mark as done any task.
            </p>
            <div className="flex mt-4 gap-2 mx-auto md:mx-0 justify-center md:justify-start sm:w-10/12 opacity-60 flex-wrap">
              {projectStack.map((stack) => {
                return <div className="btn btn-outline btn-xs">{stack}</div>;
              })}
            </div>
            <a
              target="_blank"
              href="https://task-manager-6f371.web.app/"
              className="btn-md  mt-6 font-bold btn"
              rel="noreferrer"
            >
              Live Link
              <ArrowSmRightIcon className="h-5 ml-2 -mr-2"></ArrowSmRightIcon>
            </a>
          </div>
          <div>
            <img src={projectImg} className="" alt="" />
          </div>
        </div>
      </div>

      <div className="my-16 container mx-auto px-6  xl:px-20 ">
        <h2 className="text-4xl font-Kdam text-center">Project Features</h2>

        {/* feature 1 */}

        <div className="grid md:grid-cols-2 gap-6 items-center grid-cols-1 mt-10">
          <div>
            <img src={projectDesImg1} alt="" />
          </div>
          <div>
            <h3 className="text-3xl leading-snug font-Kdam  text-blue-500">
              Manage task easily
            </h3>
            <ul className=" mt-6 flex flex-col gap-2 text-lg">
              <li className="flex gap-3 items-center text-gray-500">
                <div className="h-5 w-5">
                  <ArrowRightIcon className=" h-5 text-blue-600"></ArrowRightIcon>
                </div>
                User can add any task with task name and details.
              </li>
              <li className="flex gap-3 items-center text-gray-500">
                <div className="h-5 w-5">
                  <ArrowRightIcon className=" h-5 text-blue-600"></ArrowRightIcon>
                </div>
                User can view details, delete or mark as done any task.
              </li>
              <li className="flex gap-3 items-center text-gray-500">
                <div className="h-5 w-5">
                  <ArrowRightIcon className=" h-5 text-blue-600"></ArrowRightIcon>
                </div>
                This app is protected. That's mean, no one can access this app
                without login.
              </li>

              <li className="flex gap-3 items-center text-gray-500">
                <div className="h-5 w-5">
                  <ArrowRightIcon className="h-5 text-blue-600"></ArrowRightIcon>
                </div>
                If they try to access this app without login.It will redirect to
                login page.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskManager;
