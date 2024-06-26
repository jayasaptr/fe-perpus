import api from "../api";

export const loginServices = async (email, password) => {
  try {
    const response = await api.post("/login", {
      email,
      password,
    });

    return response.data;
  } catch (error) {
    return Promise.reject(error.response.data);
  }
};
