import React from "react";
import { projects } from "../../data/projects";
import { BiArrowToRight, BiLinkExternal } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
const MyProjects = () => {
  return (
    <div>
      <div className="w-full h-full py-5 pb-20 text-black bg-white flex lg:hidden">
        <div className="w-full h-full px-3 pt-8">
          <h1 className="text-[32px] large-texts">My Projects</h1>
          <p>Each one has it's own unique ability</p>
          <div className="w-full mt-6 grid grid-cols-1 gap-y-10">
            {projects.map((project, index) => {
              return (
                <div key={index} className="min-h-[100%]  ">
                  <div className="w-full rounded-xl overflow-hidden bg-gray-200">
                    <img src={project.image} alt="" />
                  </div>
                  <div className="flex justify-between mt-5 items-center">
                    <div className="flex space-x-2 items-end ">
                      <h1 className="text-lg">{project.id}</h1>
                      <h1 className="text-2xl large-texts font-bold">
                        {project.name}
                      </h1>
                    </div>
                    <div className="flex space-x-3">
                      <a href="">
                        <BiLinkExternal className="w-5 h-5" />
                      </a>
                      {project?.githubLink !== undefined ? (
                        <a href="">
                          <AiFillGithub className="w-5 h-5" />
                        </a>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-lg">{project.about}</p>
                    <p className="text-lg mt-2">
                      Skills/Tools : {project.tools}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className=" w-full h-full justify-center flex items-center">
            <a
              href="https://github.com/shefihu"
              className="flex space-x-3 text-xl h-full items-center mt-6"
            >
              <span>View more on my Github </span>
              <BiArrowToRight className="animate-bounce w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full h-full max-w-[95rem] mx-auto py-5 pb-20 text-black bg-white hidden lg:flex">
        <div className="w-full h-full px-3 pt-8">
          <h1 className="text-[32px] large-texts">My Projects</h1>
          <p>Each one has it's own unique ability</p>
          <div className="w-full mt-6 grid grid-cols-3  gap-5">
            {projects.map((project, index) => {
              return (
                <div key={index} className="min-h-[100%]  ">
                  <div className="w-full h-[20rem] rounded-xl overflow-hidden bg-gray-200">
                    <img
                      src={project.image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex justify-between mt-5 items-center">
                    <div className="flex space-x-2 items-end ">
                      <h1 className="text-lg">{project.id}</h1>
                      <h1 className="text-2xl large-texts font-bold">
                        {project.name}
                      </h1>
                    </div>
                    <div className="flex space-x-3">
                      <a href="">
                        <BiLinkExternal className="w-5 h-5" />
                      </a>
                      {project?.githubLink !== undefined ? (
                        <a href="">
                          <AiFillGithub className="w-5 h-5" />
                        </a>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-lg">{project.about}</p>
                    <p className="text-lg mt-2">
                      Skills/Tools : {project.tools}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className=" w-full h-full justify-center flex items-center">
            <a
              href="https://github.com/shefihu"
              className="flex space-x-3 text-xl h-full items-center mt-6"
            >
              <span>View more on my Github </span>
              <BiArrowToRight className="animate-bounce w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
