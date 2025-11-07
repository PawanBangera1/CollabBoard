import { SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import { PiSignOutBold } from "react-icons/pi";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <header className="sticky top-0 flex shrink-0 h-16 w-full items-center gap-2 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 px-4 z-50">
      <SidebarTrigger className="-ml-1 h-8 w-8" />
      <div className="flex flex-1 items-center justify-between overflow-hidden">
        <div className="flex items-center gap-2 min-w-0">
          <h1 className="text-xl font-bold truncate">CollabBoard</h1>
        </div>
        <div className="flex flex-row items-center gap-2">
        <div className="flex items-center gap-2 shrink-0">
          <ThemeToggle />
        </div>
         <div className="flex items-center gap-2 shrink-0">
            <Link to="/signin" className="mr-2">
              <PiSignOutBold size={24} className="cursor-pointer" />
            </Link>
        </div>
        </div>
      </div>
    </header>
  )
}