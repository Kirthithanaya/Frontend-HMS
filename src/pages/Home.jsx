// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import homeBanner from '../assets/homeBanner.png';

const Home = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-96" style={{ backgroundImage: `url(${homeBanner})` }}>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-blue-200 px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Welcome to SmartHostel
          </h1>
          <p className="text-lg md:text-2xl max-w-2xl mb-6 drop-shadow-md">
            Manage rooms, residents, billing, and maintenance — all in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/register"
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white font-semibold transition"
            >
              Get Started
            </Link>
            <Link
              to="/login"
              className="px-6 py-3 bg-white text-indigo-600 hover:text-indigo-800 border border-indigo-600 rounded-lg font-semibold transition"
            >
              Login
            </Link>
          </div>
        </div>
      </div>

      {/* Feature Highlights */}
      <div className="py-12 bg-gray-50 text-center">
        <h2 className="text-3xl font-semibold mb-8">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">Room Allocation</h3>
            <p className="text-gray-600">Easily assign, update, and manage hostel rooms with real-time availability.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">Billing & Payments</h3>
            <p className="text-gray-600">Track resident charges, generate invoices, and monitor payment history.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">Maintenance Requests</h3>
            <p className="text-gray-600">Handle and prioritize maintenance efficiently with built-in ticketing.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
