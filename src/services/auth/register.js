import api from "../api";

export const registerServices = async (data) => {
  try {
    const response = await api.post("/register", data);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
