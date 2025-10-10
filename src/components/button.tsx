import * as React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "ghost";
  size?: "sm" | "md" | "icon";
};

const base =
  "inline-flex items-center justify-center rounded-2xl border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
const variants = {
  default:
    "bg-black text-white border-black hover:opacity-90 dark:bg-white dark:text-black dark:border-white",
  ghost:
    "bg-transparent text-black border-neutral-200 hover:bg-neutral-50 dark:text-white dark:border-neutral-800 dark:hover:bg-neutral-900",
};
const sizes = {
  sm: "h-8 px-3",
  md: "h-10 px-4",
  icon: "h-10 w-10 p-0",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "ghost", size = "md", ...props }, ref) => (
    <button
      ref={ref}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    />
  )
);
Button.displayName = "Button";

export default Button;
