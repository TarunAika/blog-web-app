import React from 'react';
import BlogBtn from "./BlogBtn";
import TextBox from './TextBox';

function Intro() {
  return (
    <div className='w-full h-screen bg-red-600 text-white flex flex-col justify-center'>
        <div className="h-[50%] my-10 hero flex flex-col items-center justify-center">
          <TextBox 
            title="Your Gateway to Sharing Stories and Ideas"
            description="Create a unique and beautiful blog easily."
            btn = "true"
            align="center"
          />
        </div>

        <div className='h-[50%] flex justify-center relative overflow-hidden'>
          <img className='absolute w-1/3 bottom-10 left-2 sm:w-1/4 lg:w-1/5 sm:bottom-10 sm:left-10 translate-x-[-50%] translate-y-[50%]' src="./intro-img/dish.png" alt="dish" />
          <img className='w-[20%] md:w-[10%] absolute bottom-30 left-2 md:left-10 translate-x-[-50%] translate-y-[30%] hidden md:block' src="./intro-img/stick.png" alt="stick" />
          <img className='w-[40%] md:w-[50%] h-auto hidden md:block' src="./intro-img/food-blog.png" alt="" />
          <img className='w-[20%] md:w-[10%] absolute bottom-30 right-2 md:right-10 translate-x-[50%] translate-y-[50%] hidden md:block' src="./intro-img/roti.png" alt="roti" />
          <img className="absolute w-1/3 bottom-10 right-2 sm:w-1/4 lg:w-1/5 sm:bottom-10 sm:right-10 translate-x-[50%] translate-y-[50%]"src="./intro-img/dish2.png" alt="Dish 2" />
        </div>
    </div>
  )
}

export default Intro