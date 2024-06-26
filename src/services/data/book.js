import api from "../api";
import Cookies from "js-cookie";

export const getAllBook = async ({ pagination, page }) => {
  const token = Cookies.get("token");

  try {
    const response = await api.get(
      `/book?pagination=${pagination}&page=${page}`,
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

export const getBookById = async (id) => {
  const token = Cookies.get("token");

  try {
    const response = await api.get(`/book/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    return Promise.reject(error.response.data);
  }
};

export const createBook = async (data) => {
  const token = Cookies.get("token");

  try {
    const response = await api.post(`/book`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    return Promise.reject(error.response.data);
  }
};

export const updateBook = async (id, data) => {
  const token = Cookies.get("token");

  try {
    const response = await api.put(`/book/${id}`, data, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    return Promise.reject(error.response.data);
  }
};

export const deleteBook = async (id) => {
  const token = Cookies.get("token");

  try {
    const response = await api.delete(`/book/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    return Promise.reject(error.response.data);
  }
};
