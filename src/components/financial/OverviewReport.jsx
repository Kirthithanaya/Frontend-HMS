import React, { useEffect, useState } from 'react';
import { getOverviewReport } from '../../services/financialService';
const OverviewReport = () => {
  const [report, setReport] = useState(null);

  useEffect(() => {
    const fetchReport = async () => {
      const data = await getOverviewReport();
      setReport(data);
    };
    fetchReport();
  }, []);

  return (
    <div className="p-4 shadow rounded bg-white">
      <h2 className="text-xl font-semibold mb-2">Financial Overview</h2>
      {report ? (
        <div>
        <p>Revenue: ₹{report.revenue}</p>
        <p>Expenses: ₹{report.expenses}</p>
        <p>Profit: ₹{report.profit}</p>
        <p>Occupancy Rate: {report.occupancyRate}%</p>
      </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default OverviewReport;
