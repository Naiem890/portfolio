import { ArrowRightIcon, ArrowSmRightIcon } from "@heroicons/react/solid";
import React from "react";
import projectImg from "../../images/project-2.png";

import projectDesImg1 from "../../images/project-2-details-1.png";
import projectDesImg2 from "../../images/project-2-details-2.png";
import projectDesImg3 from "../../images/project-2-details-3.png";

const InventoryManager = () => {
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
      <div className="bg-green-200">
        <div className="container mx-auto  pb-16  pt-36  gap-6  px-6  xl:px-20 grid md:grid-cols-2 items-start md:items-center justify-between text-center md:text-left">
          <div>
            <h1 className="text-5xl capitalize font-Kdam">
              Smart Inventory manager
            </h1>
            <p className="mt-6 text-lg xl:text-xl text-gray-500 mx-auto md:mx-0 sm:w-10/12">
              A smart inventory manager for keep track of headphones inventory.
              This solution is helpful for shop owner as they can add product,
              manage stocks and delivered products.
            </p>
            <div className="flex mt-4 gap-2 mx-auto md:mx-0 justify-center md:justify-start sm:w-10/12 opacity-60 flex-wrap">
              {projectStack.map((stack) => {
                return <div className="btn btn-outline btn-xs">{stack}</div>;
              })}
            </div>
            <a
              target="_blank"
              href="https://smart-shop-manager.firebaseapp.com/"
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
            <h3 className="text-3xl leading-snug font-Kdam  text-green-500">
              Manage product in one place
            </h3>
            <ul className=" mt-6 flex flex-col gap-2 text-lg">
              <li className="flex gap-3 items-center  text-gray-500">
                <div className="h-5 w-5">
                  <ArrowRightIcon className="h-5 w-5 text-green-600"></ArrowRightIcon>
                </div>
                User will see the product details in this page
              </li>
              <li className="flex gap-3 items-center  text-gray-500">
                <div className="h-5 w-5">
                  <ArrowRightIcon className=" h-5 text-green-600"></ArrowRightIcon>
                </div>
                This page is protected. That's mean, no one can access this page
                without login.
              </li>
              <li className="flex gap-3 items-center  text-gray-500">
                <div className="h-5 w-5">
                  <ArrowRightIcon className="h-5 text-green-600"></ArrowRightIcon>
                </div>
                If they try to access this page without login.It will redirect
                to login page.
              </li>
              <li className="flex gap-3 items-center  text-gray-500">
                <div className="h-5 w-5">
                  <ArrowRightIcon className="h-5 text-green-600"></ArrowRightIcon>
                </div>
                User can update any amount of stock and also deliver one product
                at a time.
              </li>
            </ul>
          </div>
        </div>
        {/* feature 2 */}
        <div className="grid md:grid-cols-2  gap-6 items-center grid-cols-1 mt-14">
          <div className="md:order-1 order-2">
            <h3 className="text-3xl leading-snug font-Kdam  text-green-500">
              Manage your product inventory
            </h3>
            <ul className=" mt-6 flex flex-col gap-2 text-lg">
              <li className="flex gap-3 items-center  text-gray-500">
                <div className="h-5 w-5">
                  <ArrowRightIcon className="h-5 text-green-600"></ArrowRightIcon>
                </div>
                User can see all the product form one place. and delete any
                product if needed
              </li>
              <li className="flex gap-3 items-center  text-gray-500">
                <div className="h-5 w-5">
                  <ArrowRightIcon className="h-5 text-green-600"></ArrowRightIcon>
                </div>
                User can also see product that are added only by him in ''My
                Product'' page
              </li>
              <li className="flex gap-3 items-center  text-gray-500">
                <div className="h-5 w-5">
                  <ArrowRightIcon className="h-5 text-green-600"></ArrowRightIcon>
                </div>
                Add product button will allow user to add any product.
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
            <h3 className="text-3xl leading-snug font-Kdam  text-green-500">
              Add product in one click
            </h3>
            <ul className=" mt-6 flex flex-col gap-2 text-lg">
              <li className="flex gap-3 items-center  text-gray-500">
                <div className="h-5 w-5">
                  <ArrowRightIcon className="h-5 w-5 text-green-600"></ArrowRightIcon>
                </div>
                User have to fill up information to add new product
              </li>
              <li className="flex gap-3 items-center  text-gray-500">
                <div className="h-5 w-5">
                  <ArrowRightIcon className="h-5 w-5 text-green-600"></ArrowRightIcon>
                </div>
                User can't create new account if they don't provide valid
                information.
              </li>
              <li className="flex gap-3 items-center  text-gray-500">
                <div className="h-5 w-5">
                  <ArrowRightIcon className="h-5 w-5 text-green-600"></ArrowRightIcon>
                </div>
                User will receive a confirmation notification if the product is
                being added successfully.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryManager;
