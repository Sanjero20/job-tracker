import Navbar from "./navbar";
import LogoutButton from "@/components/logout-btn";
import { Card } from "@/components/ui/card";

function Sidebar() {
  return (
    <aside className={"min-w-[250px] max-w-[250px] flex-1"}>
      <Card className="flex h-full w-full flex-col justify-between p-4">
        {/* Upper part */}
        <section className="flex flex-col gap-8">
          {/* Account */}
          <div className="flex items-center gap-4">
            <div className="h-8 w-8 rounded-full bg-neutral-400"></div>
            <p>Account Name</p>
          </div>

          <Navbar />
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
