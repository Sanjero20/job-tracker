import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import ApplicationForm from "../form";

import { useUpdateModal } from "@/stores/updateModalStore";
import { queryClient } from "@/App";
import { IForm } from "@/types";
import { updateApplicationById } from "@/services/applications.service";
import { initialState } from "../form/initialState";

function UpdateApplicationModal() {
  const [isLoading, setIsLoading] = useState(false);
  const { data, isOpen, toggleModal } = useUpdateModal();

  const { closeModal } = useUpdateModal();

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

  const onSubmit = (data: any) => {
    mutation.mutate(data);
  };

  return (
    <Dialog open={isOpen} onOpenChange={toggleModal}>
      <DialogContent className="max-h-[500px] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Update application</DialogTitle>
        </DialogHeader>

        <ApplicationForm
          isLoading={isLoading}
          onSubmit={onSubmit}
          values={data || initialState}
          type="update"
        />
      </DialogContent>
    </Dialog>
  );
}

export default UpdateApplicationModal;
