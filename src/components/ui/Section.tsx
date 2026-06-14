import { ReactNode } from "react";

/* ---------------------------------------------------------
   Section — Wraps page sections with consistent spacing
   --------------------------------------------------------- */

export interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  /** Controls vertical padding */
  spacing?: "sm" | "md" | "lg";
}

export default function Section({
  children,
  className = "",
  id,
  spacing = "lg",
}: SectionProps) {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  );
}
