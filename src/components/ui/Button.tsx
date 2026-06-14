import { ButtonHTMLAttributes, forwardRef } from "react";

/* ---------------------------------------------------------
   Button — Base UI component
   --------------------------------------------------------- */

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual variant of the button */
  variant?: "primary" | "secondary" | "ghost" | "outline";
  /** Size preset */
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className = "", children, ...props }, ref) => {
    // Styling will be implemented in the design phase
    return (
      <button ref={ref} className={className} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
