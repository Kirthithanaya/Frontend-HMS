import React, { useState, useEffect } from 'react';
import { updateResident, getResidentById } from '../../services/residentService';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateResident = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    phone: '',
    checkOutDate: '',
    status: ''
  });

  useEffect(() => {
    const fetchResident = async () => {
      try {
        const data = await getResidentById(id);
        setFormData({
          phone: data.phone || '',
          checkOutDate: data.checkOutDate ? data.checkOutDate.split('T')[0] : '',
          status: data.status || ''
        });
      } catch (error) {
        console.error('Error fetching resident:', error);
      }
    };
    fetchResident();
  }, [id]);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await updateResident(id, formData);
      alert('Resident updated successfully');
      navigate('/residents');
    } catch (error) {
      console.error('Error updating resident:', error);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Update Resident Info</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Check-Out Date</label>
          <input
            type="date"
            name="checkOutDate"
            value={formData.checkOutDate}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block font-medium">Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          >
            <option value="">Select Status</option>
            <option value="checked-in">Checked-In</option>
            <option value="checked-out">Checked-Out</option>
            <option value="pending">Pending</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateResident;
