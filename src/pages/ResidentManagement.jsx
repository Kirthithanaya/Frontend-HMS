import React, { useEffect, useState } from 'react';
import CreateResident from '../components/residents/CreateResident';
import GetAllResidents from '../components/residents/GetAllResidents';
import { getAllResidents, deleteResident } from '../services/residentService';
import UpdateResident from '../components/residents/UpdateResident';
import GetResidentById from '../components/residents/GetResidentById';
import DeleteResident from '../components/residents/DeleteResident';



const ResidentManagement = () => {
  const [residents, setResidents] = useState([]);

  const fetchResidents = async () => {
    const res = await getAllResidents();
    setResidents(res.data);
  };

  const handleDelete = async (id) => {
    await deleteResident(id);
    fetchResidents();
  };

  useEffect(() => {
    fetchResidents();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl text-center font-bold mb-4">Resident Management</h2>
      <CreateResident onCreate={fetchResidents} />
      <GetAllResidents residents={residents} onDelete={handleDelete} />
      <UpdateResident />
      <GetResidentById/>
      <DeleteResident/>
    </div>
  );
};

export default ResidentManagement;
