/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from "./config";

export async function verifyToken() {
  try {
    const response = await api.post("/auth/verify");
    return response.data;
  } catch (error) {
    return false;
  }
}

export async function loginAccount(email: string, password: string) {
  try {
    const response = await api.post("/auth/login", { email, password });
    const { token } = await response.data;

    return { token, error: "" };
  } catch (error: any) {
    const { message } = error.response.data;
    return { token: null, error: message };
  }
}

export async function registerAccount(
  email: string,
  password: string,
  cPass: string,
) {
  if (password != cPass) {
    return {
      token: null,
      error: "Password does not match",
    };
  }

  try {
    const response = await api.post("/auth/register", { email, password });
    const { token } = await response.data;
    return { token, error: "" };
  } catch (error: any) {
    const { message } = error.response.data;
    return { token: null, error: message };
  }
}
