import ApplicationForm from "@/components/form";

import { DialogHeader, DialogTitle } from "@/components/ui/dialog";

import { initialState } from "@/components/form/initialState";
import { IApplication, IForm } from "@/types";
import { useState } from "react";
import { queryClient } from "@/App";
import { updateApplicationById } from "@/services/applications.service";
import { useMutation } from "@tanstack/react-query";

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
        isLoading={isLoading}
        onSubmit={onSubmit}
        values={selectedData || initialState}
        type="update"
      />
    </>
  );
}

export default UpdateApplicationModal;
