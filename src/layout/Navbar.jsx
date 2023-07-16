import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import resume from "../assets/pdf/RotimiShefiuBalogunResume.pdf";
import { HiMenuAlt2 } from "react-icons/hi";
import Logo from "../assets/images/home/logo.png";
import Sidebar from "./Sidebar";
const Navbar = ({
  handleClickScroll,
  handleAboutScroll,
  handleStoryScroll,
  handleContact,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <header
        className={`w-full  text-black ${
          isScrolled && "bg-black/60 backdrop-blur-md text-gray-200"
        }`}
      >
        <div className="w-full h-full flex justify-between items-center 2xl:max-w-[110rem] max-w-[85rem] mx-auto">
          <div className="md:flex hidden items-center space-x-2 md:space-x-10">
            <a href="/" className="xl:text-4xl lg:text-3xl text-4xl font-bold ">
              <img src={Logo} alt="" className="w-[44px]" />
            </a>
          </div>

          <ul className="hidden items-center space-x-10 md:flex">
            {/* <li className="headerLink">
              <button onClick={handleClickScroll}>Home</button>
            </li> */}
            {location.pathname !== "/experiences" ? (
              <>
                {" "}
                <li className="headerLink">
                  <button onClick={handleAboutScroll}>About</button>
                </li>
                <li className="headerLink">
                  <button onClick={handleStoryScroll}>My Story</button>
                </li>
                <li className="headerLink">
                  <button onClick={handleClickScroll}>Projects</button>
                </li>
                <li className="headerLink">
                  <button onClick={handleContact}>Contact</button>
                </li>
                <li className="headerLink">
                  <Link to={"/experiences"}>Experiences</Link>
                </li>
              </>
            ) : (
              <>
                <li className="headerLink">
                  <Link to={"/"}>Home</Link>
                </li>
              </>
            )}

            <a
              // download="Shefiu Balogun Resume"
              // href={resume}
              target="_blank"
              rel="noreferrer"
              href="https://docs.google.com/document/d/1ONiVVsa0XzVnTfwrYhB_2FzQfukflchZYqcY34kgHJ4/edit?usp=share_link"
              className={`btnnn w-32 py-2 flex justify-center border transition ease-out duration-500 border-black ${
                isScrolled &&
                "transition ease-in duration-300 bg-white text-black"
              } `}
            >
              Resume
            </a>
          </ul>
        </div>
        <div className="flex md:hidden justify-between items-center space-x-2 md:space-x-10">
          <img src={Logo} alt="" className="w-[44px]" />
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="">
            <HiMenuAlt2 className="w-7 h-7" />
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
