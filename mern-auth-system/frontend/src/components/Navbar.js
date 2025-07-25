import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">MERN Auth</Link>
        
        <div className="space-x-4">
          {isAuthenticated ? (
            <>
              <span>Welcome, {user?.name}</span>
              <Link to="/dashboard" className="hover:text-blue-200">Dashboard</Link>
              <button onClick={logout} className="hover:text-blue-200">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-blue-200">Login</Link>
              <Link to="/register" className="hover:text-blue-200">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;