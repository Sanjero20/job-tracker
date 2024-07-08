import { api } from "./config";

export async function deleteUserData() {
  const response = await api.delete("/accounts/data");
  return response;
}

export async function deleteUserAccount() {
  const response = await api.delete("/accounts/user");
  return response;
}
