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
