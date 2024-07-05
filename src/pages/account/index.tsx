import { useAccount } from "@/stores/account";
import AccountData from "./components/account-data";
import AccountInfo from "./components/account-info";
import AccountSecurity from "./components/account-security";

function AccountPage() {
  return (
    <div className="flex flex-col gap-6">
      <AccountInfo />
      <AccountData />
      <AccountSecurity />
    </div>
  );
}

export default AccountPage;
