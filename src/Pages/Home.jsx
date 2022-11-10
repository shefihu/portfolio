import React from "react";
import Navbar from "../layout/Navbar";
import { motion } from "framer-motion";
import Hero from "../components/Home/Hero";
import Projects from "../components/Home/Projects";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
    </div>
  );
};

export default Home;
