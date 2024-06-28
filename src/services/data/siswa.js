import api from "../api";
import Cookies from "js-cookie";

export const getAllSiswa = async ({ pagination, page }) => {
  const token = Cookies.get("token");
  try {
    const response = await api.get(
      `/user?pagination=${pagination}&page=${page}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log("🚀 ~ getAllSiswa ~ error:", error);
  }
};

export const createSiswa = async (data) => {
  const token = Cookies.get("token");
  try {
    const response = await api.post("/user", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log("🚀 ~ createSiswa ~ error:", error);
  }
};

export const getSiswaById = async (id) => {
  const token = Cookies.get("token");
  try {
    const response = await api.get(`/user/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log("🚀 ~ getSiswaById ~ error:", error);
  }
};

export const updateSiswa = async (id, data) => {
  const token = Cookies.get("token");
  try {
    const response = await api.post(`/user/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log("🚀 ~ updateSiswa ~ error:", error);
  }
};

export const deleteSiswa = async (id) => {
  const token = Cookies.get("token");
  try {
    const response = await api.delete(`/user/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log("🚀 ~ deleteSiswa ~ error:", error);
  }
};
