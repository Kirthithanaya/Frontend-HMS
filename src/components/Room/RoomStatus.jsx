import React, { useEffect, useState } from 'react';
import { getAllRooms } from '../../services/roomService';


const RoomStatus = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const data = await getAllRooms();
        setRooms(data);
      } catch (error) {
        console.error('Failed to fetch rooms:', error);
      }
    };

    fetchRooms();
  }, []);

  const availableRooms = rooms.filter(room => !room.occupied);
  const occupiedRooms = rooms.filter(room => room.occupied);

  return (
    <div className="w-full max-w-5xl mx-auto p-4 mt-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Room Status Overview</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Available Rooms */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-green-600">Available Rooms</h3>
          {availableRooms.length > 0 ? (
            <ul className="space-y-2">
              {availableRooms.map((room) => (
                <li
                  key={room._id}
                  className="border p-3 rounded-md bg-green-50 flex justify-between"
                >
                  <span>Room {room.roomNumber} - {room.type} ({room.capacity} beds)</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">3 available rooms.</p>
          )}
        </div>

        {/* Occupied Rooms */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-red-600">Occupied Rooms</h3>
          {occupiedRooms.length > 0 ? (
            <ul className="space-y-2">
              {occupiedRooms.map((room) => (
                <li
                  key={room._id}
                  className="border p-3 rounded-md bg-red-50 flex justify-between"
                >
                  <span>Room {room.roomNumber} - {room.type} ({room.capacity} beds)</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">1 occupied rooms.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RoomStatus;
