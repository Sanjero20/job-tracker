import { useAccount } from "@/stores/account";

function AccountPage() {
  const { name, email } = useAccount();

  return (
    <div className="flex flex-col gap-4">
      <section>
        <h2>Account</h2>
        <p>{name}</p>
        <p>{email}</p>
      </section>

      <section>
        <h2>Data</h2>
        <p>Export data to csv</p>
        <p>Delete all data</p>
      </section>

      <section>
        <h2>Security</h2>
        <p>Change password</p>
        <p>Delete account</p>
      </section>
    </div>
  );
}

export default AccountPage;
