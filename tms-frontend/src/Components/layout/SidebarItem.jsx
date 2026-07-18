import { NavLink } from "react-router-dom";

export default function SidebarItem({ icon: Icon, label, to }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        [
          "flex items-center gap-3 rounded-md px-4 py-3 text-sm font-medium transition-colors",
          isActive
            ? "bg-slate-800 text-white"
            : "text-slate-300 hover:bg-slate-800 hover:text-white",
        ].join(" ")
      }
    >
      {Icon ? <Icon size={20} /> : null}
      <span>{label}</span>
    </NavLink>
  );
}
