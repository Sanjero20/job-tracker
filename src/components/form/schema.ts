import { z } from "zod";

export const formSchema = z.object({
  status: z.string(),
  company_name: z.string().min(2, { message: "Must not be empty" }),
  position: z.string(),

  min_compensation: z.coerce.number().gte(0).optional(),
  max_compensation: z.coerce.number(),

  setup: z.string({ required_error: "Must not be empty" }),
  application_date: z.string({ required_error: "Must not be empty" }),

  site: z.string(),
  url: z.string().url({ message: "Must be a valid url" }),
  note: z.string(),
});
