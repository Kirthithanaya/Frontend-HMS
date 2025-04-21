import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const isAuthenticated = localStorage.getItem('token'); // Check if token exists in local storage

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token on logout
    window.location.href = '/login'; // Redirect to login page
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="flex justify-between items-center">
        <div className="text-white text-xl font-bold">🏠Hostel Management System</div>
        <div className="space-x-4">
          <Link to="/" className="text-white">Home</Link>
          {!isAuthenticated ? (
            <>
              <Link to="/login" className="text-white">Login</Link>
              <Link to="/register" className="text-white">Register</Link>
            </>
          ) : (
            <>
              <Link to="/dashboard" className="text-white">Dashboard</Link>
              <button onClick={handleLogout} className="text-white">Logout</button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
