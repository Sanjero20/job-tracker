import { IInterview } from "@/types";
import { api } from "./config";

export async function getOngoingApplications(): Promise<IInterview[]> {
  const response = await api.get("/interviews");
  return await response.data;
}

export async function updateSchedule(data: IInterview) {
  const response = await api.post("/interviews", data);
  return await response.data;
}
