import { api } from "./config";

export async function verifyToken() {
  try {
    const response = await api.post("/auth/verify");
    return response.data;
  } catch (error) {
    return false;
  }
}
