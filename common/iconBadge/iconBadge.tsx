
interface IconBadgeProps {
  icon: React.ReactNode;
  count?: number;
}

export const IconBadge = ({icon, count = 0}:IconBadgeProps) => {
  return <div className="relative ">
    <div>{icon}</div>
    {count > 0 && <span className="absolute text-white w-[18px] h-[18px] rounded-full text-center -top-2.5 -right-0.5 text-xs bg-count m-2">{count}</span>}
  </div>;
};
