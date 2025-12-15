
import { SidebarProvider, useSidebar } from "../context/SidebarContext";
import { Outlet } from "react-router";
import AppHeader from "./AppHeader";
import Backdrop from "./Backdrop";
import AppSidebar from "./AppSidebar";

const LayoutContent: React.FC = () => {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();

  return (
    <div className="min-h-screen xl:flex bg-gray-100 dark:bg-gray-900">
      {/* Sidebar + Backdrop */}
      <div>
        <AppSidebar />
        <Backdrop />
      </div>

      {/* Main Content */}
      <div
        className={`flex-1 transition-all duration-300
          ${isExpanded || isHovered ? "lg:ml-[260px]" : "lg:ml-[80px]"}
          ${isMobileOpen ? "ml-0" : ""}`}
      >
        <AppHeader />

        <div className="px-4 pt-4 pb-6 mx-auto max-w-7xl md:px-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default function AppLayout() {
  return (
    <SidebarProvider>
      <LayoutContent />
    </SidebarProvider>
  );
}
