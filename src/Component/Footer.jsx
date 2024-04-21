import React from 'react';
import logo from "../../Project_gpt3/logo.svg";

const Footer = () => {
  return (
    <div className="bg-blue-900 w-full md:w-[81rem] h-auto md:h-[40rem] mt-[-40rem] mx-auto">
      <div>
        <h1 className="bg-gradient-to-r from-red-500 to-violet-500 text-transparent bg-clip-text text-4xl md:text-5xl font-bold max-w-md md:max-w-[40rem] pt-16 md:pt-24 mx-auto text-center md:text-left">
          Do you want to step into the future before others
        </h1>
        <button className="text-white border-2 border-solid border-white py-3 px-6 mt-8 md:mt-12 ml-70 md:ml-[30rem] mb-[5rem] hover:bg-orange-400 block mx-auto md:inline-block">
          Request Early Access
        </button>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-start mx-auto md:ml-7 mt-8 md:mt-16">
        <div className="text-white mx-auto md:mx-0 md:mr-10">
          <img className="w-24 md:w-32 mx-auto md:mx-0" src={logo} alt="Logo" />
          <p className="text-xs md:text-sm max-w-md md:max-w-full text-center md:text-left mx-auto md:mx-0 md:ml-5 pt-2">
            Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
          </p>
        </div>
        <div className="flex flex-col md:flex-row text-white mx-auto md:mx-0 md:ml-10 mt-8 md:mt-0">
          <div className="flex flex-col pr-8 md:pr-16">
            <h3 className="pb-2 md:pb-4">Links</h3>
            <a href="#">Over ons</a>
            <a href="#">Social Media</a>
            <a href="#">Counters</a>
            <a href="#">Contact</a>
          </div>
          <div className="flex flex-col pr-8 md:pr-16">
            <h3 className="pb-2 md:pb-4">Company</h3>
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Counters</a>
            <a href="#">Contact</a>
          </div>
          <div className="flex flex-col w-full md:w-[15rem]">
            <h3 className="pb-2 md:pb-4">Get in touch</h3>
            <a href="#">Crechterwoord K12 182 DK Alknjkcb</a>
            <a href="#">085-132567</a>
            <a href="#">info@payme.net</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
