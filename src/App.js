import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";
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

            <Route path="about" element={<About />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
      {/* <SideLinks /> */}
    </div>
  );
}

export default App;
