"use client";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [menu, toggleMenu] = useState(false);
  function showMenu() {
    toggleMenu(!menu);
  }
  return (
    <nav className="bg-gray-900/80 h-12 flex items-center">
      <GiHamburgerMenu
        className="block sm:hidden ml-4"
        size={30}
        color="white"
        onClick={showMenu}
      />
      <ul className="hidden sm:flex items-center px-4 md:px-16 text-white gap-8">
        <li>HOME</li>
        <li>PACKAGES</li>
        <li>HOTELS</li>
        <li>CRUISES</li>
        <li>CAR RENTALS</li>
      </ul>
      {menu && (
        <div className="block sm:hidden bg-black/90 z-10 absolute w-full h-[400px] top-[6.7rem]">
          <ul className="text-white text-xl flex flex-col gap-4 m-6">
            <li>HOME</li>
            <li>PACKAGES</li>
            <li>HOTELS</li>
            <li>CRUISES</li>
            <li>CAR RENTALS</li>
          </ul>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
