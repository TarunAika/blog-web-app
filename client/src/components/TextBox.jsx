import React from 'react'
import BlogBtn from './BlogBtn'

function TextBox(props) {
  return (
    <div className={`content w-full md:w-[65%] py-[5vh] px-[10vw] flex flex-col ${props.align === 'center' ? 'justify-center items-center' : 'justify-start'}`} >
        <h2 className={`m-4 ml-0 text-2xl md:text-4xl font-thin ${props.align === 'center' ? 'text-center' : 'text-start'}`}>{props.title}</h2>
        <p className={`mb-12 text-base md:text-2xl font-thin ${props.align === 'center' ? 'text-center' : 'text-start'}`}>{props.description}</p>
        {props.btn && <BlogBtn />}
    </div>

  )
}

export default TextBox