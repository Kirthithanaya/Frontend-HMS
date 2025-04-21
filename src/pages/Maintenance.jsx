import React from 'react';
import CreateRequest from '../components/maintenance/CreateRequest';
import MyRequests from '../components/maintenance/MyRequests';
import AllRequests from '../components/maintenance/AllRequests';

const Maintenance = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto space-y-8">
      <CreateRequest />
      <MyRequests />
      <AllRequests />
    </div>
  );
};

export default Maintenance;
