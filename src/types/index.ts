export interface IForm {
  status: string;
  company_name: string;
  position: string;
  min_compensation: number;
  max_compensation: number;
  setup: string;
  application_date: string;
  job_site: string;
  job_link: string;
  note: string;
}

export interface IApplication extends IForm {
  id: number;
  created_at: Date;
  updated_at: Date;
}
