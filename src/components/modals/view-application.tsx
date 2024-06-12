import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "../ui/dialog";

import { useViewModal } from "@/stores/viewModalStore";

function ViewApplicationModal() {
  const { data, isOpen, toggleModal } = useViewModal();

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

export default ViewApplicationModal;
