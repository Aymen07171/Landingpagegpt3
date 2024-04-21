import React from 'react';
import rectangle1 from "../../Project_gpt3/1.svg";
import rectangle2 from "../../Project_gpt3/2.svg";
import rectangle3 from "../../Project_gpt3/3.svg";
import rectangle4 from "../../Project_gpt3/4.svg";
import rectangle6 from "../../Project_gpt3/6.svg";

const Blog = () => {
  return (
    <div className='mb-[50rem]'>
      <div>
        <h1 className='mx-auto mt-10 mb-6 text-4xl font-bold text-center w-80 bg-gradient-to-r from-red-500 to-violet-500 text-transparent bg-clip-text'>A lot is happening, We are blogging about it.</h1>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mx-auto'>
        <div className='bg-blue-900 rounded-lg p-6 text-white'>
          <img src={rectangle6} alt="" className='w-full h-auto mb-4' />
          <p className='mb-2 text-sm'>Sep 26, 2021</p>
          <h2 className='mb-2 text-xl font-semibold'>GPT-3 and Open AI is the future. Let us explore how it is?</h2>
          <p className='text-sm'>Read Full Article</p>
        </div>

        <div className='bg-blue-900 rounded-lg p-6 text-white'>
          <img src={rectangle2} alt="" className='w-full h-auto mb-4' />
          <p className='mb-2 text-sm'>Sep 26, 2021</p>
          <h2 className='mb-2 text-xl font-semibold'>GPT-3 and Open AI is the future. Let us explore how it is?</h2>
          <p className='text-sm'>Read Full Article</p>
        </div>

        <div className='bg-blue-900 rounded-lg p-6 text-white'>
          <img src={rectangle3} alt="" className='w-full h-auto mb-4' />
          <p className='mb-2 text-sm'>Sep 26, 2021</p>
          <h2 className='mb-2 text-xl font-semibold'>GPT-3 and Open AI is the future. Let us explore how it is?</h2>
          <p className='text-sm'>Read Full Article</p>
        </div>

        <div className='bg-blue-900 rounded-lg p-6 text-white'>
          <img src={rectangle4} alt="" className='w-full h-auto mb-4' />
          <p className='mb-2 text-sm'>Sep 26, 2021</p>
          <h2 className='mb-2 text-xl font-semibold'>GPT-3 and Open AI is the future. Let us explore how it is?</h2>
          <p className='text-sm'>Read Full Article</p>
        </div>

        <div className='bg-blue-900 rounded-lg p-6 text-white'>
          <img src={rectangle1} alt="" className='w-full h-auto mb-4' />
          <p className='mb-2 text-sm'>Sep 26, 2021</p>
          <h2 className='mb-2 text-xl font-semibold'>GPT-3 and Open AI is the future. Let us explore how it is?</h2>
          <p className='text-sm'>Read Full Article</p>
        </div>
      </div>
    </div>
  );
}

export default Blog;
