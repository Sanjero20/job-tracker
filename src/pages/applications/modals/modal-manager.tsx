import { IApplication, ModalMode } from "@/types";

import CreateApplicationModal from "./create";
import DeleteApplicationModal from "./delete";
import UpdateApplicationModal from "./update";
import ViewApplicationModal from "./view";

interface Props {
  mode: ModalMode;
  data: IApplication | null;
  closeModal: () => void;
}

function ModalManager({ mode, data, closeModal }: Props) {
  let component = null;

  switch (mode) {
    case "create":
      component = <CreateApplicationModal closeModal={closeModal} />;
      break;

    case "read":
      component = data && <ViewApplicationModal data={data} />;
      break;

    case "update":
      component = data && (
        <UpdateApplicationModal data={data} closeModal={closeModal} />
      );
      break;

    case "delete":
      component = data && (
        <DeleteApplicationModal data={data} closeModal={closeModal} />
      );
      break;
  }

  return <>{component}</>;
}

export default ModalManager;
