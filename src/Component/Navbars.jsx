import React, { useState } from 'react';
import logo from "../../Project_gpt3/logo.svg";

const Navbars = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="max-w-screen-xl mx-auto px-6 md:px-10">
      <div className="flex justify-between items-center py-6 md:py-8">
        <img className="w-12 md:w-16" src={logo} alt="Logo" />
        <button
          className="md:hidden block text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6H20V8H4V6ZM20 11H4V13H20V11ZM4 18H20V20H4V18Z"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6H20V8H4V6ZM4 11H20V13H4V11ZM4 16H20V18H4V16Z"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Menu items */}
      <ul
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } md:flex md:items-center md:justify-between md:space-x-8 text-white`}
      >
        <li>
          <a href="#" className="hover:text-gray-300">Home</a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-300">What's GPT</a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-300">Open AI</a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-300">Case Studies</a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-300">Library</a>
        </li>
        <li>
          <button className="text-white hover:text-gray-300 focus:outline-none">Sign in</button>
        </li>
        <li>
          <button className="text-white py-2 px-5 border-b-4 border-orange-500 bg-orange-500 hover:bg-orange-400 rounded-lg focus:outline-none">Sign up</button>
        </li>
      </ul>
    </div>
  );
}

export default Navbars;
