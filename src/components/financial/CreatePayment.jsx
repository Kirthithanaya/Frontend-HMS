import React, { useState } from 'react';
import { createPayment } from '../../services/financialService';


const CreatePayment = () => {
  const [form, setForm] = useState({
    residentId: '',
    invoiceId: '',
    amountPaid: '',
    paymentMethod: '',
    status: '',
    transactionId: '',
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createPayment(form);
    alert('Payment recorded');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white rounded shadow">
      <h2 className="text-lg font-semibold">Record Payment</h2>
      {Object.keys(form).map((key) => (
        <input
          key={key}
          name={key}
          value={form[key]}
          onChange={handleChange}
          placeholder={key}
          className="border p-2 rounded w-full"
        />
      ))}
      <button className="bg-green-500 text-white px-4 py-2 rounded">Submit</button>
    </form>
  );
};

export default CreatePayment;
