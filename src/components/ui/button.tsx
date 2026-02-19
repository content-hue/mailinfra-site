import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 min-h-[44px]",
  {
    variants: {
      variant: {
        default: "bg-[#0000FF] text-white hover:bg-[#0000CC] hover:-translate-y-0.5 shadow-md hover:shadow-lg",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border-2 border-[#E5E7EB] bg-white text-[#1A1A1A] hover:border-[#0000FF] hover:text-[#0000FF]",
        "outline-light": "border-2 border-white/30 bg-transparent text-white hover:bg-white/10 hover:border-white/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-[#0000FF] underline-offset-4 hover:underline",
        cta: "bg-[#FFD700] text-[#1A1A1A] font-bold hover:bg-[#FFC700] hover:-translate-y-1 shadow-[0_4px_12px_rgba(255,215,0,0.4)] hover:shadow-[0_8px_24px_rgba(255,215,0,0.5)]",
      },
      size: {
        default: "h-11 md:h-10 px-5 md:px-6 py-2",
        sm: "h-10 md:h-9 rounded-lg px-4",
        lg: "h-12 rounded-xl px-6 md:px-8",
        xl: "h-12 md:h-14 rounded-xl px-8 md:px-10 text-base md:text-lg",
        "2xl": "h-14 md:h-16 rounded-xl md:rounded-2xl px-8 md:px-12 text-base md:text-xl",
        icon: "h-11 w-11 md:h-10 md:w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };