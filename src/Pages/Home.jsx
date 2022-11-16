import React from "react";
import Navbar from "../layout/Navbar";
import { motion, useIsPresent } from "framer-motion";
import Hero from "../components/Home/Hero";
import Projects from "../components/Home/Projects";
const Home = () => {
  const isPresent = useIsPresent();
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{
          scaleX: 0,
          transition: { duration: 0.5, delay: 0.5, ease: "circOut" },
        }}
        exit={{
          scaleX: 1,
          transition: { duration: 0.5, ease: "circIn" },
        }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="privacy-screen"
      />
    </div>
  );
};

export default Home;
