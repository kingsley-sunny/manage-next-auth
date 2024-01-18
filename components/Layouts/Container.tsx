import { ReactNode } from "react";
import { cn } from "../../libs/utils";

export const Container = ({ children, className }: { className?: string; children: ReactNode }) => {
  return <div className={cn("max-w-7xl mx-auto px-8", className)}>{children}</div>;
};
