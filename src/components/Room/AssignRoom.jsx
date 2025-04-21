import React, { useState } from 'react';
import { assignRoom } from '../../services/roomService';


const AssignRoom = () => {
  const [roomNumber, setRoomNumber] = useState('');
  const [residentId, setResidentId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!roomNumber || !residentId) {
      alert('Please fill in both fields');
      return;
    }

    try {
      await assignRoom({ roomNumber, residentId });
      alert('Room assigned successfully!');
      setRoomNumber('');
      setResidentId('');
    } catch (error) {
      console.error('Error assigning room:', error);
      alert('Failed to assign room');
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto bg-white shadow-md rounded-lg p-6 mt-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Assign Room to Resident</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Room Number</label>
          <input
            type="text"
            value={roomNumber}
            onChange={(e) => setRoomNumber(e.target.value)}
            placeholder="Enter Room Number"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Resident ID</label>
          <input
            type="text"
            value={residentId}
            onChange={(e) => setResidentId(e.target.value)}
            placeholder="Enter Resident ID"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition duration-200"
        >
          Assign Room
        </button>
      </form>
    </div>
  );
};

export default AssignRoom;
