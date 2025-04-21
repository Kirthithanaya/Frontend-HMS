import api from "./api"

export const getOverviewReport = async () => {
  const res = await axios.get('https://backend-hms-2.onrender.com/api/financial/overview');
  return res.data;
};

export const getMonthlyTrends = async () => {
  const res = await api.get('https://backend-hms-2.onrender.com/api/financial/trends');
  return res.data;
};

export const createPayment = async (data) => {
  const res = await api.post('https://backend-hms-2.onrender.com/api/financial/create', data);
  return res.data;
};

export const createExpense = async (data) => {
  const res = await api.post('https://backend-hms-2.onrender.com/api/financial/create', data);
  return res.data;
};

export const getExpenses = async () => {
  const res = await api.get('https://backend-hms-2.onrender.com/api/financial');
  return res.data;
};

export const addRoom = async (data) => {
  const res = await api.post('https://backend-hms-2.onrender.com/api/financial/add', data);
  return res.data;
};
