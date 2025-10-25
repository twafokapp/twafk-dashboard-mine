import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/twClassNames"
import type { VariantProps } from "class-variance-authority"
import { chipVariants } from "@/common/appChip/chipVariants"

export function Chip({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof chipVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot='button'
      className={cn(chipVariants({ variant, className }))}
      {...props}
    />
  );
}
