import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import axios from 'axios';

function BlogPage(props) {
  const { id } = useParams();
  const [blogData, setBlogData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/blog/${id}`, {
          withCredentials: true,
        });
        console.log(response.data.blogs)
        setBlogData(response.data.blogs);
      } catch (err) {
        setError('Failed to fetch blog post.');
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  const formatDate = (dateString) => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    };
    const date = new Date(dateString);
    return date.toLocaleString(undefined, options);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!blogData) return <div>No blog found.</div>;
  
  return (
    <div>
      <Navbar />
      <div className="mt-12 md:mt-16 md:mx-[10%] lg:mx-[20%] xl:mx-[25%]  p-6 pt-8 md:shadow-2xl flex flex-col items-center">
        <div>
          {/* Title container */}
          <div className='py-2 mb-2 border-black border-b-[0.5px]'>
            <h1 className='mb-4 text-3xl text-black font-extrabold text-start'>{blogData[0].title}</h1>
            <p className='text-sm'>By Tarun</p>
          </div>

          <p className='mb-3 text-sm text-gray-400'>{formatDate(blogData[0].time)}</p>

          {/* image container */}
          <div className='overflow-hidden flex justify-center'>
            <img src={blogData[0].image} alt="" className="w-[75%] md:w-[50%] h-auto object-cove max-w-screen-md mx-auto rounded-lg" />
            {/* <p className='text-sm text-gray-500'>{props.imgDescription}</p> */}
          </div>

          <p className="pt-4 text-xl whitespace-pre-line">{blogData[0].content}</p>
       </div>       
      </div>
    </div>
  )
}

export default BlogPage