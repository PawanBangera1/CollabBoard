import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/pages/sidebar/AppSidebar";
import { Navbar } from "@/components/navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-screen overflow-hidden">
        <AppSidebar />
        <SidebarInset className="w-full">
          <Navbar />
          <div className="flex flex-1 flex-col gap-4 p-4 pt-6 overflow-hidden w-full">
            <div className="min-h-[calc(100vh-4rem)]">{children}</div>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
