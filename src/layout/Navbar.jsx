import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import resume from "../assets/pdf/RotimiShefiuBalogunResume.pdf";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else setIsScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      {" "}
      <header
        className={`w-full  text-black ${
          isScrolled && "bg-black text-gray-200"
        }`}
      >
        <div className="w-full h-full flex justify-between items-center 2xl:max-w-[110rem] max-w-[85rem] mx-auto">
          <div className="flex items-center space-x-2 md:space-x-10">
            <h1 className="xl:text-4xl lg:text-3xl font-bold ">HEX</h1>
          </div>
          <ul className="hidden items-center space-x-10 md:flex">
            <li className="headerLink">
              <Link to="/">Home</Link>
            </li>
            <li className="headerLink">
              <Link to="/about">About</Link>
            </li>
            <li className="headerLink">
              <Link href="/">Works</Link>
            </li>
            <li className="headerLink">
              <a href="/">Experience</a>
            </li>
            <li className="headerLink">
              <a href="/">Contact</a>
            </li>
            <a
              download="Shefiu Balogun Resume"
              href={resume}
              className={`btnnn w-32 py-2 flex justify-center border transition ease-out duration-500 border-black ${
                isScrolled &&
                "transition ease-in duration-300 bg-white text-black"
              } `}
            >
              Resume
            </a>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Navbar;