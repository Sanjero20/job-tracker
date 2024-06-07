import { DialogTitle } from "@radix-ui/react-dialog";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "../ui/dialog";

import { useViewModalStore } from "@/stores/viewModalStore";

function ViewApplication() {
  const { data, isOpen, toggleModal } = useViewModalStore();

  return (
    <Dialog open={isOpen} onOpenChange={toggleModal}>
      {data && (
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-center font-bold">
              {data.company_name}
            </DialogTitle>
          </DialogHeader>

          <p>{data.status}</p>

          <DialogFooter></DialogFooter>
        </DialogContent>
      )}
    </Dialog>
  );
}

export default ViewApplication;
