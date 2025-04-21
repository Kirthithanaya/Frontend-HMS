import React, { useEffect, useState } from 'react';
import { getResidentById } from '../../services/residentService';
import { useParams } from 'react-router-dom';

const GetResidentById = () => {
  const [resident, setResident] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchResident = async () => {
      try {
        const data = await getResidentById(id);
        setResident(data);
      } catch (error) {
        console.error('Error fetching resident by ID', error);
      }
    };
    fetchResident();
  }, [id]);

  if (!resident) return <p>Loading...</p>;

  return (
    <div className="max-w-xl mx-auto mt-6 bg-white shadow p-6 rounded-md">
      <h2 className="text-lg font-bold mb-4">Resident Details</h2>
      <ul className="space-y-2">
        <li><strong>Name:</strong> {resident.name}</li>
        <li><strong>Email:</strong> {resident.email}</li>
        <li><strong>Phone:</strong> {resident.phone}</li>
        <li><strong>Gender:</strong> {resident.gender}</li>
        <li><strong>Room:</strong> {resident.roomNumber}</li>
        <li><strong>Status:</strong> {resident.status}</li>
        <li><strong>Check-in:</strong> {resident.checkInDate?.slice(0,10)}</li>
        <li><strong>Check-out:</strong> {resident.checkOutDate?.slice(0,10)}</li>
      </ul>
    </div>
  );
};

export default GetResidentById;
