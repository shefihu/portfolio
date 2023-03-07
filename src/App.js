import { AnimatePresence,motion,useMotionValue,useSpring } from "framer-motion";
import { lazy, Suspense,useEffect } from "react";
import { Route, Routes, useLocation, useRoutes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import SideLinks from "./global/SideLinks";
import Spinner from "./global/Spinner";
import About from "./Pages/About";
import NotFound from "./Pages/NotFound";

const Home = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./Pages/Home")), 3000);
  });
});
// const routes = [{ path: "", element: <Home /> }];
function App() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  // const element = useRoutes(routes);
  const location = useLocation();
  return (
    <div className="App">
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Suspense fallback={<Spinner />}>
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />

            <Route path="experiences" element={<About />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
      <motion.div
        className="cursor"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
      />
      {/* <SideLinks /> */}
    </div>
  );
}

export default App;
