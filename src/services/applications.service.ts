import { IForm } from "@/types";
import { api } from "./config";

export async function getApplications() {
  const response = await api.get("/applications");
  return await response.data;
}

export async function addAppliction(data: IForm) {
  const response = await api.post("/applications", data);
  return await response.data;
}
