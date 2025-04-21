import React, { useState } from 'react';
import { processPayment } from '../../services/billingService';

const ProcessPayment = () => {
  const [form, setForm] = useState({
    residentId: '',
    amount: '',
    method: 'Online'
  });

  const [msg, setMsg] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePayment = async () => {
    try {
      await processPayment(form);
      setMsg('Payment processed!');
    } catch (err) {
      setMsg('Payment failed.');
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto bg-white shadow rounded">
      <h3 className="text-xl font-semibold mb-4">Process Payment</h3>
      <input
        name="residentId"
        placeholder="Resident ID"
        className="border p-2 mb-2 w-full rounded"
        onChange={handleChange}
      />
      <input
        name="amount"
        type="number"
        placeholder="Amount"
        className="border p-2 mb-2 w-full rounded"
        onChange={handleChange}
      />
      <select
        name="method"
        onChange={handleChange}
        className="border p-2 mb-4 w-full rounded"
      >
        <option value="Online">Online</option>
        <option value="Cash">Cash</option>
      </select>
      <button onClick={handlePayment} className="bg-green-500 text-white px-4 py-2 rounded">
        Pay
      </button>
      {msg && <p className="mt-2 text-blue-600">{msg}</p>}
    </div>
  );
};

export default ProcessPayment;
