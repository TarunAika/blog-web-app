import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../components/Form';
import axios from 'axios';

function SignIn() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {   
    e.preventDefault();

    if (!name || !email || !password) {
        alert("Please fill out all fields");
        return;
    }

    try {
        const result = await axios.post(
            "http://localhost:3000/register",
            { name, email, password },
            { withCredentials: true }
        );

        console.log(result.data);
        alert("Registration successful! Directing to Dashboard");
        navigate("/dashboard");
    } catch (error) {
        if (error.response && error.response.status === 409) {
            alert("User already exists");
        } else {
            console.error("Error during registration:", error);
            alert("An error occurred. Please try again.");
        }
    }
  };

  const loginPage = () => {
    navigate("/login"); 
  };

  return (
    <div className="flex items-center justify-center md:min-h-screen md:bg-gray-100">
      <div className="w-full md:max-w-sm px-6 py-8 bg-white rounded-md md:shadow-md sm:max-w-md lg:max-w-lg">
        <h1 className="text-2xl font-bold text-center sm:text-3xl">Sign In</h1>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <Form labelName={"Name"} onChange={(e) => setName(e.target.value)}/>
          <Form labelName={"Email"} onChange={(e) => setEmail(e.target.value)}/>
          <Form labelName={"Password"} onChange={(e) => setPassword(e.target.value)}/>
          <button type="submit" className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300">Sign In</button>
        </form>

        {/* Route to login page */}
        <div className="mt-4 text-sm text-center text-gray-600 sm:text-base">
          Already have an account?{' '}
          <button onClick={loginPage}  className="text-blue-600 hover:underline">Login</button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
