import React, { useState } from 'react';
import { deleteRoom } from '../../services/roomService';


const DeleteRoom = () => {
  const [roomNumber, setRoomNumber] = useState('');

  const handleDelete = async (e) => {
    e.preventDefault();

    if (!roomNumber) {
      alert('Please enter a room number');
      return;
    }

    try {
      await deleteRoom(roomNumber);
      alert('Room deleted successfully!');
      setRoomNumber('');
    } catch (error) {
      console.error('Error deleting room:', error);
      alert('Failed to delete room');
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto bg-white shadow-md rounded-lg p-6 mt-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Delete Room</h2>
      <form onSubmit={handleDelete} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Room Number</label>
          <input
            type="text"
            value={roomNumber}
            onChange={(e) => setRoomNumber(e.target.value)}
            placeholder="Enter Room Number to Delete"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition duration-200"
        >
          Delete Room
        </button>
      </form>
    </div>
  );
};

export default DeleteRoom;
