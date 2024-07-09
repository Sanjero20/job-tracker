import { Link } from "react-router-dom";
import { SquareUserRound } from "lucide-react";

import { Card } from "@/components/ui/card";
import Navbar from "./navbar";
import LogoutButton from "@/layouts/logout-btn";

import { useAccount } from "@/stores/account";

function Sidebar() {
  const { name } = useAccount();

  return (
    <aside className={"min-w-[250px] max-w-[250px] flex-1"}>
      <Card className="flex h-full w-full flex-col justify-between p-4">
        {/* Upper part */}
        <section className="flex flex-col gap-2">
          {/* Account */}
          <div className="flex items-center gap-4">
            <Link
              to={"/account"}
              className="flex w-full gap-4 rounded p-2 hover:bg-neutral-200"
            >
              <SquareUserRound />
              <p>{name}</p>
            </Link>
          </div>

          <hr></hr>

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
