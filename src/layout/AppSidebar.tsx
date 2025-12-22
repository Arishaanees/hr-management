
import { Link, useLocation } from "react-router-dom";
import { Grid3x3, Users, Calendar, BarChart3, Settings } from "lucide-react";
import { useSidebar } from "../context/SidebarContext";
import clsx from "clsx";

const navItems = [
  { name: "Dashboard", icon: <Grid3x3 size={18} />, path: "/" },
  { name: "Jobs", icon: <Users size={18} />, path: "/jobs" },
  { name: "Candidates", icon: <Users size={18} />, path: "/profile" },
  { name: "Calendar", icon: <Calendar size={18} />, path: "/calendar" },
  { name: "Analytics", icon: <BarChart3 size={18} />, path: "/analytics" },
  { name: "Settings", icon: <Settings size={18} />, path: "/settings" },
];

export default function AppSidebar() {
  const { isMobileOpen, isExpanded } = useSidebar();
  const location = useLocation();

  const sidebarClasses = clsx(
    "fixed inset-y-0 left-0 z-50 mt-16 w-[260px] bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 shadow-[6px_0_25px_rgba(0,0,0,0.15)] dark:shadow-[6px_0_25px_rgba(0,0,0,0.65)] transition-transform duration-300 ease-in-out",
    {
      "translate-x-0": isMobileOpen,
      "-translate-x-full": !isMobileOpen,
      "lg:translate-x-0": isExpanded,
      "lg:-translate-x-full": !isExpanded,
    }
  );

  return (
    <aside className={sidebarClasses}>
      <div className="flex items-center gap-3 px-4 py-4 border-b border-gray-200 dark:border-gray-800">
        <img src="/logoHire.jpg" alt="Logo" className="h-8 w-8" />
        <span className="text-lg font-semibold text-gray-900 dark:text-white">Hirezy</span>
      </div>

      <nav className="mt-4 space-y-1 px-3">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.name}
              to={item.path}
              className={clsx(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors",
                isActive
                  ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-900/40 dark:text-indigo-400"
                  : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
              )}
            >
              {item.icon}
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
