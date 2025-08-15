import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset",
        variant === "default" && "bg-blue-100 text-blue-800 ring-blue-300",
        variant === "secondary" && "bg-gray-100 text-gray-800 ring-gray-300",
        variant === "outline" && "text-gray-700 ring-gray-300",
        className
      )}
      {...props}
    />
  );
}
