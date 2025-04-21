// src/components/GetAllRooms.jsx
import React, { useEffect, useState } from 'react';
import { getAllRooms } from '../../services/roomService';
import AssignRoom from './AssignRoom';
import CheckInOutResident from './CheckInOutResident';
import DeleteRoom from './DeleteRoom';

const GetAllRooms = ({ refreshRooms }) => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      const res = await getAllRooms();
      setRooms(res.data);
    }
    fetchRooms();
  }, [refreshRooms]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {rooms.map((room) => (
        <div key={room._id} className="bg-white p-4 rounded shadow border">
          <h4 className="text-lg font-semibold">Room #{room.roomNumber}</h4>
          <p>Type: {room.type}</p>
          <p>Capacity: {room.capacity}</p>
          <p>Status: {room.isOccupied ? 'Occupied' : 'Available'}</p>
          <AssignRoom roomId={room._id} refreshRooms={refreshRooms} />
          <CheckInOutResident roomId={room._id} refreshRooms={refreshRooms} />
          <DeleteRoom roomId={room._id} refreshRooms={refreshRooms} />
        </div>
      ))}
    </div>
  );
};

export default GetAllRooms;
