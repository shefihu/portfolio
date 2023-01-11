import React from "react";
import { AiFillMail, AiFillPhone } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { IoLocationSharp } from "react-icons/io5";

const Contact = () => {
  return (
    <div>
      <div className="w-full h-full py-5  text-black bg-gray-200 flex lg:hidden">
        <div className="w-full h-full px-3 pt-8">
          <div className="w-full flex flex-col items-center space-y-4 justify-center">
            <h1 className="text-3xl large-texts">Get in touch!</h1>
            <p className="text-center text-lg">
              I’m currently open to joining a new team of creative developers.
              Also, if you have a question, proposal, idea or just want to say
              hi, Go ahead.
            </p>
          </div>
          <div className="w-full h-40 space-y-3  mt-10">
            <div className="w-full items-center text-lg flex space-x-4">
              <IoLocationSharp className="w-6 h-6" />
              <h1>Lagos, Nigeria</h1>
            </div>
            <div className="w-full items-center text-lg flex space-x-4">
              <AiFillPhone className="w-6 h-6" />
              <h1>+234 706 893 1054</h1>
            </div>
            <div className="w-full items-center text-lg flex space-x-4">
              <AiFillMail className="w-6 h-6" />
              <h1>shefiub0@gmail.com</h1>
            </div>
          </div>
          <form className="w-full space-y-7 ">
            <div className="w-full flex flex-col">
              <h1 className="text-xl">Name</h1>
              <input
                type="text"
                className="border-b py-2 px-3 border-b-black outline-none bg-transparent"
              />
            </div>
            <div className="w-full flex flex-col">
              <h1 className="text-xl">Email Address</h1>
              <input
                type="email"
                className="border-b py-2 px-3 border-b-black outline-none bg-transparent"
              />
            </div>
            <div className="w-full flex flex-col">
              <h1 className="text-xl">Subject</h1>
              <input
                type="text"
                className="border-b py-2 px-3 border-b-black outline-none bg-transparent"
              />
            </div>
            <div className="w-full flex flex-col">
              <h1 className="text-xl">Message</h1>
              <textarea className="border-b resize-none py-2 px-3 border-b-black outline-none bg-transparent"></textarea>
            </div>
            <button className="w-[14rem] border border-black rounded-full py-3">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
