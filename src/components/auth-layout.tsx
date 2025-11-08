import sidebarImage from "@/assets/logo/clipImage.png";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-2">
      <div className="relative flex mx-auto items-center justify-center bg-backgroun">
        {children}
      </div>

      <div className="relative flex items-center justify-center bg-muted/40">
        <img
          src={sidebarImage}
          alt="CollabBoard visual"
          className="max-w-[100%] max-h-[90%] object-contain"
        />
      </div>
    </div>
  );
}
