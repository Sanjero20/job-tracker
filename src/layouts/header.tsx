import LogoutButton from "@/components/logout-btn";

function Header() {
  return (
    <header className="flex w-full items-center justify-between">
      <h1 className="text-xl font-bold">Application Tracker</h1>
      <LogoutButton />
    </header>
  );
}

export default Header;
