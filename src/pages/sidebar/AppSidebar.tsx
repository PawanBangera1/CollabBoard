import {
  Calendar,
  ChevronUp,
  ChevronDown,
  Home,
  Inbox,
  Search,
  Settings,
  FolderPlus,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { FaRegUser } from "react-icons/fa";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "@/assets/logo/logo.png";
// Menu items.
const items = [
  {
    title: "Projects",
    url: "/project-overview",
    icon: Home,
  },
  {
    title: "Tasks",
    url: "/task-overview",
    icon: Inbox,
  },
  {
    title: "Teams",
    url: "#",
    icon: Calendar,
  },
  {
    title: "User",
    url: "#",
    icon: Search,
  },
  {
    title: "Notifications",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="px-3">
        <div className="flex items-center justify-between p-2">
          <img src={logo} alt="CollabBoard Logo" className="h-8 w-auto" />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      {(() => {
                        const Icon = item.icon;
                        return <Icon className="size-4 text-black dark:text-white  hover:text-blue-500" />;
                      })()}
                      <span className="text-black dark:text-white">
                        {item.title}
                      </span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="w-full inline-flex items-center gap-3 rounded-md px-2 py-2 text-left hover:bg-sidebar-accent">
              <Avatar className="h-6 w-6">
                <AvatarImage src="#" alt="User" />

                <AvatarFallback>
                  <FaRegUser />
                </AvatarFallback>
              </Avatar>
              <span className="text-sm">pawan</span>
              <div className="flex-1">
                <ChevronUp className="ml-auto h-4 w-4" />
                <ChevronDown className="ml-auto h-4 w-4" />
              </div>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="right" className="w-48">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Sign out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
