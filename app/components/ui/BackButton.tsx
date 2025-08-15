"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "./button";

interface BackButtonProps {
  label?: string;
  className?: string;
}

export default function BackButton({ label = "Back", className = "" }: BackButtonProps) {
  const router = useRouter();

  return (
    <Button
      variant="ghost"
      onClick={() => router.back()}
      className={`text-muted-foreground hover:text-black flex items-center ${className}`}
    >
      <ArrowLeft className="w-4 h-4 mr-2 text-blue-600" />
      {label}
    </Button>
  );
}
