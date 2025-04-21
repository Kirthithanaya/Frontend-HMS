import React, { useEffect, useState } from 'react';
import { getAllResidents, deleteResident } from '../../services/residentService';

const GetAllResidents = () => {
  const [residents, setResidents] = useState([]);

  const fetchResidents = async () => {
    try {
      const data = await getAllResidents();
      setResidents(data);
    } catch (err) {
      console.error('Failed to fetch residents', err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure to delete this resident?')) {
      await deleteResident(id);
      fetchResidents();
    }
  };

  useEffect(() => {
    fetchResidents();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">All Residents</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr className="bg-gray-100">
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Gender</th>
              <th>Room</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {residents.map((res) => (
              <tr key={res._id}>
                <td>{res.name}</td>
                <td>{res.email}</td>
                <td>{res.phone}</td>
                <td>{res.gender}</td>
                <td>{res.roomNumber}</td>
                <td>{res.status}</td>
                <td>
                  <button
                    className="btn btn-sm bg-red-500 text-white hover:bg-red-600"
                    onClick={() => handleDelete(res._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GetAllResidents;