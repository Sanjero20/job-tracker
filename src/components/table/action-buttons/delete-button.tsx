import { MouseEvent } from "react";
import { Button } from "@/components/ui/button";
import { useDeleteModal } from "@/stores/deleteModalStore";

interface Props {
  id: number;
}

function DeleteButtonModal({ id }: Props) {
  const { openModal } = useDeleteModal();

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    openModal(id);
  };

  return (
    <Button variant={"outline"} className="w-1/2" onClick={handleClick}>
      Delete
    </Button>
  );
}

export default DeleteButtonModal;
