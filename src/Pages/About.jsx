import React, { useEffect } from "react";
import Navbar from "../layout/Navbar";
import { motion, useIsPresent, useScroll, useSpring } from "framer-motion";
import { BsChevronDown } from "react-icons/bs";
import MyExperiences from "../components/About/MyExperiences";
import Foote from "../components/Home2/Foote";
const About = () => {
  const { scrollYProgress } = useScroll();
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const isPresent = useIsPresent();
  return (
    <div>
      <Navbar />
      <div className="w-full h-full">
        <div className="w-full h-screen bg-white flex justify-center items-center relative">
          <div className="md:w-[400px]  md:h-[400px] w-[300px] h-[300px] flex title justify-center items-center  rounded-full bg-gray-200">
            <div className="md:w-[150px] md:h-[150px] w-[100px] h-[100px] absolute  rounded-full bg-white"></div>
            <span className=" absolute   font-bold text-[52px]">
              Experiences
            </span>
          </div>
          <div className="w-full flex justify-center bottom-4  absolute">
            <BsChevronDown className="w-12 chevron h-12" />
          </div>
        </div>
        <MyExperiences />
        <Foote />
      </div>{" "}
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{
          scaleX: 0,
          transition: { duration: 1.7, delay: 0.7, ease: "circOut" },
        }}
        exit={{
          scaleX: 1,
          transition: { duration: 1.7, ease: "circIn" },
        }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="privacy-screen"
      />
    </div>
  );
};

export default About;
