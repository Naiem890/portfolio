import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const navLinks = [
    {
      navLink: "/#",
      navText: "Home",
    },
    {
      navLink: "/#projects",
      navText: "Projects",
    },
    {
      navLink: "/#about",
      navText: "About",
    },
    {
      navLink: "/#contact",
      navText: "Contact",
    },
  ];

  return (
    <div className="bg-base-100 z-50 w-full fixed top-0">
      <div className="container mx-auto xl:px-12  ">
        <div class="navbar">
          <div class="navbar-start">
            <div class="dropdown">
              <label tabindex="0" class="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabindex="0"
                class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navLinks.map((navLink) => {
                  return (
                    <li>
                      <HashLink smooth to={navLink.navLink}>
                        {navLink.navText}
                      </HashLink>
                    </li>
                  );
                })}
              </ul>
            </div>
            <Link to={"#"} class="btn btn-ghost normal-case text-xl px-0 ">
              Solaiman I. N.
            </Link>
          </div>
          <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal p-0">
              {navLinks.map((navLink) => {
                return (
                  <li>
                    <HashLink
                      smooth
                      className="font-semibold"
                      to={navLink.navLink}
                    >
                      {navLink.navText}
                    </HashLink>
                  </li>
                );
              })}
            </ul>
          </div>
          <div class="navbar-end">
            <a
              class="btn capitalize"
              // href="https://drive.google.com/file/d/1Ei2hbzL3kdz3-b0tFuw4pxqt-17QYMrK/view?usp=sharing"
              target="_blank"
              href="https://drive.google.com/uc?export=download&id=1Ei2hbzL3kdz3-b0tFuw4pxqt-17QYMrK"
              download="filename"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
