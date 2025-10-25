interface SVGIconBadgeProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  key: string;
  t: string;
  count?: number;
}
export const SVGIconBadge = ({ icon: Icon, key, t, count = 0 }: SVGIconBadgeProps) => {
  return (
    <section className='flex flex-col justify-center items-center gap-1'>
      <div className='relative bg-primary-light p-[14px] rounded-xl w-14 hover:bg-primary hover:*:stroke-white hover:cursor-pointer'>
        <Icon className='stroke-primary-xlight' />
        {count > 0 ? <div className="absolute text-white w-[18px] h-[18px] rounded-full text-center -top-1.5 -right-1.5 text-xs bg-count m-2">{count}</div> : null }
      </div>
      {/* <div key={item.id} className='text-[10px] text-sidebar-links/70'> */}
      <div key={key} className='text-[10px] text-sidebar-links/70'>
        {t}
      </div>
    </section>
  );
};
