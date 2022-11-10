import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
const Spinner = () => {
  const [filled, setFilled] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  useEffect(() => {
    if (filled < 100 && isRunning) {
      setTimeout(() => setFilled((prev) => (prev += 1)), 25);
    }
  }, [filled, isRunning]);
  return (
    <div>
      <motion.div className=" w-full h-screen flex space-x-4 flex-col justify-center items-center bg-black">
        {/* <div className="w-60 bg-gray-300 h-10 rounded-l-xl rounded-r-xl"></div> */}
        <div className="hexathron w-full "></div>
        <div className=" flex space-x-4">
          <h1 className="text-white text-3xl">Hexa </h1>
          <motion.span
            className="text-white text-4xl"
            whileInView={() => {
              setIsRunning(true);
            }}
          >
            ({filled}%)
          </motion.span>
          <h1 className="text-white text-3xl"> Thron</h1>
        </div>
      </motion.div>
    </div>
  );
};

export default Spinner;
