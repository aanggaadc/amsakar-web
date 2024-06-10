"use client";

import { useFormStatus } from "react-dom";
import { cn } from "@/lib/utils";

interface ButtonSubmitProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const ButtonSubmit = ({
  className,
  children,
  ...props
}: ButtonSubmitProps) => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className={cn(
        "w-full h-12 max-w-[unset] text-xs font-medium lg:text-sm",
        className
      )}
      {...props}
      disabled={pending}
    >
      {pending ? "Mengirim..." : children}
    </button>
  );
};
