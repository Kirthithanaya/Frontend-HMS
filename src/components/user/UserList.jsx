import React, { useEffect, useState } from 'react';


import { getAllUsers, updateUserRole } from '../../services/userService';

const UserList = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const res = await getAllUsers();
      setUsers(res.data);
    } catch (error) {
      toast.error('Failed to load users');
    }
  };

  const handleRoleChange = async (id, newRole) => {
    try {
      await updateUserRole(id, newRole);
      toast.success('Role updated');
      fetchUsers();
    } catch (error) {
      toast.error('Failed to update role');
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="p-4 bg-white shadow rounded">
      <h2 className="text-lg font-semibold mb-4">All Users</h2>
      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Email</th>
            <th className="p-2 text-left">Role</th>
            <th className="p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(({ _id, name, email, role }) => (
            <tr key={_id} className="border-t">
              <td className="p-2">{name}</td>
              <td className="p-2">{email}</td>
              <td className="p-2">{role}</td>
              <td className="p-2">
                <select
                  value={role}
                  onChange={(e) => handleRoleChange(_id, e.target.value)}
                  className="p-1 border rounded"
                >
                  <option value="admin">Admin</option>
                  <option value="staff">Staff</option>
                  <option value="resident">Resident</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
