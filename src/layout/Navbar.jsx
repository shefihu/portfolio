import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else setIsScrolled(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div>
      {' '}
      <header
        className={`w-full  text-black ${
          isScrolled && 'bg-black text-gray-200'
        }`}
      >
        <div className="w-full h-full flex justify-between items-center 2xl:max-w-[110rem] max-w-[85rem] mx-auto">
          <div className="flex items-center space-x-2 md:space-x-10">
            <h1 className="xl:text-4xl lg:text-3xl font-bold ">HEX</h1>
          </div>
          <ul className="hidden items-center space-x-10 md:flex">
            <li className="headerLink">
              <a href="/">Home</a>
            </li>
            <li className="headerLink">
              <a href="/">About</a>
            </li>
            <li className="headerLink">
              <a href="/">Works</a>
            </li>
            <li className="headerLink">
              <a href="/">Experience</a>
            </li>
            <li className="headerLink">
              <a href="/">Contact</a>
            </li>
            <button
              className={`btnnn w-32 py-2 border transition ease-out duration-500 border-black ${
                isScrolled &&
                'transition ease-in duration-300 bg-white text-black'
              } `}
            >
              Resume
            </button>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
