import React, { useEffect, useState } from 'react';
import { getPaymentHistory } from '../../services/billingService';

const PaymentHistory = ({ residentId }) => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      const data = await getPaymentHistory(residentId);
      setHistory(data);
    };
    fetchHistory();
  }, [residentId]);

  return (
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-4">Payment History</h3>
      {history.length === 0 ? (
        <p>No payment history found.</p>
      ) : (
        <ul className="space-y-2">
          {history.map((item, idx) => (
            <li key={idx} className="bg-gray-100 p-3 rounded shadow-sm">
              <p>Amount: <strong>${item.amount}</strong></p>
              <p>Method: {item.method}</p>
              <p>Date: {new Date(item.date).toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PaymentHistory;
