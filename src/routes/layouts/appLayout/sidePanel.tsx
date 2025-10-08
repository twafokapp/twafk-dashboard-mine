import { Avatar, AvatarImage } from '@/components/ui/avatar';
import ceo from '@/assets/imgs/ceo.svg';
import { Bell, Cog, LogOut } from 'lucide-react';
import { IconBadge } from '@/common/iconBadge/iconBadge';

export const SidePanel = () => {
  return (
    <div className=' bg-primary-dark overflow-hidden '>
      <div className=' mt-[45px] text-nowrap mx-5 '>
        <Avatar className='rounded-full m-auto'>
          <AvatarImage src={ceo} alt='@evilrabbit' />
        </Avatar>
        <h3 className='text-white font-bold text-base'>أحمد حسن</h3>
      </div>

      <div className=' h-[70%] flex flex-col items-center justify-between mt-20'>
        <div className='flex flex-col gap-10'>
          <IconBadge icon={<Bell color='white' size={46} className='m-auto' />} count={10} />
          <IconBadge icon={<Cog color='white' size={46} className='m-auto' />} count={3} />
        </div>
        <IconBadge
          icon={
            <LogOut
              color='red'
              size={46}
              className='bg-white rounded-xl px-3
        '
            />
          }
        />
      </div>
    </div>
  );
};
