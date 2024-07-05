export interface IAccountReg {
  name: string;
  email: string;
  password: string;
  cPassword: string;
}

export type ModalMode = "create" | "read" | "update" | "delete" | "";

export interface IForm {
  status: string;
  company_name: string;
  position: string;
  min_compensation: number;
  max_compensation: number;
  setup: string;
  application_date: string;
  site: string;
  url: string;
  note: string;
}

export interface IApplication extends IForm {
  id: number;
  created_at: Date;
  updated_at: Date;
}

export interface IInterview {
  job_id: number;
  status: string;
  company_name: string;
  position: string;
  schedule: string;
  interviewed: boolean;
}
