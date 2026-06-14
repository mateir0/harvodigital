import { ReactNode } from "react";

/* ---------------------------------------------------------
   Container — Constrains content width with consistent padding
   --------------------------------------------------------- */

export interface ContainerProps {
  children: ReactNode;
  className?: string;
  /** Max-width variant */
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

export default function Container({
  children,
  className = "",
  size = "xl",
}: ContainerProps) {
  return (
    <div className={`mx-auto w-full px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
