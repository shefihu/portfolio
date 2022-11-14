import React from 'react';
import { motion } from 'framer-motion';
import reactlogo from '../../assets/icons/logo192.png';
import tailwind from '../../assets/icons/tailwind.png';
import javascript from '../../assets/icons/javascript.png';
const Hero = () => {
  const spinTransition = {
    loop: Infinity,
    duration: 15,
    ease: 'linear',
  };
  return (
    <div className="bg-gray-100">
      <div className="w-full 2xl:max-w-[110rem] xl:max-w-[85rem] lg:max-w-[55rem] mx-auto   h-[50rem] lg:flex hidden">
        <div className="w-full h-[50rem] flex justify-between relative">
          <div className="w-[40rem] h-full flex items-center  justify-center ">
            <h1 className="title text-6xl font-semibold z-40 ">
              Hi, <br /> I am Shefiu <br /> A Frontend developer
            </h1>
          </div>
          <div className=" absolute 2xl:w-[35rem] lg:w-[25rem] lg:h-[25rem] 2xl:h-[35rem] bg-white z-20 top-20 2xl:left-[30rem] lg:left-[15rem] rounded-full"></div>
          <div className="w-[50rem] xl:block hidden   h-full relative">
            <div className="w-14 h-14 rounded-full  absolute right-0 bg-gradient-to-r  from-gray-300  top-40"></div>
            <div className="w-20 h-20 rounded-full  absolute bg-gradient-to-r  from-gray-300  left-7 top-40"></div>

            <div className="w-40 h-40 rounded-full  absolute left-40 top-[75%] bg-gradient-to-r  from-gray-300   "></div>
            <div className="w-full  h-80 absolute 2xl:bottom-40 bottom-64 z-40">
              <div className="w-24 h-24 bg-white shadow-blue  rounded-lg absolute flex justify-center items-center bottom-0">
                <img src={reactlogo} alt="" className="w-14 h-14" />
              </div>
              <div className="w-24 h-24 bg-white shadow-red left-40 rounded-lg absolute bottom-20"></div>
              <div className="w-24 h-24 bg-white shadow-green flex justify-center items-center left-80 rounded-lg absolute bottom-40">
                <img
                  src={tailwind}
                  alt=""
                  className="w-14 object-contain h-14"
                />
              </div>
              <div className="w-24 h-24 bg-white shadow-yellow flex justify-center items-center right-[0rem] rounded-lg absolute bottom-40">
                <img src={javascript} alt="" className="w-14 h-14" />
              </div>
              <div className="w-24 h-24 bg-white shadow-pink right-[12rem] rounded-lg absolute bottom-[13rem]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
