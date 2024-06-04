import { api } from "./config";
import { IApplication, IForm } from "@/types";

export async function getApplications(): Promise<IApplication[]> {
  const response = await api.get("/applications");
  return await response.data.applications;
}

export async function addApplication(data: IForm) {
  const response = await api.post("/applications", data);
  return await response.data;
}

export async function updateStatus(id: number, status: string) {
  const response = await api.put(`/applications/${id}`, { status });
  return await response.data;
}
