
import { SidebarProvider, useSidebar } from "../context/SidebarContext";
import { Outlet } from "react-router";
import AppHeader from "./AppHeader";
import Backdrop from "./Backdrop";
import AppSidebar from "./AppSidebar";

const LayoutContent: React.FC = () => {
  const { isExpanded, isMobileOpen } = useSidebar();

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950">
      <AppSidebar />
      <Backdrop />

      <div
        className={`
          transition-all duration-300
          ${isExpanded ? "lg:ml-[260px]" : "lg:ml-0"}
          ${isMobileOpen ? "ml-0" : ""}
        `}
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
