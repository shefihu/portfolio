import React from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { DiReact } from "react-icons/di";
import { useLocation } from "react-router-dom";
import dev from "../../assets/icons/dev.png";

const Foote = () => {
  const location = useLocation();
  return (
    <div>
      <div
        className={
          location.pathname !== "/experiences"
            ? "w-full px-3 flex lg:hidden h-[30rem] bg-black text-white"
            : "w-full px-3 flex lg:hidden h-[30rem] bg-black text-white"
        }
      >
        <div className="w-full h-full flex flex-col space-y-8 items-center justify-center">
          <div className="w-full max-w-[40rem] relative flex justify-center">
            <h1 className="experiences md:text-[60px] text-[34px] z-10 font-bold">
              Let's Work Together
            </h1>
            <div className="md:w-[70px] md:h-[70px] w-[40px] absolute right-0 h-[40px] bg-gradient-to-r  from-gray-500 via-gray-600 rounded-full to-gray-700"></div>
          </div>
          <h1 className="text-2xl text-center">
            "Bringing ideas to life, one pixel at a time 🤙"
          </h1>
          <div className="flex space-x-5">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/shefihu"
              className="rounded-full cursor-pointer w-8 h-8 flex justify-center items-center border-gray-500 border hover:bg-black hover:text-white transition ease-in duration-300"
            >
              <AiFillGithub className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/shefiu-balogun-726a8a240/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full cursor-pointer w-8 h-8 flex justify-center items-center border-gray-500 border hover:bg-black hover:text-white transition ease-in duration-300"
            >
              <AiFillLinkedin className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/Shefihuuu"
              target="_blank"
              rel="noreferrer"
              className="rounded-full cursor-pointer w-8 h-8 flex justify-center items-center border-gray-500 border hover:bg-black hover:text-white transition ease-in duration-300"
            >
              <AiOutlineTwitter className="w-5 h-5" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://dev.to/shefihu"
              className="rounded-full cursor-pointer w-8 h-8 flex justify-center items-center border-gray-500 border hover:bg-black hover:text-white transition ease-in duration-300"
            >
              <img src={dev} alt="" className="w-5 h-5" />
            </a>
          </div>
          <div>
            <p className="experiences">
              Ⓒ 2023 Built by Rotimi. Designed by Rotimi
            </p>
            <p className="flex experiences mt-2 space-x-2 items-center justify-center">
              <span>Built using</span>
              <DiReact className="text-blue-300 w-6 h-6" />{" "}
              <span> with ❤️</span>
            </p>
          </div>
        </div>
      </div>
      <div
        className={
          location.pathname !== "/experiences"
            ? "w-full px-3 hidden lg:flex h-[30rem] bg-black mt-4 text-white"
            : "w-full px-3 hidden lg:flex h-[30rem] bg-black  text-white"
        }
      >
        <div className="w-full h-full flex flex-col space-y-8 items-center justify-center">
          <div className="w-full max-w-[40rem] relative flex justify-center">
            <h1 className="experiences text-[70px] z-10 font-bold">
              Let's Work Together
            </h1>
            <div className="w-[100px] absolute right-0 h-[100px] bg-gradient-to-r  from-gray-500 via-gray-600 rounded-full to-gray-700"></div>
          </div>
          <h1 className="text-2xl text-center">
            "Bringing ideas to life, one pixel at a time 🤙"
          </h1>

          <div className="flex space-x-5">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/shefihu"
              className="rounded-full cursor-pointer w-8 h-8 flex justify-center items-center border-gray-500 border hover:bg-black hover:text-white transition ease-in duration-300"
            >
              <AiFillGithub className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/shefiu-balogun-726a8a240/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full cursor-pointer w-8 h-8 flex justify-center items-center border-gray-500 border hover:bg-black hover:text-white transition ease-in duration-300"
            >
              <AiFillLinkedin className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/Shefihuuu"
              target="_blank"
              rel="noreferrer"
              className="rounded-full cursor-pointer w-8 h-8 flex justify-center items-center border-gray-500 border hover:bg-black hover:text-white transition ease-in duration-300"
            >
              <AiOutlineTwitter className="w-5 h-5" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://dev.to/shefihu"
              className="rounded-full cursor-pointer w-8 h-8 flex justify-center items-center border-gray-500 border hover:bg-black hover:text-white transition ease-in duration-300"
            >
              <img src={dev} alt="" className="w-5 h-5" />
            </a>
          </div>
          <div>
            <p className="experiences">
              Ⓒ 2023 Built by Rotimi. Designed by Rotimi
            </p>
            <p className="flex experiences mt-2 space-x-2 items-center justify-center">
              <span>Built using</span>
              <DiReact className="text-blue-300 w-6 h-6" />{" "}
              <span> with ❤️</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foote;
