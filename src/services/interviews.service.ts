import { IInterview } from "@/types";
import { api } from "./config";

export async function getOngoingApplications(): Promise<IInterview[]> {
  const response = await api.get("/interviews");
  return await response.data;
}

export async function updateSchedule(data: IInterview) {
  const { schedule } = data;

  const parsedSched = schedule.trim() ? schedule : null;

  const response = await api.post("/interviews", {
    ...data,
    schedule: parsedSched,
  });
  return await response.data;
}

export async function updateInterviewStatus(
  id: number,
  bool: boolean,
  status: string,
) {
  const response = await api.put(`/interviews/${id}`, {
    status,
    interviewed: bool,
  });
  return await response.data;
}
