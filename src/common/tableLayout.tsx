import { useNavigate } from 'react-router-dom';
import { SearchBar } from '@/common/search';
import { MyTable } from '@/common/table/table.content'; // Assuming path
import { Tabs } from '@/common/tabs';
import { t } from 'i18next';
import type { ColumnDef } from '@tanstack/react-table';
import { LayoutTitle } from './layoutTitle/layoutTitle';
import { AppButton } from './appButton/appButton';

interface TableLayoutProps<TData> {
  buttonText: string;
  navigationPath: string;
  columns: ColumnDef<TData>[];
  data: TData[];
}

export const TableLayout = <TData,>({
  buttonText,
  navigationPath,
  columns,
  data,
}: TableLayoutProps<TData>) => {
  const navigate = useNavigate();

  const handleSearch = () => {};

  return (
    <div>
      <LayoutTitle title={t('products_management.table_header')} />

      <div className='flex justify-center md:justify-between gap-5 items-center flex-wrap mt-[40px] mb-[10px]'>
        <Tabs />
        <div className='flex items-center gap-[13px]'>
          <SearchBar placeholder={t('products_management.search')} onSearch={handleSearch} />
          <AppButton onClick={() => navigate(navigationPath)}>{buttonText}</AppButton>
        </div>
      </div>

      <MyTable data={data} columns={columns} />
    </div>
  );
};
