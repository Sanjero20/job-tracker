import { IInterview } from "@/types";
import { api } from "./config";

export async function getOngoingApplications(): Promise<IInterview[]> {
  const response = await api.get("/interviews");
  return await response.data;
}
