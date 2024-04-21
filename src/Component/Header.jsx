import React from 'react';
import headimg from "../../Project_gpt3/Header Illustration.svg";
import peoplgroup from "../../Project_gpt3/Groups.svg"
import companieslogos from "../../Project_gpt3/Comapnies Logo.svg";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center md:items-start relative z-0">
      <div className="md:max-w-md md:ml-10 md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-500 to-violet-500 text-transparent bg-clip-text mb-6 md:mb-8 px-6 md:px-0  md:mt-[50px] lg:w-[23rem]">
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p className="text-white mb-6 md:mb-8 max-w-sm md:max-w-md px-6 md:px-0">
          Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
        </p>
        <div className="flex flex-col md:flex-row items-center md:max-w-md px-6 md:px-0">
          <input className="w-full md:w-64 py-3 px-4 rounded-l-lg rounded-r-none mb-4 md:mb-0 " type="text" />
          <button className="bg-orange-500 hover:bg-orange-400 text-white border border-orange-500 py-3 px-6 rounded-l-none rounded-r-lg">
            Get Started
          </button>
        </div>
        <div className='flex flex-row'>
        <img className='w-[100rem] md:p-[10px] ' src={peoplgroup} alt="" />
        <p className="text-white   text-sm max-w-sm md:max-w-md px-6 md:px-0 mt-4 md:mt-6">
          1,600 people requested access a visit in the last 24 hours
        </p>
        </div>
       
        <img className="p-[20px] md:w-[100rem] md:mt-6"  src={companieslogos} alt="" />

      </div>
      <img className="w-full md:w-100 md:mt-6 md:-ml-20 z-10 lg:ml-[15rem] lg:w-[30rem]" src={headimg} alt="" />
    </div>
  );
}

export default Header;
