import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./components/AppSideBar";
import { SiteHeader } from "./components/SideHeader";
const Layout = () => {
  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
         {/* Components here */}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Layout;
