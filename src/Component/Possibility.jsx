import React from 'react';
import featureimg from "../../Project_gpt3/Feature Image.svg";

const Possibility = () => {
  return (
    <div className="flex flex-col md:flex-row items-center mb-10 md:mb-20">
      <div className="md:w-1/2 md:ml-6">
        <img src={featureimg} alt="" className="w-full md:max-w-full md:h-auto" />
      </div>

      <div className="md:w-1/2 md:mr-5 md:mt-8">
        <p className="pb-2 text-blue-300 md:text-xl">Request Early Access to Get Started</p>
        <h1 className="pb-4 bg-gradient-to-r from-red-500 to-violet-500 text-transparent bg-clip-text text-xl md:text-4xl font-bold">The possibilities are beyond your imagination</h1>

        <p className="pb-2 text-blue-400 md:text-lg">Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>

        <p className="pb-4 text-orange-400 md:text-xl">Request Early Access to Get Started</p>
      </div>
    </div>
  );
}

export default Possibility;
