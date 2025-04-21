import React, { useEffect, useState } from 'react';
import { getMyRequests } from '../../services/maintenanceService';

const MyRequests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const data = await getMyRequests();
        setRequests(data);
      } catch (err) {
        console.error('Failed to load maintenance requests:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">My Maintenance Requests</h2>

      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : requests.length === 0 ? (
        <p className="text-center text-gray-500">No maintenance requests found.</p>
      ) : (
        <div className="grid gap-4">
          {requests.map((request) => (
            <div
              key={request._id}
              className="bg-white border rounded-xl shadow-sm p-4 hover:shadow-md transition"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold">{request.issue}</h3>
                <span
                  className={`px-2 py-1 rounded-full text-sm ${
                    request.status === 'Pending'
                      ? 'bg-yellow-200 text-yellow-800'
                      : request.status === 'In Progress'
                      ? 'bg-blue-200 text-blue-800'
                      : 'bg-green-200 text-green-800'
                  }`}
                >
                  {request.status}
                </span>
              </div>
              <p className="text-gray-600">Priority: {request.priority}</p>
              <p className="text-sm text-gray-400 mt-1">
                Submitted: {new Date(request.createdAt).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyRequests;
