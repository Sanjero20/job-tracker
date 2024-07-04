import { Activity } from "react-activity-calendar";
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

interface IGraph {
  name: string;
  count: number;
}

export async function getStatusGraphData(): Promise<IGraph[]> {
  const response = await api.get("/dashboard/status");
  return await response.data;
}

export async function getActivityCalendarData(): Promise<Activity[]> {
  const response = await api.get("/dashboard/activity");
  return await response.data;
}

interface IStatistics {
  interview_rate: number;
  rejection_rate: number;
}

export async function getStatistics(): Promise<IStatistics> {
  const response = await api.get("/dashboard/statistics");
  return await response.data;
}
