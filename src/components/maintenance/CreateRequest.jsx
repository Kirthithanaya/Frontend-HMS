import React, { useState } from 'react';
import { createRequest } from '../../services/maintenanceService';


const CreateRequest = () => {
  const [issue, setIssue] = useState('');
  const [priority, setPriority] = useState('Low');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createRequest({ issue, priority });
      alert('Request submitted!');
      setIssue('');
      setPriority('Low');
    } catch (err) {
      alert('Error submitting request');
    }
  };

  return (
    <div className="bg-white p-6 shadow rounded-lg">
      <h2 className="text-xl font-bold mb-4">Create Maintenance Request</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          placeholder="Describe the issue"
          value={issue}
          onChange={(e) => setIssue(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="w-full border p-2 rounded"
        >
          <option value="Low">Low</option>
          <option value="Moderate">Moderate</option>
          <option value="High">High</option>
        </select>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Submit Request
        </button>
      </form>
    </div>
  );
};

export default CreateRequest;
