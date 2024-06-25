import ApplicationForm from "@/components/form";

import {
  DialogClose,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { initialState } from "@/components/form/initialState";
import { IApplication, IForm } from "@/types";
import { useState } from "react";
import { queryClient } from "@/App";
import { updateApplicationById } from "@/services/applications.service";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";

interface Props {
  selectedData: IApplication;
  closeModal: () => void;
}

function UpdateApplicationModal({ selectedData, closeModal }: Props) {
  const [isLoading, setIsLoading] = useState(false);

  const mutation = useMutation({
    mutationFn: async (values: IForm) => {
      if (selectedData) {
        return updateApplicationById(selectedData.id, values);
      } else {
        return null;
      }
    },
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    mutation.mutate(data);
  };

  return (
    <>
      <DialogHeader>
        <DialogTitle>Update application</DialogTitle>
      </DialogHeader>

      <ApplicationForm
        formId="update-application-form"
        onSubmit={onSubmit}
        values={selectedData || initialState}
      >
        <DialogFooter className="grid grid-cols-2">
          <DialogClose asChild>
            <Button variant={"outline"} disabled={isLoading}>
              Cancel
            </Button>
          </DialogClose>

          <Button form="update-application-form" disabled={isLoading}>
            Update
          </Button>
        </DialogFooter>
      </ApplicationForm>
    </>
  );
}

export default UpdateApplicationModal;
