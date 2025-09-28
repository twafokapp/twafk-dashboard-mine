import type { ReactNode } from 'react';

export default function TableBody({ children }: { children: ReactNode }) {
  return (
    <div className='flex items-center w-full  justify-center gap-[82px] min-w-max '>{children}</div>
  );
}
