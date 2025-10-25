import type { JSX } from 'react';

interface SettingsItemProps {
  itemText: string;
  itemIcon: JSX.Element;
  itemArrow?: JSX.Element;
  onClick?: () => void;
}
export const SettingsItem = ({ itemText, itemIcon, itemArrow, onClick }: SettingsItemProps) => {
  return (
    <button
      className='lg:w-183.5 h-12 bg-white rounded-lg  flex justify-between items-center gap-3 lg:gap-0 px-6 cursor-pointer max-w-[734px] overflow-hidden md:w-[434px] sm:w-[334px] text-[14px] md:text-[12px]'
      onClick={onClick}
    >
      <div className='flex gap-3'>
        <div className='flex items-center w-6 h-6'> {itemIcon}</div>
        <div className='flex items-center text-[12px]'>{itemText}</div>
      </div>
      <div>{itemArrow}</div>
    </button>
  );
};
