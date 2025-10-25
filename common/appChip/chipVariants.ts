import { cva } from 'class-variance-authority';

export const chipVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm text-[16px] py-[10px] rounded-[12px] cursor-text',
  {
    variants: {
      variant: {
        new: 'bg-[#1e87f026] text-[#1E87F0]',
        pending: 'bg-[#ffc24626] text-[#ffc246]',
        completed: 'bg-[#01c0aa26] text-[#01c0aa]',
        rejected: 'bg-[#ff161226] text-[#FF2D55]',
        size: {
          default: 'px-[10px]',
          nospace: 'px-[0px]',
        },
      },
      defaultVariants: {
        variant: 'new',
        size: 'default',
      },
    },
  }
);
