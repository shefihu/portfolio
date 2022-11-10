import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";
import { Route, Routes, useLocation, useRoutes } from "react-router-dom";
import Spinner from "./global/Spinner";

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
      <Suspense fallback={<Spinner />}>
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </div>
  );
}

export default App;
