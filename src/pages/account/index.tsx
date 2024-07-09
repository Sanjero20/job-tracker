import { useState } from "react";
import { useModal } from "@/hooks/useModal";

import AccountData from "./components/account-data";
import AccountInfo from "./components/account-info";
import AccountSecurity from "./components/account-security";
import ConfirmModal from "@/components/confirm-modal";
import { deleteUserAccount, deleteUserData } from "@/services/account.service";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

function AccountPage() {
  const [open, openModal, closeModal] = useModal();
  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState<"data" | "account">("account");

  const [, , removeCookie] = useCookies();
  const navigate = useNavigate();

  // Delete account
  const handleDeleteData = async () => {
    setIsLoading(true);

    const res = await deleteUserData();

    if (res.status != 500) {
      //
    }

    setIsLoading(false);
    closeModal();
  };

  // Delete user data
  const handleDeleteAccount = async () => {
    setIsLoading(true);

    const res = await deleteUserAccount();

    setIsLoading(false);
    closeModal();

    if (res.status != 500) {
      removeCookie("token");
      navigate("/login", { replace: true });
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <AccountInfo />

      <AccountData openModal={openModal} setType={setType} />

      <AccountSecurity openModal={openModal} setType={setType} />

      {/* Dialog */}
      <ConfirmModal
        open={open}
        onOpenChange={closeModal}
        description={
          type == "data"
            ? "Are you sure you want to delete all of your data?"
            : "This action is permanent. Deleting your account will erase all your data. Are you sure you want to delete your account?"
        }
        deleteFn={type == "account" ? handleDeleteAccount : handleDeleteData}
        isLoading={isLoading}
      />
    </div>
  );
}

export default AccountPage;
