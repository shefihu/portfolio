import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div class="h-screen w-screen bg-gray-100 flex items-center">
      <div class="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
        <div class="max-w-md">
          <div class="text-5xl font-dark font-bold">404</div>
          <p class="text-2xl md:text-3xl font-light leading-normal">
            Sorry we couldn't find this page.{" "}
          </p>
          <p class="mb-8">
            But dont worry, you can find plenty of other things on our homepage.
          </p>

          <button
            onClick={() => navigate("/")}
            class="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none bg-black"
          >
            back to homepage
          </button>
        </div>
        <div class="max-w-lg"></div>
      </div>
    </div>
  );
};

export default NotFound;
