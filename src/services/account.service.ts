import { api } from "./config";

export async function deleteUserData() {
  const response = await api.delete("/accounts/data");
  return response;
}

export async function deleteUserAccount() {
  const response = await api.delete("/accounts/user");
  return response;
}

interface IUserInfo {
  name: string;
  email: string;
}

export async function updateUserInfo(data: IUserInfo) {
  const response = await api.put("/accounts/user", data);
  return response;
}
