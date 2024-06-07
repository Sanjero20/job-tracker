import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import ApplicationForm from "../form";

import { useAddModalStore } from "@/stores/addModalStore";

function AddApplcation() {
  const { isOpen, toggleModal } = useAddModalStore();

  return (
    <Dialog open={isOpen} onOpenChange={toggleModal}>
      <DialogTrigger asChild>
        <Button>Add Application</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add new application</DialogTitle>
        </DialogHeader>

        <ApplicationForm />
      </DialogContent>
    </Dialog>
  );
}

export default AddApplcation;
