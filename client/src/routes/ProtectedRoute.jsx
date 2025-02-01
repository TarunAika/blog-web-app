import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/auth", { withCredentials: true });
        setIsAuthenticated(response.data.isAuthenticated);
        console.log(response.data.isAuthenticated);
      } catch (error) {
        console.log("Error verifying authentication:", error);
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    verifyAuth();
  }, []);

  if (isLoading) { return <div>Loading...</div>; }

  if (!isAuthenticated) { return <Navigate to="/login" />; }

  return children; 
};

export default ProtectedRoute;