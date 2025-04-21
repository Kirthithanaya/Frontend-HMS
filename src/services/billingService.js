import api from './api';

export const generateInvoice = async (data) => {
  const res = await api.post('https://backend-hms-2.onrender.com/api/billing/invoice', data);
  return res.data;
};

export const getMyInvoice = async (residentId) => {
  const res = await api.get(`https://backend-hms-2.onrender.com/api/billing/my-invoices/${residentId}`);
  return res.data;
};

export const processPayment = async (paymentData) => {
  const res = await api.post('https://backend-hms-2.onrender.com/api/billing/pay', paymentData);
  return res.data;
};

export const getPaymentHistory = async (residentId) => {
  const res = await api.get(`https://backend-hms-2.onrender.com/api/billing/payments/${residentId}`);
  return res.data;
};
