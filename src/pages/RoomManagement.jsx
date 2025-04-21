// src/pages/RoomManagement.jsx
import React, { useState } from 'react';
import CreateRoom from '../components/Room/CreateRoom';
import GetAllRooms from '../components/Room/GetAllRooms';
import AssignRoom from '../components/Room/AssignRoom';
import DeleteRoom from '../components/Room/DeleteRoom';
import CheckInOutResident from '../components/Room/CheckInOutResident';
import RoomStatus from '../components/Room/RoomStatus';
;


const RoomManagement = () => {
  const [refresh, setRefresh] = useState(false);

  const refreshRooms = () => {
    setRefresh(!refresh); // Toggle to refresh room list
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
    <div>
      <h2 className="text-2xl font-bold text-center mb-6">Room Management</h2>
      <RoomStatus />
    </div>
      
      {/* Create Room Component */}
      <CreateRoom refreshRooms={refreshRooms} />
      
    {/* Get All Rooms Component */}
    <GetAllRooms refreshRooms={refresh} />
    {/* Assign Room Component */}
    <AssignRoom refreshRooms={refresh} />
     {/* Delete Room Component */}
     <DeleteRoom refreshRooms={refresh} />
       {/* Chech In Out Room Component */}
       <CheckInOutResident refreshRooms={refresh} />
       
    </div>
  );
};

export default RoomManagement;
