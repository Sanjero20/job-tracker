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
  data: IApplication;
  closeModal: () => void;
}

function UpdateApplicationModal({ data, closeModal }: Props) {
  const [isLoading, setIsLoading] = useState(false);

  const mutation = useMutation({
    mutationFn: async (values: IForm) => {
      if (data) {
        return updateApplicationById(data.id, values);
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
        values={data || initialState}
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
