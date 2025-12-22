import { Link, useLocation } from "react-router-dom";
import { Grid3x3, Users, Calendar, BarChart3, Settings } from "lucide-react";
import { useSidebar } from "../context/SidebarContext";

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

  return (
    <aside
      className={`
        fixed inset-y-0 left-0 z-40 mt-14
        bg-white border-r border-gray-200 dark:bg-gray-900 dark:border-gray-800
        transition-all duration-300
        w-[260px]

        /* Mobile */
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}

        /* Desktop */
        lg:${isExpanded ? "translate-x-0" : "-translate-x-full"}
      `}
    >
      {/* Logo */}
      <div className="flex items-center gap-3 px-3 py-4">
        <img
          src="/logoHire.jpg"
          alt="Hirezy Logo"
          className="h-8 w-8 object-contain"
        />
        <span className="text-lg font-semibold text-gray-900 dark:text-white">
          Hirezy
        </span>
      </div>

      {/* Navigation */}
      <nav className="mt-4 space-y-1 px-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm
                ${
                  isActive
                    ? "bg-indigo-50 text-indigo-600 font-medium dark:bg-indigo-900 dark:text-indigo-400"
                    : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                }`}
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
