import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const OccupancyRateChart = () => {
  const data = {
    labels: ['Occupied', 'Available'],
    datasets: [
      {
        label: 'Occupancy',
        data: [85, 15], // e.g., 85% occupied
        backgroundColor: ['#4CAF50', '#f1f1f1'],
      },
    ],
  };

  return (
    <div className="max-w-sm mx-auto">
      <h2 className="text-lg font-bold text-center mb-4">Occupancy Rate</h2>
      <Doughnut data={data} />
    </div>
  );
};

export default OccupancyRateChart;
