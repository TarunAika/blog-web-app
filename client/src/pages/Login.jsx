import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Form from '../components/Form';
import axios from 'axios';

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {   
    e.preventDefault();
    if (!email || !password) {
        alert("Please fill out all fields");
        return;
    }
    try {
      const result = await axios.post(
        "http://localhost:3000/login",
        { email, password },
        { withCredentials: true }
      );
      console.log(result.data);
      alert("Login successful! Redirecting to Dashboard");
      navigate("/dashboard");
    } catch (error) {
      console.error("Error during login:", error);
      if (error.response) {
        console.error("Error Response:", error.response);
        if (error.response.status === 401) {
          alert("Invalid credentials. Please try again.");
        } else {
          alert("An error occurred on the server. Please try again.");
        }
      } else {
        alert("A network error occurred. Please check your connection.");
      }
    }    
  
};


  const signinPage = () => {
    navigate("/signin"); 
  };

  return (
    <div className="flex items-center justify-center md:min-h-screen bg-gray-100">
        <div className="w-full md:max-w-sm px-6 py-8 bg-white rounded-md md:shadow-md sm:max-w-md lg:max-w-lg">
          <h1 className="text-2xl font-bold text-center sm:text-3xl">Login</h1>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <Form labelName="Email" inputType="email" onChange={(e) => setEmail(e.target.value)}/>
            <Form labelName="Password" inputType="password" onChange={(e) => setPassword(e.target.value)}/>
            <button type="submit" className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300">Login</button>
          </form>

          {/* Route to signin page */}
          <div className='mt-4 text-sm text-center text-gray-600 sm:text-base'>
                Don't have an account?{' '}
                <button onClick={signinPage} className="text-blue-600 hover:underline">Sign In</button>
            </div>
        </div>
    </div>
  )
}

export default Login