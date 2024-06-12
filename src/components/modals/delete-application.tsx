import { useMutation } from "@tanstack/react-query";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogDescription,
  DialogClose,
} from "../ui/dialog";

import { useDeleteModal } from "@/stores/deleteModalStore";
import { deleteApplicationById } from "@/services/applications.service";
import { queryClient } from "@/App";

function DeleteApplicationModal() {
  const { application_id, isOpen, toggleModal, closeModal } = useDeleteModal();

  const mutation = useMutation({
    mutationFn: async () => {
      if (application_id) {
        return deleteApplicationById(application_id);
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
    <Dialog open={isOpen} onOpenChange={toggleModal}>
      <DialogContent>
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
      </DialogContent>
    </Dialog>
  );
}

export default DeleteApplicationModal;
