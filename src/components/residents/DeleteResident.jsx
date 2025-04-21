import React from 'react';
import { deleteResident } from '../../services/residentService';

const DeleteResident = ({ id, onDeleted }) => {
  const handleDelete = async () => {
    if (window.confirm('Are you sure to delete?')) {
      await deleteResident(id);
      onDeleted();
    }
  };

  return (
    <button onClick={handleDelete}   className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition">
      Delete
    </button>
  );
};

export default DeleteResident;
