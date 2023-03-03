import React from "react";
import { IoCompassSharp, IoLogoGithub, IoMoon } from "react-icons/io5";

const Header = () => {
  return (
    <div className="shadow-md">
      <div className="container flex items-center justify-between h-16 md:px-14 px-6 m-auto">
        <span className=" text-2xl font-bold text-cyan-600">Todo App</span>

        <div className="flex items-center justify-around gap-4">
          <IoMoon className="text-3xl text-cyan-600" />
          <IoLogoGithub className="text-3xl text-cyan-600" />
          <IoCompassSharp className="text-3xl text-cyan-600" />
        </div>
      </div>
    </div>
  );
};

export default Header;
