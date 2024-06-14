import { statusOptions } from "./options";
import { IForm } from "@/types";

export const initialState: IForm = {
  status: statusOptions[0],
  position: "",
  company_name: "",
  min_compensation: 0,
  max_compensation: 0,
  setup: "",
  application_date: "",
  site: "",
  url: "",
  note: "",
};
