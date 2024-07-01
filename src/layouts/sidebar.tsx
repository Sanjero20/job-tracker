import LogoutButton from "@/components/logout-btn";
import { Card, CardContent } from "@/components/ui/card";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className={"min-w-[250px] max-w-[250px] flex-1"}>
      <Card className="flex h-full w-full flex-col justify-between p-4">
        {/* Upper part */}
        <section className="flex flex-col gap-2">
          {/* App Title */}
          <h1 className="text-xl font-bold">Job Tracker</h1>

          {/* Account */}

          {/* Navigation */}
          <nav className="flex flex-col gap-2">
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
        </section>

        {/* Lower part */}
        <section>
          <LogoutButton />
        </section>
      </Card>
    </aside>
  );
}

export default Sidebar;
