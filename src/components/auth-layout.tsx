interface AuthLayoutProps {
  children: React.ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="relative min-h-screen min-w-screen flex items-center justify-center bg-muted/50">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      <div className="relative z-10 mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        {children}
      </div>
    </div>
  );
}
