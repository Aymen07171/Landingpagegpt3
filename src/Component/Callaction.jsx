import React from 'react';

const Callaction = () => {
  return (
    <div className="bg-gradient-to-br from-purple-600 to-orange-400 w-full md:w-[65rem] h-auto md:h-[7rem] rounded-xl mx-auto md:ml-[6rem] mb-10 md:mb-[5rem]">
      <div className="flex flex-col md:flex-row items-center">
        <p className="pt-4 md:pt-0 ml-4 md:ml-[15px] text-sm md:text-base font-bold">Request Early Access to Get Started</p>
        <div className="flex flex-col md:flex-row items-center ml-4 md:ml-[15px] md:mt-2">
          <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-0">Register today & start exploring the endless possibilities.</h3>
          <button className="text-white  mr-[10] py-3 px-10 mb-[40px] bg-black hover:bg-orange-400 rounded-lg ml-4 md:ml-[20rem] md:mt-0">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Callaction;
