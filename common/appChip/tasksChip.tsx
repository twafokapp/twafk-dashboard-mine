import avatar from '@/assets/imgs/user_rounded.jpg';
import { Dot } from 'lucide-react';

export const TasksChip = () => {
  return (
    <div className='relative w-[217px] min-h-12 shadow-main rounded-[8px] px-[12px] py-[5px]'>
      <div className=' bg-amber-100'>
        <img className='bg-red-300 w-[34px] h-[34px] rounded-full' src={avatar} alt='avatar' />
        <Dot className='text-online absolute bottom-0 right-6.5' />
      </div>
    </div>
  );
};
