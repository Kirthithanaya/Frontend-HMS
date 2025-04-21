import React, { useEffect, useState } from 'react';
import { getMonthlyTrends } from '../../services/financialService';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const MonthlyTrends = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchTrends = async () => {
      const res = await getMonthlyTrends();
      setData(res);
    };
    fetchTrends();
  }, []);

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Monthly Trends</h2>
      <LineChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="revenue" stroke="#10b981" />
        <Line type="monotone" dataKey="expenses" stroke="#ef4444" />
      </LineChart>
    </div>
  );
};

export default MonthlyTrends;
