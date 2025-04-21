import React, { useEffect, useState } from 'react';
import { getAllRequests, updateRequest } from '../../services/maintenanceService';

const AllRequests = () => {
  const [requests, setRequests] = useState([]);
  const [updateMsg, setUpdateMsg] = useState('');
  const [loading, setLoading] = useState(true);

  const [editState, setEditState] = useState({
    status: '',
    assignedTo: '',
    selectedId: null,
  });

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const data = await getAllRequests();
        setRequests(data);
      } catch (err) {
        console.error('Error fetching requests:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, [updateMsg]);

  const handleEditChange = (e) => {
    setEditState({
      ...editState,
      [e.target.name]: e.target.value,
    });
  };

  const handleEditClick = (req) => {
    setEditState({
      selectedId: req._id,
      status: req.status,
      assignedTo: req.assignedTo || '',
    });
  };

  const handleUpdate = async () => {
    try {
      await updateRequest(editState.selectedId, {
        status: editState.status,
        assignedTo: editState.assignedTo,
      });
      setUpdateMsg('Request updated successfully!');
      setTimeout(() => setUpdateMsg(''), 2000);
      setEditState({ selectedId: null, status: '', assignedTo: '' });
    } catch (error) {
      console.error('Failed to update request:', error);
    }
  };

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">All Maintenance Requests</h2>

      {updateMsg && (
        <div className="text-green-600 text-center mb-4">{updateMsg}</div>
      )}

      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : requests.length === 0 ? (
        <p className="text-center text-gray-500">No requests found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="py-3 px-4">Resident ID</th>
                <th className="py-3 px-4">Issue</th>
                <th className="py-3 px-4">Priority</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Assigned To</th>
                <th className="py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((req) => (
                <tr key={req._id} className="border-t hover:bg-gray-50">
                  <td className="py-2 px-4">{req.residentId}</td>
                  <td className="py-2 px-4">{req.issue}</td>
                  <td className="py-2 px-4">{req.priority}</td>
                  <td className="py-2 px-4">
                    {editState.selectedId === req._id ? (
                      <select
                        name="status"
                        value={editState.status}
                        onChange={handleEditChange}
                        className="border rounded px-2 py-1"
                      >
                        <option>Pending</option>
                        <option>In Progress</option>
                        <option>Completed</option>
                      </select>
                    ) : (
                      <span className="px-2 py-1 bg-gray-200 rounded">
                        {req.status}
                      </span>
                    )}
                  </td>
                  <td className="py-2 px-4">
                    {editState.selectedId === req._id ? (
                      <input
                        type="text"
                        name="assignedTo"
                        value={editState.assignedTo}
                        onChange={handleEditChange}
                        className="border rounded px-2 py-1"
                        placeholder="Staff name"
                      />
                    ) : (
                      req.assignedTo || 'Unassigned'
                    )}
                  </td>
                  <td className="py-2 px-4">
                    {editState.selectedId === req._id ? (
                      <div className="flex gap-2">
                        <button
                          onClick={handleUpdate}
                          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                        >
                          Save
                        </button>
                        <button
                          onClick={() =>
                            setEditState({ selectedId: null, status: '', assignedTo: '' })
                          }
                          className="bg-gray-300 text-black px-3 py-1 rounded hover:bg-gray-400"
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => handleEditClick(req)}
                        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                      >
                        Edit
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllRequests;
