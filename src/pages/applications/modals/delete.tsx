import { useMutation } from "@tanstack/react-query";

import { Button } from "@/components/ui/button";
import {
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { IApplication } from "@/types";
import { queryClient } from "@/App";
import { deleteApplicationById } from "@/services/applications.service";

interface Props {
  closeModal: () => void;
  selectedData: IApplication;
}

function DeleteApplicationModal({ selectedData, closeModal }: Props) {
  const mutation = useMutation({
    mutationFn: async () => {
      if (selectedData.id) {
        return deleteApplicationById(selectedData.id);
      } else {
        return null;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["applications"] });
      closeModal();
    },
    onError: () => {
      //
      // Alert box?
    },
    onSettled: () => {
      //
    },
  });

  const handleConfirmDelete = () => {
    mutation.mutate();
  };

  return (
    <>
      <DialogHeader>
        <DialogTitle className="text-center font-bold">
          Confirm delete
        </DialogTitle>
      </DialogHeader>

      <DialogDescription>
        Are you sure you want to delete this job pplication?
      </DialogDescription>

      <DialogFooter>
        <DialogClose asChild>
          <Button variant={"ghost"}>Cancel</Button>
        </DialogClose>

        <Button variant={"destructive"} onClick={handleConfirmDelete}>
          Delete
        </Button>
      </DialogFooter>
    </>
  );
}

export default DeleteApplicationModal;
