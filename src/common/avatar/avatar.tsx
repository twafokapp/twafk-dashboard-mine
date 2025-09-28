import { Avatar, AvatarImage } from '@/components/ui/avatar';

export const AvatarParent = () => {
  return (
    <div>
      <Avatar className='rounded-full'>
        <AvatarImage src='https://github.com/evilrabbit.png' alt='@evilrabbit' />
      </Avatar>
    </div>
  );
};
