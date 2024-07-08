import { Button } from "./ui/button";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogClose,
  DialogHeader,
  DialogDescription,
} from "./ui/dialog";

interface Props {
  open: boolean;
  isLoading: boolean;
  description: string;
  onOpenChange: () => void;
  deleteFn: () => void;
}

function ConfirmModal({
  open,
  isLoading,
  description,
  onOpenChange,
  deleteFn,
}: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirm Delete</DialogTitle>
        </DialogHeader>

        <DialogDescription>{description}</DialogDescription>

        <DialogFooter className="grid grid-cols-2">
          <DialogClose asChild>
            <Button variant={"ghost"}>Cancel</Button>
          </DialogClose>

          <Button
            variant={"destructive"}
            onClick={deleteFn}
            disabled={isLoading}
          >
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ConfirmModal;
