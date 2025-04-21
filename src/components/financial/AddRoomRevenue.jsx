import React, { useState } from 'react';
import { addRoom } from '../../services/financialService';

const AddRoomRevenue = () => {
  const [formData, setFormData] = useState({
    residentId: '',
    roomNumber: '',
    amountPaid: '',
    paymentMethod: '',
    status: '',
    transactionId: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addRoom(formData);
      alert('Room revenue added successfully!');
      setFormData({
        residentId: '',
        roomNumber: '',
        amountPaid: '',
        paymentMethod: '',
        status: '',
        transactionId: '',
      });
    } catch (error) {
      console.error('Failed to add room revenue:', error);
      alert('Error adding room revenue');
    }
  };

  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Add Room Revenue</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="residentId"
          placeholder="Resident ID"
          value={formData.residentId}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          name="roomNumber"
          placeholder="Room Number"
          value={formData.roomNumber}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="number"
          name="amountPaid"
          placeholder="Amount Paid"
          value={formData.amountPaid}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          name="paymentMethod"
          placeholder="Payment Method"
          value={formData.paymentMethod}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        >
          <option value="">Select Status</option>
          <option value="Paid">Paid</option>
          <option value="Pending">Pending</option>
        </select>
        <input
          type="text"
          name="transactionId"
          placeholder="Transaction ID"
          value={formData.transactionId}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="md:col-span-2 bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddRoomRevenue;
