import React, { useRef } from "react";
import Navbar from "../layout/Navbar";
import { motion, useIsPresent } from "framer-motion";
// import Hero from "../components/Home/Hero";
import Projects from "../components/Home/Projects";
import Hero from "../components/Home2/Hero";
import About from "../components/Home2/About";
import MyStory from "../components/Home2/MyStory";
import MyProjects from "../components/Home2/MyProjects";
import Contact from "../components/Home2/Contact";
import Foote from "../components/Home2/Foote";
import SmoothScroll from "../global/SmoothScroll";
const Home = () => {
  const handleAboutScroll = () => {
    const element = document.getElementById("about");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleStoryScroll = () => {
    const element = document.getElementById("story");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const handleHomeScroll = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const isPresent = useIsPresent();
  return (
    <div>
      <Navbar
        handleClickScroll={handleHomeScroll}
        // handleStoryScroll={handleStoryScroll}
        // handleAboutScroll={handleAboutScroll}
      />
      {/* <SmoothScroll> */}
      <Hero ref={ref} />
      <About id="about" />
      <MyStory />
      <MyProjects />
      <Contact />
      <Foote />
      {/* </SmoothScroll> */}
      {/* <Hero /> */}
      {/* <Projects /> */}
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{
          scaleX: 0,
          transition: { duration: 1.7, delay: 0.5, ease: "circOut" },
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

export default Home;
