/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Plus } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";

import ApplicationForm from "../form";
import { initialState } from "../form/initialState";

import { addApplication } from "@/services/applications.service";
import { useAddModal } from "@/stores/addModalStore";
import { queryClient } from "@/App";
import { IForm } from "@/types";

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
        <Button className="flex gap-1">
          <Plus size={20} />
          New
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[500px] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add new application</DialogTitle>
        </DialogHeader>

        <ApplicationForm
          isLoading={isLoading}
          onSubmit={onSubmit}
          values={initialState}
          type="add"
        />
      </DialogContent>
    </Dialog>
  );
}

export default AddApplcationModal;
