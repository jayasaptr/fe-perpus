import api from "../api";
import Cookies from "js-cookie";

export const getAllCategory = async ({ pagination, page }) => {
  const token = Cookies.get("token");

  try {
    const response = await api.get(
      `/category?pagination=${pagination}&page=${page}`,
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

export const getCategoryById = async (id) => {
  const token = Cookies.get("token");

  try {
    const response = await api.get(`/category/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    return Promise.reject(error.response.data);
  }
};

export const createCategory = async (data) => {
  const token = Cookies.get("token");

  try {
    const response = await api.post("/category", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    return Promise.reject(error.response.data);
  }
};

export const updateCategory = async (id, data) => {
  const token = Cookies.get("token");

  try {
    const response = await api.put(`/category/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    return Promise.reject(error.response.data);
  }
};
