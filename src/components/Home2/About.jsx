import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const About = ({}, ref2) => {
  return (
    <div id="about">
      {/* mobile */}
      <AnimatePresence exitBeforeEnter>
        <div
          ref={ref2}
          className="w-full h-[49rem] relative lg:hidden flex py-10 pt-20 bg-white"
        >
          <div className="w-full h-full  ">
            <div className="w-full h-40 ">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="large-texts  text-center text-2xl"
              >
                Yo, Craft your <br />{" "}
                <span className=" font-semibold  text-3xl">
                  imaginations to life.
                </span>
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-[20px]  mt-5 text-center"
              >
                I develop human centered products with unique modern experiences
              </motion.p>
            </div>
            <div className="w-full h-72  flex justify-center">
              <motion.div
                whileInView={{ height: ["0%", "100%"] }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="w-[2px] bg-black"
              ></motion.div>
            </div>
            <div className="w-full h-40  mt-6">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="large-texts text-center  text-[24px]"
              >
                I build ideas you want <br />
                <span className="text-[32px] font-semibold">on the web.</span>
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-[20px] text-center -neue mt-4"
              >
                Strategic driven solutions for the best user experience
              </motion.p>
            </div>
          </div>
        </div>
        <div
          ref={ref2}
          className="w-full h-full lg:flex items-center justify-center"
        >
          <div className="w-full h-[59rem] max-w-[40rem] relative lg:flex hidden py-10 pt-20 bg-white">
            <div className="w-full h-full  ">
              <div className="w-full h-40 ">
                <motion.h1
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7 }}
                  className="large-texts  text-center text-[48px]"
                >
                  Yo, Craft your <br />{" "}
                  <span className=" font-semibold  text-[60px]">
                    imaginations to life.
                  </span>
                </motion.h1>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="text-[28px]  mt-5 text-center"
                >
                  I develop human centered products with unique modern
                  experiences
                </motion.p>
              </div>
              <div className="w-full h-72  mt-32 flex justify-center">
                <motion.div
                  whileInView={{ height: ["0%", "100%"] }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  className="w-[2px] bg-black"
                ></motion.div>
              </div>
              <div className="w-full h-40  mt-6">
                <motion.h1
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7 }}
                  className="large-texts text-center  text-[48px]"
                >
                  I build ideas you want <br />
                  <span className="text-[60px] font-semibold">on the web.</span>
                </motion.h1>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="text-[28px] text-center -neue mt-4"
                >
                  Strategic driven solutions for the best user experience
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </AnimatePresence>
    </div>
  );
};

export default React.forwardRef(About);
