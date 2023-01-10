import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="w-full h-[40rem] py-5  text-black bg-gray-200 flex lg:hidden">
        <div className="w-full h-full px-3 pt-8">
          <div className="w-full flex flex-col items-center space-y-4 justify-center">
            <h1 className="text-3xl large-texts">Get in touch!</h1>
            <p className="text-center text-lg">
              I’m currently open to joining a new team of creative developers.
              Also, if you have a question, proposal, idea or just want to say
              hi, Go ahead.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
