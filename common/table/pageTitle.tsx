interface TableProps {
  // tableTitle?: string
  tableTitle?: React.ReactNode;
  headerImg?: string;
}
export const PageTitle = ({ tableTitle, headerImg }: TableProps) => {
  return (
    <div className='flex items-center gap-2.5 not-last-of-type:mt-[2.13rem]'>
      {headerImg && (
        <img
          src={headerImg}
          className='w-[3.18563rem] h-[3.18563rem] rounded-[3.1rem] shadow-card '
          alt={`${headerImg}`}
        />
      )}
      <h4 className='text-[1.5625rem] font-light'>{tableTitle}</h4>
    </div>
  );
};
