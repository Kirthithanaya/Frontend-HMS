import React from "react";
import InvoiceForm from "../components/billing/InvoiceForm";
import MyInvoices from "../components/billing/MyInvoices";
import ProcessPayment from "../components/billing/ProcessPayment";
import PaymentHistory from "../components/billing/PaymentHistory";

const Billing = () => {
  const residentId = "resident001"; // You can get this from auth context

  return (
    <div className="space-y-8 p-6">
      <InvoiceForm />
      <MyInvoices residentId={residentId} />
      <ProcessPayment />
      <PaymentHistory residentId={residentId} />
    </div>
  );
};

export default Billing;
