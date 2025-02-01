import React from 'react';
import { Link } from 'react-router-dom';

function BlogBtn() {
  return (
    <div>
        <Link to="/blog-form" className='px-4 py-3 text-[16px] bg-[#fb8500] rounded-sm transition-all duration-300 hover:bg-[orange]'>Create Your Blog</Link>
    </div>
  )
}

export default BlogBtn