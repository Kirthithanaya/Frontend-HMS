import { useState } from 'react';
import { triggerBackup } from '../../services/integrationService';

const BackupManager = () => {
  const [msg, setMsg] = useState('');

  const handleBackup = async () => {
    try {
      await triggerBackup();
      setMsg("Backup triggered successfully!");
    } catch (err) {
      setMsg("Backup failed.");
    }
  };

  return (
    <div className="p-4 border rounded shadow mt-4">
      <h2 className="text-lg font-bold mb-2">Trigger Data Backup</h2>
      <button className="bg-purple-600 text-white px-4 py-2" onClick={handleBackup}>
        Trigger Backup
      </button>
      {msg && <p className="mt-2">{msg}</p>}
    </div>
  );
};

export default BackupManager;
