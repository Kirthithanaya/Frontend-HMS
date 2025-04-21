import React, { useState } from 'react';
import { createExpense } from '../../services/financialService';


const CreateExpense = () => {
  const [form, setForm] = useState({
    description: '',
    method: '',
    amount: '',
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createExpense(form);
    alert('Expense recorded');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow space-y-4">
      <h2 className="text-lg font-semibold">Add Expense</h2>
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
      <button className="bg-red-500 text-white px-4 py-2 rounded">Submit</button>
    </form>
  );
};

export default CreateExpense;
