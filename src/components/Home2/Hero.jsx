import React, { useEffect, useState } from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import me from "../../assets/images/home/me.png";
import { AnimatePresence, motion } from "framer-motion";
import dev from "../../assets/icons/dev.png";
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

  return (
    <div>
      {/* mobile */}
      <AnimatePresence exitBeforeEnter>
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
            <div
              href="#_"
              class="rounded-full cursor-pointer w-8 h-8 flex justify-center items-center border-gray-500 border hover:bg-black hover:text-white transition ease-in duration-300"
            >
              <AiFillGithub className="w-5 h-5" />
            </div>
            <div
              href="#_"
              class="rounded-full cursor-pointer w-8 h-8 flex justify-center items-center border-gray-500 border hover:bg-black hover:text-white transition ease-in duration-300"
            >
              <AiFillLinkedin className="w-5 h-5" />
            </div>
            <div
              href="#_"
              class="rounded-full cursor-pointer w-8 h-8 flex justify-center items-center border-gray-500 border hover:bg-black hover:text-white transition ease-in duration-300"
            >
              <AiOutlineTwitter className="w-5 h-5" />
            </div>
            <div
              href="#_"
              class="rounded-full cursor-pointer w-8 h-8 flex justify-center items-center border-gray-500 border hover:bg-black hover:text-white transition ease-in duration-300"
            >
              <img src={dev} alt="" className="w-5 h-5" />
            </div>
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
      </AnimatePresence>
    </div>
  );
};

export default Hero;
