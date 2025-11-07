import { SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 flex shrink-0 h-16 w-full items-center gap-2 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 px-4 z-50">
      <SidebarTrigger className="-ml-1 h-8 w-8" />
      <div className="flex flex-1 items-center justify-between overflow-hidden">
        <div className="flex items-center gap-2 min-w-0">
        </div>
        <div className="flex flex-row items-center gap-2">
          <div className="flex items-center gap-2 shrink-0">
            <ThemeToggle />
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <FaRegUser size={20} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link to="#">
                    <span className="text-black dark:text-white">Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/signin"><span className="text-black dark:text-white">Sign Out</span></Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}
