import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
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
import { Button } from "@/components/ui/button";

import { addApplication } from "@/services/applications.service";
import { useAddModal } from "@/stores/addModalStore";

// utils
import { jobSiteOptions, setupOptions } from "./options";
import { queryClient } from "@/App";
import { IForm } from "@/types";

// form validation
import { formSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Textarea } from "../ui/textarea";
import SelectInput from "./select-input";

interface Props {
  values: IForm;
}

function ApplicationForm({ values }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const { closeModal } = useAddModal();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: values,
  });

  const mutation = useMutation({
    mutationFn: (values: IForm) => addApplication(values),
    onMutate: () => setIsLoading(true),
    onSuccess: () => {
      closeModal();
      queryClient.invalidateQueries({ queryKey: ["applications"] });
    },
    onError: () => {
      // Display error
    },
    onSettled: () => {
      setIsLoading(false);
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  console.clear();
  console.log(form.watch());

  return (
    <Form {...form}>
      <form
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
                <FormControl className="w-full bg-green-900">
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
        <div>Salary</div>
        <fieldset className="flex items-center gap-1">
          <FormField
            control={form.control}
            name="min_compensation"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="number" min={0} step={1000} {...field} />
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
                  <Input type="number" min={0} step={1000} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </fieldset>

        {/* Date Picker */}
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

        {/* End */}
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

export default ApplicationForm;
