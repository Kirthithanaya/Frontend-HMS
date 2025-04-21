import NotificationForm from '../components/Notifications/NotificationForm';
import NotificationList from '../components/Notifications/NotificationList';

const NotificationsPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Notifications & Alerts</h1>
      <NotificationForm />
      <NotificationList />
    </div>
  );
};

export default NotificationsPage;
