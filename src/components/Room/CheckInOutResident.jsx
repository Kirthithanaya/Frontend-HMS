










import React, { useState } from 'react';
import { checkInOutResident } from '../../services/roomService';


const CheckInOutResident = () => {
  const [residentId, setResidentId] = useState('');
  const [action, setAction] = useState('checkin');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!residentId || !action) {
      alert('Please enter resident ID and select an action.');
      return;
    }

    try {
      const response = await checkInOutResident({ residentId, action });
      alert(`Resident ${action === 'checkin' ? 'checked in' : 'checked out'} successfully!`);
      setResidentId('');
      setAction('checkin');
    } catch (error) {
      console.error('Error in check-in/out:', error);
      alert('Failed to update resident status.');
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto bg-white shadow-md rounded-lg p-6 mt-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Check-In / Check-Out Resident</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Resident ID</label>
          <input
            type="text"
            value={residentId}
            onChange={(e) => setResidentId(e.target.value)}
            placeholder="Enter Resident ID"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Action</label>
          <select
            value={action}
            onChange={(e) => setAction(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <option value="checkin">Check In</option>
            <option value="checkout">Check Out</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CheckInOutResident;

