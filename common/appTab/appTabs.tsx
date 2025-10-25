interface AppTabsProps {
  className?: string;
  tabText?: string;
  count?: number;
  countColor?: string;
  selectedComponent: string;
  handleTabChange: (tab: string) => void;
}

export const AppTabs = ({
  className,
  handleTabChange,
  tabText,
  selectedComponent,
  count,
  countColor,
}: AppTabsProps) => {
  if (countColor === 'green') {
    countColor = 'bg-[#01C0AA] text-white';
  } else if (countColor === 'red') {
    countColor = 'bg-[#F64E4B] text-white';
  }
  return (
    <div className='flex justify-center items-center '>
      <button className={className} onClick={() => handleTabChange(selectedComponent)}>
        {tabText}
      </button>
      {count === 0 ? null : (
        <span
          className={`"mb-[10px] ${countColor} text-[13px] sm:text-[18px] mx-[10px] rounded-full w-[20px] h-[20px] font-300 flex items-center justify-center "`}
        >
          {count}
        </span>
      )}
    </div>
  );
};
