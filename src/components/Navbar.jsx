import React, { useState } from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "BirthDay Wish", path: "/birthdaywish" },
    { name: "Memory", path: "/partygallery" },
    { name: "Special Memory", path: "/specialgallery" },
  ];

  const activeClass =
    "text-white bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-lg px-3 py-1 font-semibold";

  return (
    <nav className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 shadow-lg sticky top-0 z-50">
      <div className="max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-pink-500 font-bold text-xl shadow-lg">
              🎉
            </div>
            <span className="font-bold text-xl text-white">Surprise!</span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `transition duration-300 px-3 py-2 rounded-lg ${
                    isActive
                      ? activeClass
                      : "text-white hover:bg-white hover:text-pink-500"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setOpen(!open)}
              className="text-white focus:outline-none text-2xl"
            >
              {open ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 shadow-md">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `block px-4 py-2 m-2 rounded-lg text-center transition duration-300 ${
                  isActive
                    ? "bg-white text-pink-500 font-bold"
                    : "text-white hover:bg-white hover:text-pink-500"
                }`
              }
              onClick={() => setOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
