
import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm text-[16px] py-[10px] rounded-[12px] cursor-text",
  {
    variants: {
      variant: {
        secondary: "bg-[#1e87f026] text-[#1E87F0]",
        pending: "bg-[#ffc24626] text-[#ffc246]",
        completed: "bg-[#01c0aa26] text-[#01c0aa]",
        rejected: "bg-[#ff161226] text-[#FF2D55]",

      },
      secondaryVariant: {
        filled:"bg-[#1e87f026] text-[#1E87F0]",
        outlined: "border border-[#1E87F0] text-[#1E87F0]",
        text: "text-[#1E87F0] hover:bg-[#1e87f026] hover:text-[#1E87F0]",
      },
      // link: "text-primary underline-offset-4 hover:underline",

      state: {
        // normal:"bg-red-500",
        hover: "",
        press: "",
      },
      size: {
        default: "px-[10px]",
        nospace: "px-[0px]",
      },
    },
    defaultVariants: {
      variant: "secondary",
      state: "press",
      size: "default",
    },
  }
);
