import React from 'react';
import TextBox from './TextBox';
import BlogBtn from './BlogBtn';

function UserMap() {
  return (
    <div className='h-[70vh] md:h-[90vh] bg-[#fb8b24] bg-[url("/intro-img/world-bg.png")] bg-cover text-white flex flex-col justify-center items-center'>
        <TextBox 
            title="Join millions of others"
            description="Whether sharing your expertise, breaking news, or whatever’s on your mind, you’re in good company on Blogger. Sign up to discover why millions of people have published their passions here."
            btn = "true"
            align="center"
        />
    </div>
  )
}

export default UserMap