import { api } from "./config";

interface IOverview {
  total: number;
  ongoing: number;
  rejected: number;
  offered: number;
}

export async function getOverview(): Promise<IOverview> {
  const response = await api.get("/dashboard/overview");
  return await response.data;
}
