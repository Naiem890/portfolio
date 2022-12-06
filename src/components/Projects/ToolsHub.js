import { ArrowRightIcon, ArrowSmRightIcon } from "@heroicons/react/solid";
import React from "react";
import projectImg from "../../images/project-1.png";

import projectDesImg1 from "../../images/project-1-details-1.png";
import projectDesImg2 from "../../images/project-1-details-2.png";
import projectDesImg3 from "../../images/project-1-details-3.png";

const ToolsHub = () => {
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
        <div className="container mx-auto  pb-16  pt-36  gap-6  px-6  xl:px-20 grid md:grid-cols-2 items-start md:items-center justify-between text-center md:text-left">
          <div>
            <h1 className="text-5xl capitalize font-Kdam">
              manufacturer Tools Hub{" "}
            </h1>
            <p className="mt-6 text-lg xl:text-xl text-gray-500 mx-auto md:mx-0 sm:w-10/12">
              This is a B2B carpentry tools selling E-commerce. Business can buy
              tools in just one click. There is a admin panel to monitor all the
              product and orders. User can also edit their ordered products from
              dashboard.
            </p>
            <div className="flex mt-4 gap-2 mx-auto md:mx-0 justify-center md:justify-start sm:w-10/12 opacity-60 flex-wrap">
              {projectStack.map((stack) => {
                return <div className="btn btn-outline btn-xs">{stack}</div>;
              })}
            </div>
            <a
              target="_blank"
              href="https://tools-hub-client.vercel.app/"
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
            <h3 className="text-3xl leading-snug font-Kdam  text-[#D51C00]">
              Order product in just one click
            </h3>
            <ul className=" mt-6 flex flex-col gap-2 text-lg">
              <li className="flex gap-3 items-center  text-gray-500">
                <div className="h-5 w-5">
                  <ArrowRightIcon className="h-5 w-5 text-red-600"></ArrowRightIcon>
                </div>
                User can place order in bulk amount form this page
              </li>
              <li className="flex gap-3 items-center  text-gray-500">
                <div className="h-5 w-5">
                  <ArrowRightIcon className=" h-5 text-red-600"></ArrowRightIcon>
                </div>
                This page is protected. That's mean, no one can access this page
                without login.
              </li>
              <li className="flex gap-3 items-center  text-gray-500">
                <div className="h-5 w-5">
                  <ArrowRightIcon className="h-5 text-red-600"></ArrowRightIcon>
                </div>
                If they try to access this page without login.It will redirect
                to login page
              </li>
              <li className="flex gap-3 items-center  text-gray-500">
                <div className="h-5 w-5">
                  <ArrowRightIcon className="h-5 text-red-600"></ArrowRightIcon>
                </div>
                User can't order below the minimum order or above maximum order
                amount
              </li>
            </ul>
          </div>
        </div>
        {/* feature 2 */}
        <div className="grid md:grid-cols-2  gap-6 items-center grid-cols-1 mt-14">
          <div className="md:order-1 order-2">
            <h3 className="text-3xl leading-snug font-Kdam  text-[#D51C00]">
              Manage your product from dashboard
            </h3>
            <ul className=" mt-6 flex flex-col gap-2 text-lg">
              <li className="flex gap-3 items-center  text-gray-500">
                <div className="h-5 w-5">
                  <ArrowRightIcon className="h-5 text-red-600"></ArrowRightIcon>
                </div>
                User can see all the product form one place. Also there is
                option to delete any order.
              </li>
              <li className="flex gap-3 items-center  text-gray-500">
                <div className="h-5 w-5">
                  <ArrowRightIcon className="h-5 text-red-600"></ArrowRightIcon>
                </div>
                In dashboard user can edit and update user informations like
                Full Name, Profile Image and other.
              </li>
              <li className="flex gap-3 items-center  text-gray-500">
                <div className="h-5 w-5">
                  <ArrowRightIcon className="h-5 text-red-600"></ArrowRightIcon>
                </div>
                User can also add review form dashboard.
              </li>
            </ul>
          </div>
          <div className="md:order-2 order-1">
            <img src={projectDesImg2} alt="" />
          </div>
        </div>
        {/* feature 3 */}
        <div className="grid md:grid-cols-2 gap-6 items-center grid-cols-1 mt-14">
          <div>
            <img src={projectDesImg3} alt="" />
          </div>
          <div>
            <h3 className="text-3xl leading-snug font-Kdam  text-[#D51C00]">
              Admin dashboard for all access
            </h3>
            <ul className=" mt-6 flex flex-col gap-2 text-lg">
              <li className="flex gap-3 items-center  text-gray-500">
                <div className="h-5 w-5">
                  <ArrowRightIcon className="h-5 w-5 text-red-600"></ArrowRightIcon>
                </div>
                Admin has some administrative access of this site
              </li>
              <li className="flex gap-3 items-center  text-gray-500">
                <div className="h-5 w-5">
                  <ArrowRightIcon className=" h-5 text-red-600"></ArrowRightIcon>
                </div>
                Admin can see all the products that are listed in this site and
                add new product
              </li>
              <li className="flex gap-3 items-center  text-gray-500">
                <div className="h-5 w-5">
                  <ArrowRightIcon className="h-5 text-red-600"></ArrowRightIcon>
                </div>
                Admin can see all the user of this site. Also he/she can make an
                user admin and delete any user if needed.
              </li>
              <li className="flex gap-3 items-center  text-gray-500">
                <div className="h-5 w-5">
                  <ArrowRightIcon className="h-5 text-red-600"></ArrowRightIcon>
                </div>
                Admin does't have any access of the reviews of users.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsHub;
