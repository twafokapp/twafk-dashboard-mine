
interface IconBadgeProps {
  icon: React.ReactNode;
  count?: number;
}

export const IconBadge = ({icon, count = 0}:IconBadgeProps) => {
  return <div className="relative ">
    <div>{icon}</div>
    {count > 0 && <span className="absolute text-white bg-red-600 w-[18px] h-[18px] rounded-full text-center -top-1 right-9 text-xs">{count}</span>}
  </div>;
};
