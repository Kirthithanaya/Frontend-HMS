import React, { useEffect, useState } from 'react';
import { getAllRequests } from '../../services/maintenanceService';

const AllRequests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllRequests = async () => {
      try {
        const data = await getAllRequests();
        setRequests(data);
      } catch (error) {
        console.error('Failed to fetch all requests:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllRequests();
  }, []);

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">All Maintenance Requests</h2>

      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : requests.length === 0 ? (
        <p className="text-center text-gray-500">No maintenance requests available.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="py-3 px-4">Resident ID</th>
                <th className="py-3 px-4">Issue</th>
                <th className="py-3 px-4">Priority</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Submitted</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((req) => (
                <tr key={req._id} className="border-t hover:bg-gray-50">
                  <td className="py-2 px-4">{req.residentId || 'N/A'}</td>
                  <td className="py-2 px-4">{req.issue}</td>
                  <td className="py-2 px-4">{req.priority}</td>
                  <td className="py-2 px-4">
                    <span
                      className={`px-2 py-1 rounded-full text-sm ${
                        req.status === 'Pending'
                          ? 'bg-yellow-200 text-yellow-800'
                          : req.status === 'In Progress'
                          ? 'bg-blue-200 text-blue-800'
                          : 'bg-green-200 text-green-800'
                      }`}
                    >
                      {req.status}
                    </span>
                  </td>
                  <td className="py-2 px-4">
                    {new Date(req.createdAt).toLocaleDateString()}
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
