import EmailIntegration from "../components/Integration/EmailIntegration";
import PaymentIntegration from "../components/Integration/PaymentIntegration";
import BackupManager from "../components/Integration/BackupManager";

const IntegrationPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Integration & Data Management</h1>
      <EmailIntegration />
      <PaymentIntegration />
      <BackupManager />
    </div>
  );
};

export default IntegrationPage;
