import LogoutButton from "@/components/logout-btn";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="flex w-full items-center justify-between">
      <h1 className="text-xl font-bold">Application Tracker</h1>

      {/* Navigation */}
      <nav className="flex gap-8">
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "underline" : "")}
        >
          Dashboard
        </NavLink>

        <NavLink
          to={"/applications"}
          className={({ isActive }) => (isActive ? "underline" : "")}
        >
          Applications
        </NavLink>

        <NavLink
          to={"/interviews"}
          className={({ isActive }) => (isActive ? "underline" : "")}
        >
          Interviews
        </NavLink>
      </nav>

      <LogoutButton />
    </header>
  );
}

export default Header;
