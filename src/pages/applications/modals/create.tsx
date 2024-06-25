import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

import {
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { initialState } from "@/components/form/initialState";
import ApplicationForm from "@/components/form";

import { addApplication } from "@/services/applications.service";
import { IForm } from "@/types";
import { queryClient } from "@/App";
import { Button } from "@/components/ui/button";

interface Props {
  closeModal: () => void;
}

function CreateApplicationModal({ closeModal }: Props) {
  const [isLoading, setIsLoading] = useState(false);

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
    <>
      <DialogHeader>
        <DialogTitle>Add new application</DialogTitle>
      </DialogHeader>

      <ApplicationForm
        formId={"add-application-form"}
        onSubmit={onSubmit}
        values={initialState}
      >
        <DialogFooter>
          <Button
          className="w-full"
            type="submit"
            form="add-application-form"
            disabled={isLoading}
          >
            Submit
          </Button>
        </DialogFooter>
      </ApplicationForm>
    </>
  );
}

export default CreateApplicationModal;
