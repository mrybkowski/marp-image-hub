import { cn } from "@/lib/utils";

interface IContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className }: IContainerProps) {
  return (
    <div
      className={cn(
        className,
        "px-5 mx-auto max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl"
      )}
    >
      {children}
    </div>
  );
}
