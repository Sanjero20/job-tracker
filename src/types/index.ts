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

export type ModalMode = "create" | "read" | "update" | "delete" | "";
