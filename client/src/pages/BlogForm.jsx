import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../components/Form';
import axios from 'axios';

function BlogForm() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !image || !content) {
      alert("Please fill out all fields");
      return;
    }
  
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("image", image); 
    
    console.log([...formData]);
    try {
      const result = await axios.post("http://localhost:3000/upload", formData, {
        withCredentials: true, 
        headers: { "Content-Type": "multipart/form-data" }, 
      });
  
      console.log(result.data);
      alert("Blog is created successfully!");
      navigate("/dashboard");
    } catch (error) {
      console.error("Error during blog creation:", error);
      alert("An error occurred. Please try again.");
    }
  };
  

  return (
    <div className='p-6 md:p-10'>
      <h1 className="mb-5 text-3xl text-center font-bold">Create your Blog</h1>
      <form onSubmit={(e) => handleSubmit(e)} className='p-4 bg-gray-300 space-y-4 rounded-md'>
        {/* blog title input */}
        <div>
          <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-700">Blog Title</label>
          <textarea
            id="blogTitle"
            placeholder="Write your title name here..."
            onChange={(e) => setTitle(e.target.value)}
            className="block w-full px-3 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-base h-40 resize-none overflow-y-auto"
          />
        </div>

        {/* image input */}
        <Form labelName="Image" inputType="file" acceptedFileType="image/*" onChange={(e) => setImage(e.target.files[0])} />

        {/* blog description input */}
        <div>
          <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-700">Content for your Blog</label>
          <textarea
            id="description"
            placeholder="Write your description here..."
            onChange={(e) => setContent(e.target.value)}
            className="block w-full px-3 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-base h-40 resize-none overflow-y-auto"
          />
        </div>

        {/* Create Blog Button */}
        <button 
          type="submit" 
          onClick={(e) => handleSubmit(e, false)}  // Pass false for just creating blog
          className="w-full px-4 py-2 text-white bg-black rounded-md hover:bg-gray-500 focus:outline-none focus:ring duration-200 transition-all focus:ring-blue-300"
        >
          Create Blog
        </button>

        {/* Create Blog and View Button */}
        {/* <button 
          type="submit" 
          onClick={(e) => handleSubmit(e, true)}  // Pass true to create blog and view it
          className="w-full px-4 py-2 text-white bg-gray-500 rounded-md hover:bg-black focus:outline-none focus:ring focus:ring-blue-300"
        >
          Create and View Page
        </button> */}
      </form>
    </div>
  );
}

export default BlogForm;
