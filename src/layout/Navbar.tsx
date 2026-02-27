import { NavLink } from "react-router-dom";
import { site } from "../lib/site";

const links = [
  { to: "/", label: "Home" },
  { to: "/events", label: "Events" },
  { to: "/about", label: "About" },
];

export default function Navbar() {
  return (
    <header className="border-b py-4 bg-white/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 ">
        <NavLink to="/" className="text-lg font-semibold">
          {site.name}
        </NavLink>

        <nav className="flex gap-4 text-sm">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                isActive
                  ? "rounded-md bg-slate-900 px-3 py-1 text-white"
                  : "rounded-md px-3 py-1 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}