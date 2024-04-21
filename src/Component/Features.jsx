import React from 'react';
import background from "../../Project_gpt3/5.svg";

const Features = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start mb-8 md:mb-0 md:space-x-10">

      <div className="md:w-1/2">
        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-red-500 to-violet-500 text-transparent bg-clip-text mb-4 md:mb-6 max-w-md">
          The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.
        </h1>
        <p className="text-sm md:text-base bg-gradient-to-r from-red-500 to-violet-500 text-transparent bg-clip-text mb-4 md:mb-6 max-w-md">
          Request Early Access to Get Started
        </p>
      </div>

      <div className="md:w-1/2 relative">
        <div className="grid grid-rows-4 gap-y-6 md:max-w-lg md:ml-[-3rem]">
          <div className="flex flex-col md:flex-row items-center text-white">
            <h2 className="w-[150px] md:w-auto font-bold pt-4 md:pt-0">Improving end distrusts instantly</h2>
            <p className="ml-4 md:ml-6 max-w-md text-gray-400">
              From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center text-white">
            <h2 className="w-[150px] md:w-auto font-bold pt-4 md:pt-0">Become the tended active</h2>
            <p className="ml-4 md:ml-6 max-w-md text-gray-400">
              Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center text-white">
            <h2 className="w-[150px] md:w-auto font-bold pt-4 md:pt-0">Message or am nothing</h2>
            <p className="ml-4 md:ml-6 max-w-md text-gray-400">
              Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center text-white">
            <h2 className="w-[150px] md:w-auto font-bold pt-4 md:pt-0">Really boy law county</h2>
            <p className="ml-4 md:ml-6 max-w-md text-gray-400">
              Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
