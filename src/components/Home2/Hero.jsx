import React, { useEffect, useRef, useState } from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import me from "../../assets/images/home/me.png";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import dev from "../../assets/icons/dev.png";
import SmoothScroll from "../../global/SmoothScroll";
import { eventWrapper } from "@testing-library/user-event/dist/utils";
const blinkVariants = {
  closed: {
    scaleY: 0,
    transition: { duration: 0.1 },
  },
  open: {
    scaleY: 1,
    transition: { duration: 0.1 },
  },
};
const Hero = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.pageYOffset <= 4450);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
  const [isOpen, setIsOpen] = useState(true);
  const eyeRef = useRef(null);
  const retinaRef = useRef(null);
  const blink = useAnimation();

  // useEffect(() => {
  //   const handleMouseMove = (e) => {
  //     setCursorX(e.clientX);
  //     setCursorY(e.clientY);
  //   };
  //   document.addEventListener("mousemove", handleMouseMove);
  //   return () => {
  //     document.removeEventListener("mousemove", handleMouseMove);
  //   };
  // }, []);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIsOpen(!isOpen);
  //   }, 2000);
  //   return () => clearInterval(interval);
  // }, [isOpen]);

  // useEffect(() => {
  //   const retina = retinaRef.current;
  //   const eye = eyeRef.current;
  //   if (!eye || !retina) return;
  //   const eyeBox = eye.getBoundingClientRect();
  //   const x = cursorX - eyeBox.left - eyeBox.width / 2;
  //   const y = cursorY - eyeBox.top - eyeBox.height / 2;
  //   retina.style.transform = `translate(${x}px, ${y}px)`;
  // }, [cursorX, cursorY]);

  useEffect(() => {
    const eye = document.querySelectorAll(".eyes");
    document
      .querySelector("body")
      .addEventListener("mousemove", handleMouseMove);

    function handleMouseMove(e) {
      eye.forEach((eye) => {
        let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
        let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
        let radian = Math.atan2(e.pageX - x, e.pageY - y);
        let rotate = radian * (180 / Math.PI) * -1 + 270;
        eye.style.transform = `rotate(${rotate}deg)`;
      });
    }
    return () => {
      document
        .querySelector("body")
        .removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="w-full bg-gray-100 ">
      <AnimatePresence exitBeforeEnter>
        {/* mobile */}
        <div className="w-full h-[45rem] relative lg:hidden flex pt-20 bg-gray-100">
          <div className="w-full  space-y-10 h-full flex justify-center flex-col">
            <div className="w-full h-[14rem] ">
              <motion.h1
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="text-[42px] font-[600] text-center large-texts "
              >
                Shefiu R.B
              </motion.h1>
              <motion.p
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className=" text-[24px] text-center"
              >
                I'm a creative{" "}
                <span className=" font-semibold">
                  &nbsp;Frontend developer&nbsp;
                </span>
                passionate about converting ideas into standard and scalable
                products.
              </motion.p>
            </div>
            <div className="w-full h-[20rem] flex justify-center  ">
              <div className="w-80 h-80 rounded-full bg-white flex justify-center overflow-hidden items-center">
                <div className=" md:max-w-[7.5rem] max-w-[7.5rem] ">
                  <motion.img
                    initial={{ opacity: 0, x: "100px" }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    whileTap={{ scale: 1.2 }}
                    src={me}
                    drag
                    dragConstraints={{
                      top: -50,
                      left: -50,
                      right: 50,
                      bottom: 50,
                    }}
                    alt=""
                    // className="animate-bounce lg:animate-ping"
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            className={`${
              isSticky ? "block" : "hidden"
            } w-10 h-40 fixed  z-20 2xl:-left-10 lg:left-5 left-3 bottom-10 flex-col space-y-4`}
          >
            <a
              href="#_"
              className="rounded-full cursor-pointer w-8 h-8 flex justify-center items-center border-gray-500 border hover:bg-black hover:text-white transition ease-in duration-300"
            >
              <AiFillGithub className="w-5 h-5" />
            </a>
            <a
              href="#_"
              classNAme="rounded-full cursor-pointer w-8 h-8 flex justify-center items-center border-gray-500 border hover:bg-black hover:text-white transition ease-in duration-300"
            >
              <AiFillLinkedin className="w-5 h-5" />
            </a>
            <a
              href="#_"
              className="rounded-full cursor-pointer w-8 h-8 flex justify-center items-center border-gray-500 border hover:bg-black hover:text-white transition ease-in duration-300"
            >
              <AiOutlineTwitter className="w-5 h-5" />
            </a>
            <a
              href="#_"
              className="rounded-full cursor-pointer w-8 h-8 flex justify-center items-center border-gray-500 border hover:bg-black hover:text-white transition ease-in duration-300"
            >
              <img src={dev} alt="" className="w-5 h-5" />
            </a>
          </div>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-14 h-14 rounded-full   absolute right-2 bg-gradient-to-r  from-gray-300  top-80"
          ></motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-14 h-14 rounded-full   absolute left-2 bg-gradient-to-r  from-gray-300  top-40"
          ></motion.div>
        </div>
        {/* desktop */}
        {/* <SmoothScroll> */}
        <div className="w-full h-[45rem] lg:flex hidden mx-auto 2xl:max-w-[110rem] lg:max-w-[75rem]">
          <div className="w-full h-full lg:px-6 xl:px-0 flex items-center pt-20 justify-between">
            <div className="w-[47%] h-[20rem]  ">
              <div className="flex space-x-4 items-center">
                <motion.h1
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="lg:text-[50px] xl:text-[82px] font-[600]  large-texts "
                >
                  Shefiu R.B
                </motion.h1>
                <div className="container-eyes">
                  <div className="eyes"></div>
                  <div className="eyes"></div>
                </div>
              </div>
              <motion.p
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className=" text-[34px] "
              >
                I'm a creative{" "}
                <span className=" font-semibold">
                  &nbsp;Frontend developer&nbsp;
                </span>
                passionate about converting ideas into standard and scalable
                products.
              </motion.p>
            </div>
            <div className="w-[50%] h-[35rem] flex justify-center items-center">
              <div className="w-[35rem] h-[35rem] rounded-full overflow-hidden bg-white flex items-center justify-center">
                <div className=" lg:max-w-[20.5rem] max-w-[20.5rem] ">
                  <motion.img
                    initial={{ opacity: 0, x: "100px" }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    whileTap={{ scale: 1.2 }}
                    src={me}
                    drag
                    dragConstraints={{
                      top: -50,
                      left: -50,
                      right: 50,
                      bottom: 50,
                    }}
                    alt=""
                    // className="animate-bounce lg:animate-ping"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </SmoothScroll> */}
      </AnimatePresence>
    </div>
  );
};

export default Hero;
//  <motion.div
//    ref={eyeRef}
//    animate={isOpen ? "open" : "closed"}
//    variants={blinkVariants}
//    style={{
//      width: "60px",
//      height: "35px",
//      background: "white",
//      borderRadius: "50%",
//      transform: "rotate(15deg)",
//      overflow: "hidden",
//      position: "relative",
//    }}
//  >
//    <motion.div
//      ref={retinaRef}
//      style={{
//        width: "20px",
//        height: "20px",
//        background: "black",
//        borderRadius: "50%",
//        position: "absolute",
//        top: 0,
//        left: 0,
//        transform: "translate(0, 0)",
//      }}
//    />
//  </motion.div>;
