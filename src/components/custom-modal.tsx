import { Dialog, DialogContent } from "./ui/dialog";

interface Props {
  open: boolean;
  onOpenChange: () => void;
  children: React.ReactNode;
}

function CustomModal({ open, onOpenChange, children }: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
}

export default CustomModal;
