export const StatusFilterButton = ({
  status,
  isActive,
  onClick,
}: {
  status: { id: string; label: string; count: number; color: string };
  isActive: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`flex items-center justify-center gap-[5px] px-[16px] py-[10px] rounded-[12px] transition-all duration-300 cursor-pointer font-[Inter] font-[400] ${
      isActive ? 'bg-[#01C0AA] text-white' : 'bg-[#FFFFFF] text-[#000000]'
    }`}
    id={status.id}
  >
    <span className='text-[12px]'>{status.label}</span>
    <span
      className={`py-[1.5px] px-[4px] rounded-full text-[10px] ${
        isActive ? 'bg-white text-[#01C0AA]' : 'text-[#000]'
      }`}
      style={!isActive ? { backgroundColor: status.color, color: 'black' } : {}}
    >
      {status.count}
    </span>
  </button>
);
