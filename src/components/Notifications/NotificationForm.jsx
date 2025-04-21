import { useState } from 'react';
import { sendNotification } from '../../services/notificationService';

const NotificationForm = () => {
  const [formData, setFormData] = useState({
    userId: '',
    subject: '',
    message: '',
    type: 'email', // default
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSend = async () => {
    try {
      await sendNotification(formData);
      setStatus('Notification sent successfully!');
    } catch (err) {
      setStatus('Failed to send notification.');
    }
  };

  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Send Notification</h2>
      <input
        type="text"
        name="userId"
        placeholder="User ID"
        value={formData.userId}
        onChange={handleChange}
        className="border p-2 w-full mb-2"
      />
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        value={formData.subject}
        onChange={handleChange}
        className="border p-2 w-full mb-2"
      />
      <textarea
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        className="border p-2 w-full mb-2"
      />
      <select
        name="type"
        value={formData.type}
        onChange={handleChange}
        className="border p-2 w-full mb-4"
      >
        <option value="email">Email</option>
        <option value="sms">SMS</option>
        <option value="in-app">In-App</option>
      </select>
      <button
        onClick={handleSend}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Send Notification
      </button>
      {status && <p className="mt-2 text-sm text-green-700">{status}</p>}
    </div>
  );
};

export default NotificationForm;
