import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import axios from 'axios';

function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(null);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/user", {
          withCredentials: true, 
        });

        console.log("User Data:", response.data); // Debugging
        setUser(response.data.user.name);
        setUserId(response.data.user.id)
        setBlogs(response.data.blogs); 
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, []);

  const goToBlog = async (id) => {
    // try {
    //   const response = await axios.get(`http://localhost:3000/${userId}/${id}`, {
    //     withCredentials: true, 
    //   });
    // } catch (error) {
      
    // }

    navigate(`/blog/${id}`);
  }
  
  const handleSubmit = (e) => {
    navigate("/blog-form");
  };

  return (
    <div>
      <Navbar />
      <div className="mt-16 md:mt-20 px-4 md:px-12 md:py-3 ">
        <h1 className='text-3xl font-semibold'>Hi, {user}</h1>
        <div className="mt-10 p-4 bg-gray-300 rounded-md grid grid-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">

          {blogs.length > 0 ? (
            blogs.map(blog => (
              <div key={blog.id} onClick={() => goToBlog(blog.id)} className="p-2 h-72 bg-white rounded-md cursor-pointer transition-all duration-200 hover:shadow-2xl">
                <div className='image mb-2 h-52 bg-amber-200 rounded-md flex justify-center overflow-hidden'>
                  <img src={blog.image} alt="" className='w-full h-full object-cover rounded-md' />
                </div>
                <span className='font-semibold'>{blog.title}</span>
              </div>
            ))) : (
              <p className="text-gray-600">No blogs available</p>
            )}


        </div>
      </div>

      <button onClick={handleSubmit} className='px-3 py-2 text-white bg-orange-500 rounded-sm flex items-center gap-1 fixed bottom-4 right-4 md:bottom-12 md:right-12'>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
         <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
        </svg>
        Create
      </button>
    </div>
  );
}

export default Dashboard;