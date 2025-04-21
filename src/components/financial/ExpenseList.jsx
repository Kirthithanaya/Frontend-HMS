import React, { useEffect, useState } from 'react';
import { getExpenses } from '../../services/financialService';

const ExpenseList = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      const data = await getExpenses();
      setExpenses(data);
    };
    fetchExpenses();
  }, []);

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-lg font-semibold mb-2">Expense List</h2>
      <ul className="space-y-2">
        {expenses.map((exp) => (
          <li key={exp._id} className="border p-2 rounded">
            ₹{exp.amount} - {exp.description} ({exp.method})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
