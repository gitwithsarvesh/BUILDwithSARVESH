import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          MERN Authentication System
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Secure authentication with JWT, email verification, and password reset
        </p>
        
        <div className="space-x-4">
          {isAuthenticated ? (
            <Link to="/dashboard" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
              Go to Dashboard
            </Link>
          ) : (
            <>
              <Link to="/register" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 mr-4">
                Get Started
              </Link>
              <Link to="/login" className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700">
                Login
              </Link>
            </>
          )}
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">JWT Authentication</h3>
            <p className="text-gray-600">Secure token-based authentication system</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Email Verification</h3>
            <p className="text-gray-600">Verify user accounts via email confirmation</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Password Reset</h3>
            <p className="text-gray-600">Secure password recovery system</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;