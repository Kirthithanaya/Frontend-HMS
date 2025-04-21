





import React, { useState } from 'react';
import { createRoom } from '../../services/roomService';


const CreateRoom = () => {
  const [roomNumber, setRoomNumber] = useState('');
  const [type, setType] = useState('');
  const [capacity, setCapacity] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!roomNumber || !type || !capacity) {
      alert('Please fill in all fields');
      return;
    }

    try {
      await createRoom({ roomNumber, type, capacity });
      alert('Room created successfully!');
      setRoomNumber('');
      setType('');
      setCapacity('');
    } catch (error) {
      console.error('Error creating room:', error);
      alert('Failed to create room');
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto bg-white shadow-md rounded-lg p-6 mt-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Create New Room</h2>
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
          <label className="block mb-1 font-medium">Room Type</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          >
            <option value="">-- Select Type --</option>
            <option value="Single">Single</option>
            <option value="Double">Double</option>
            <option value="Dorm">Dorm</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Capacity</label>
          <input
            type="number"
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
            placeholder="Enter Capacity"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
        >
          Create Room
        </button>
      </form>
    </div>
  );
};

export default CreateRoom;
