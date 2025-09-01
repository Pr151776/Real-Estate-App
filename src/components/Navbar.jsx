import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ label, headLabel, headColor, anhorLink }) => {
  return (
    <header className="h-70 w-full bg-black text-white">
      <div className="flex justify-between items-center h-25 overflow-hidden pt-13">
        <img
          src="images/building_construction_logo.png"
          alt="building_construction_logo"
          className="w-[250px]"
        />
        <ul className="text-xl px-20 flex gap-5 justify-center">
          <NavLink className="font-extralight!" to="/">
            Home
          </NavLink>
          <NavLink className="font-extralight!" to="/about">
            About
          </NavLink>
          <NavLink className="font-extralight!" to="/property">
            Property
          </NavLink>
          <NavLink className="font-extralight!" to="/blog">
            Blog
          </NavLink>
          <NavLink className="font-extralight!" to="/contact">
            Contact
          </NavLink>
        </ul>
      </div>
      <div className="text-6xl px-20 py-7">
        {headLabel}{" "}
        {headColor ? (
          <span className="text-[#C1AA46] text-[64px] font-semibold!">
            {" "}
            {headColor}{" "}
          </span>
        ) : (
          ""
        )}
      </div>
      <div className="flex text-xl px-20 gap-3">
        <NavLink className="font-extralight!" to="/">
          Home
        </NavLink>
        <span>{">"}</span>
        <NavLink className="font-extralight!" to={`/${anhorLink}`}>
          {label}
        </NavLink>
      </div>
    </header>
  );
};

export default Navbar;
