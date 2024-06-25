/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";

// components
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SelectInput from "./select-input";

// utils
import { jobSiteOptions, setupOptions } from "./options";
import { IApplication, IForm } from "@/types";

// form validation
import { formSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

interface Props {
  values: IForm | IApplication;
  onSubmit: (data: any) => void;
  formId: string;
  children: React.ReactNode;
}

function ApplicationForm({ formId, values, onSubmit, children }: Props) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: values,
  });

  return (
    <>
      <Form {...form}>
        <form
          id={formId}
          className="flex flex-col gap-2"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="company_name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Company" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <fieldset className="grid grid-cols-2 gap-2">
            <FormField
              control={form.control}
              name="position"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Position" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="setup"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <SelectInput
                      value={field.value}
                      onChange={field.onChange}
                      options={setupOptions}
                      placeholder="Setup"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </fieldset>

          {/* Salary range*/}
          <fieldset className="flex items-center gap-1">
            <FormField
              control={form.control}
              name="min_compensation"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="number"
                      min={0}
                      step={1000}
                      {...field}
                      onChange={(e) => field.onChange(parseInt(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <span>-</span>

            <FormField
              control={form.control}
              name="max_compensation"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="number"
                      min={0}
                      step={1000}
                      {...field}
                      onChange={(e) => field.onChange(parseInt(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </fieldset>
          {/* TODO: Change to shadcn - Date Picker */}
          <FormField
            control={form.control}
            name="application_date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Application Date</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Job Details */}
          <fieldset className="grid grid-cols-2 gap-2">
            <FormField
              control={form.control}
              name="site"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <SelectInput
                      value={field.value}
                      onChange={field.onChange}
                      options={jobSiteOptions}
                      placeholder="Site"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="url"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="url" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </fieldset>
          {/* Note */}
          <FormField
            control={form.control}
            name="note"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Note</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Note"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>

      {/* This slot is used for the Dialog Footer */}
      {/* Button with the type="submit" should be 
          connected to the form using the for="id"
      */}
      {children}
    </>
  );
}

export default ApplicationForm;
