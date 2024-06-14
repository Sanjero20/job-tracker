import { Button } from "@/components/ui/button";
import { IApplication } from "@/types";

interface Props {
  data: IApplication;
}

function UpdateButtonModal({ data }: Props) {
  // const { openModal } = useDeleteModal();

  const handleClick = () => {
    // openModal(data);
  };

  return (
    <Button variant={"outline"} className="w-1/2" onClick={handleClick}>
      Edit
    </Button>
  );
}

export default UpdateButtonModal;
