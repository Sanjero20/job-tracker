import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import ApplicationForm from "../form";

import { useAddModal } from "@/stores/addModalStore";

import { IForm } from "@/types";
import { statusOptions } from "../form/options";

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
  const { isOpen, toggleModal } = useAddModal();

  return (
    <Dialog open={isOpen} onOpenChange={toggleModal}>
      <DialogTrigger asChild>
        <Button>Add Application</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add new application</DialogTitle>
        </DialogHeader>

        <ApplicationForm values={initialState} />
      </DialogContent>
    </Dialog>
  );
}

export default AddApplcationModal;
