// src/services/roomService.js
import axios from "axios";
const token = localStorage.getItem("token");
const API = axios.create({ headers:{
  Authorization : `Bearer ${token}`
  },baseURL: "https://backend-hms-2.onrender.com/api/room" });

export const createRoom = (data) =>
  API.post("https://backend-hms-2.onrender.com/api/room/create", data);
export const deleteRoom = (id) =>
  API.delete(`https://backend-hms-2.onrender.com/api/room/${id}`);
export const assignRoom = (roomId, residentId) =>
  API.post(`https://backend-hms-2.onrender.com/api/room/assign/${roomId}`, { residentId });
export const getAllRooms = () => API.get("https://backend-hms-2.onrender.com/api/room/get");
export const checkInOutResident = (roomId, action) =>
  API.put(`https://backend-hms-2.onrender.com/api/room/checkout/${roomId}/${action}`); // action = 'checkin' or 'checkout'

// residentService.js
export const getAllResidents = async () => {
  const res = await axios.get("https://backend-hms-2.onrender.com/api/resident/get");
  return res.data;
};
