import React, { useState } from 'react';
import { generateInvoice } from '../../services/billingService';

const InvoiceForm = () => {
  const [form, setForm] = useState({
    residentId: '',
    roomFee: '',
    utilitiesFee: '',
    servicesFee: '',
    discount: '',
    lateFee: '',
    dueDate: ''
  });

  const [msg, setMsg] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await generateInvoice(form);
      setMsg('Invoice generated successfully!');
    } catch (err) {
      console.error(err);
      setMsg('Failed to generate invoice.');
    }
  };

  return (
    <div className="p-4 bg-white shadow rounded max-w-xl mx-auto">
      <h3 className="text-xl font-semibold mb-4">Generate Invoice</h3>
      <div className="grid grid-cols-2 gap-4">
        {['residentId', 'roomFee', 'utilitiesFee', 'servicesFee', 'discount', 'lateFee', 'dueDate'].map((field) => (
          <input
            key={field}
            type={field === 'dueDate' ? 'date' : 'text'}
            name={field}
            value={form[field]}
            onChange={handleChange}
            placeholder={field}
            className="border p-2 rounded w-full"
          />
        ))}
      </div>
      <button onClick={handleSubmit} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
        Generate
      </button>
      {msg && <p className="mt-2 text-green-600">{msg}</p>}
    </div>
  );
};

export default InvoiceForm;
