import { z } from "zod";

export const formSchema = z.object({
  status: z.string(),
  company_name: z.string().trim().min(1, "Required"),
  position: z.string().trim().min(1, "Required"),

  min_compensation: z.coerce.number().gte(0).optional(),
  max_compensation: z.coerce.number(),

  setup: z.string().trim().min(1, "Choose setup"),
  application_date: z.string().min(1, "Required"),

  site: z.string().min(1, "Required"),
  url: z.string().url({ message: "Must be a valid url" }),
  note: z.string(),
});
