import React from "react";
import Logo from "../../assets/Images/logo.png";
import { FaCaretDown } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "../navbar/DarkMode";
const Navbar = ({ handleOrderPopup }) => {
  const Menu = [
    {
      id: 1,
      name: "Home",
      link: "/#",
    },
    {
      id: 1,
      name: "Best Seller",
      link: "/#services",
    },
  ];

  const DropdownLinks = [
    {
      name: "Trending Books",
      link: "/#",
    },
    {
      name: "Best Selling",
      link: "/#",
    },
    {
      name: "Authors",
      link: "/#",
    },
  ];
  return (
    <div className="duration-200 bg-white shadow-lg dark:bg-gray-900 dark:text-white">
      <div className="container py-3 sm:py-0">
        <div className="flex items-center justify-between">
          <div>
            <a href="/" className="flex gap-2 text-2xl font-bold sm:text-3xl">
              <img src={Logo} alt="" className="w-10" /> Books
            </a>
          </div>
          <div className="flex items-center justify-between gap-4">
            <div>
              <DarkMode />
            </div>
            <ul className="items-center hidden gap-4 sm:flex">
              {Menu.map((menu) => (
                <li key={menu.name}>
                  <a
                    href={menu.link}
                    className="inline-block px-4 py-4 duration-200 hover:text-primary"
                  >
                    {menu.name}
                  </a>
                </li>
              ))}
              {/* dropdown section */}
              <li className="relative cursor-pointer group">
                <a href="/#" className="flex h-[72px] items-center gap[2px]">
                  Quick Links{" "}
                  <span>
                    <FaCaretDown className="transition duration-300 group-hover:rotate-180" />
                  </span>
                </a>
                <div className="absolute -left-9 z-[9999] hidden rounded-md bg-white p-2 text-black group-hover:block shadow-md w-[150px] ">
                  <ul className="space-y-3">
                    {DropdownLinks.map((data) => (
                      <li key={data.name}>
                        <a
                          className="inline-block w-full p-2 rounded-md hover:bg-primary/20"
                          href={data.link}
                        >
                          {data.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              {/* dropdown section */}
            </ul>
            <button
              onClick={() => handleOrderPopup()}
              className="flex items-center gap-3 px-4 py-1 text-white duration-300 rounded-full bg-gradient-to-r from-primary to-secondary hover:scale-105 "
            >
              Order
              <FaCartShopping className="text-xl text-white cursor-pointer drop-shadow-sm" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
