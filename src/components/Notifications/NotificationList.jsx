import { useEffect, useState } from 'react';
import { getAllNotifications } from '../../services/notificationService';

const NotificationList = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllNotifications();
      setNotifications(res.data);
    };
    fetchData();
  }, []);

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-2">All Notifications</h2>
      <ul className="divide-y">
        {notifications.map((note) => (
          <li key={note._id} className="py-2">
            <strong>{note.subject}</strong> - {note.message} ({note.type})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationList;
