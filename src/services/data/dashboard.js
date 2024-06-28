import api from "../api";
import Cookies from "js-cookie";

export const getDashboardData = async () => {
  const token = Cookies.get("token");

  try {
    const response = await api.get(`/dashboard`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    return Promise.reject(error.response.data);
  }
};

export const getDashboardDataByUserId = async (userId) => {
  const token = Cookies.get("token");

  try {
    const response = await api.get(`/dashboard/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    return Promise.reject(error.response.data);
  }
};
