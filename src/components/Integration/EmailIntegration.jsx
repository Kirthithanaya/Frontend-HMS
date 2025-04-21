import { useState } from 'react';
import { sendTestEmail } from '../../services/integrationService';

const EmailIntegration = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = async () => {
    try {
      await sendTestEmail(email);
      setMessage("Email sent successfully!");
    } catch (error) {
      setMessage("Failed to send email.");
    }
  };

  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-lg font-bold mb-2">Send Test Email</h2>
      <input
        type="email"
        className="border p-2 w-full mb-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter recipient email"
      />
      <button className="bg-blue-500 text-white px-4 py-2" onClick={handleSend}>
        Send Email
      </button>
      {message && <p className="mt-2">{message}</p>}
    </div>
  );
};

export default EmailIntegration;
