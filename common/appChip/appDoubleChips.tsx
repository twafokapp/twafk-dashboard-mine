import type { ReactNode } from "react";

interface AppDoubleChipsProps {
  leftSide: string;
  rightSide: ReactNode;
}
export const AppDoubleChips = ({leftSide,rightSide}:AppDoubleChipsProps) => {
  return (
    <div className='flex items-center'>
      <span className='text-white bg-primary px-3 py-[6.5px] rounded-3xl relative z-2 text-nowrap text-sm'>
        {leftSide}
      </span>
      <div className='bg-primary-light pl-[4px] pr-8 py-2 rounded-3xl relative left-5 z-0 text-sm'>
        <span>{rightSide}</span>
      </div>
    </div>
  );
};
