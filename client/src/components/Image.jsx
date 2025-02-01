import React from 'react'

function Image(props) {
  return (
    <div>
        <img className='absolute w-[80vw] md:w-[50vw] bottom-1 right-1 translate-x-[30%] translate-y-[30%]' src={props.imgSrc} alt="layout background" />
    </div>
  )
}

export default Image