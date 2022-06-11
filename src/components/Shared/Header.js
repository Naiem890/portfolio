import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const navLinks = [
    {
      navLink: "#",
      navText: "Home",
    },
    {
      navLink: "#",
      navText: "About",
    },
    {
      navLink: "#projects",
      navText: "Projects",
    },
    {
      navLink: "#",
      navText: "Contact",
    },
  ];

  return (
    <div className="container mx-auto xl:px-12 fixed top-0 bg-base-100 z-50">
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
                    <a href={navLink.navLink}>{navLink.navText}</a>
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
                  <a className="font-semibold" href={navLink.navLink}>
                    {navLink.navText}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div class="navbar-end">
          <a class="btn capitalize">Download Resume</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
