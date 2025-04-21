import React, { useState } from 'react';
import { registerUser } from '../../services/userService';

const UserForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    role: 'resident',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(form);
      toast.success('User registered!');
      setForm({ name: '', email: '', password: '', role: 'resident' });
    } catch (error) {
      toast.error('Registration failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow rounded mb-6 max-w-md">
      <h2 className="text-lg font-semibold mb-4">Register User</h2>
      {['name', 'email', 'password'].map((field) => (
        <input
          key={field}
          name={field}
          type={field === 'password' ? 'password' : 'text'}
          placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
          value={form[field]}
          onChange={handleChange}
          className="mb-2 w-full p-2 border rounded"
          required
        />
      ))}
      <select name="role" value={form.role} onChange={handleChange} className="mb-4 w-full p-2 border rounded">
        <option value="admin">Admin</option>
        <option value="staff">Staff</option>
        <option value="resident">Resident</option>
      </select>
      <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">
        Register
      </button>
    </form>
  );
};

export default UserForm;
