import React, { useEffect, useState } from 'react';
import { getMyInvoice } from '../../services/billingService';

const MyInvoices = ({ residentId }) => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    const fetchInvoices = async () => {
      const data = await getMyInvoice(residentId);
      setInvoices(data);
    };
    fetchInvoices();
  }, [residentId]);

  return (
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-4">My Invoices</h3>
      {invoices.length === 0 ? (
        <p>No invoices found.</p>
      ) : (
        <table className="min-w-full bg-white border rounded shadow">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2">Room Fee</th>
              <th className="px-4 py-2">Utilities</th>
              <th className="px-4 py-2">Services</th>
              <th className="px-4 py-2">Discount</th>
              <th className="px-4 py-2">Late Fee</th>
              <th className="px-4 py-2">Due Date</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((inv, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-2">{inv.roomFee}</td>
                <td className="px-4 py-2">{inv.utilitiesFee}</td>
                <td className="px-4 py-2">{inv.servicesFee}</td>
                <td className="px-4 py-2">{inv.discount}</td>
                <td className="px-4 py-2">{inv.lateFee}</td>
                <td className="px-4 py-2">{inv.dueDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyInvoices;
