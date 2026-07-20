import SidebarItem from "./SidebarItem";
import { sidebarMenu } from "@/constants/sidebarMenu";
import Logo from "@/Components/common/Logo";

import useAuth from "@/features/auth/hooks/useAuth";

export default function Sidebar() {
  const {user} = useAuth();
  return (
    <aside className="flex h-screen w-64 flex-col bg-slate-900">
      <div className="border-b border-slate-700 p-6">
        <Logo />
      </div>

      <nav className="flex-1 space-y-2 p-4">
        {sidebarMenu
        .filter((item)=> item.roles?.includes(user?.role))
        .map((item) => (
          <SidebarItem
            key={item.path}
            icon={item.icon}
            label={item.title}
            to={item.path}
          />
          
        ))}
      </nav>
    </aside>
  );
}