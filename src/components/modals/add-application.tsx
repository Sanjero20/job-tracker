import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import ApplicationForm from "../form";

function AddApplcation() {
  return (
    <Dialog>
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
