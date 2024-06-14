/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";

import ApplicationForm from "../form";
import { statusOptions } from "../form/options";

import { addApplication } from "@/services/applications.service";
import { useAddModal } from "@/stores/addModalStore";
import { queryClient } from "@/App";
import { IForm } from "@/types";

const initialState: IForm = {
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

function AddApplcationModal() {
  const [isLoading, setIsLoading] = useState(false);
  const { isOpen, toggleModal } = useAddModal();

  const { closeModal } = useAddModal();

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

  const onSubmit = (data: any) => {
    mutation.mutate(data);
  };

  return (
    <Dialog open={isOpen} onOpenChange={toggleModal}>
      <DialogTrigger asChild>
        <Button>Add Application</Button>
      </DialogTrigger>
      <DialogContent className="max-h-[500px] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add new application</DialogTitle>
        </DialogHeader>

        <ApplicationForm
          isLoading={isLoading}
          onSubmit={onSubmit}
          values={initialState}
        />
      </DialogContent>
    </Dialog>
  );
}

export default AddApplcationModal;
