import api from "../api";
import Cookies from "js-cookie";

export const getAllPinjam = async ({ pagination, page }) => {
  const token = Cookies.get("token");

  try {
    const response = await api.get(
      `/transaction?pagination=${pagination}&page=${page}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    return Promise.reject(error.response.data);
  }
};

export const getPinjamById = async (id) => {
  const token = Cookies.get("token");

  try {
    const response = await api.get(`/transaction/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    return Promise.reject(error.response.data);
  }
};

export const createPinjam = async (data) => {
  const token = Cookies.get("token");

  try {
    const response = await api.post("/transaction", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    return Promise.reject(error.response.data);
  }
};

export const updatePinjam = async (id, data) => {
  const token = Cookies.get("token");

  try {
    const response = await api.put(`/transaction/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    return Promise.reject(error.response.data);
  }
};

export const getPinjamByUserId = async ({ user_id, pagination, page }) => {
  const token = Cookies.get("token");

  try {
    const response = await api.get(
      `/transaction/user/${user_id}pagination=${pagination}&page=${page}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    return Promise.reject(error.response.data);
  }
};
