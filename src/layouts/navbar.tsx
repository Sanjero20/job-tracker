import React from "react";
import clsx from "clsx";
import { NavLink } from "react-router-dom";
import { CalendarDays, LayoutDashboard, NotepadText } from "lucide-react";

interface Props {
  href: string;
  children: React.ReactNode;
}

function StyledNavLink({ href, children }: Props) {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        clsx(
          isActive
            ? "bg-primary text-white"
            : "text-gray-500 hover:bg-primary/30 hover:text-white",
          "flex gap-4 rounded p-2",
        )
      }
    >
      {children}
    </NavLink>
  );
}

function Navbar() {
  return (
    <nav className="flex flex-col gap-4">
      <StyledNavLink href="/">
        <LayoutDashboard />
        Dashboard
      </StyledNavLink>

      <StyledNavLink href="/applications">
        <NotepadText />
        Applications
      </StyledNavLink>

      <StyledNavLink href="/interviews">
        <CalendarDays />
        Interviews
      </StyledNavLink>
    </nav>
  );
}

export default Navbar;
