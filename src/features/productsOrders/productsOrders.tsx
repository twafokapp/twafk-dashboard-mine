import { MyTable } from '@/common/table/table.content';
import MOCK_DATA from './PRODUCTS_MOCK_DATA.json';
import { UseProductOrdersColumns } from './columns';
import { useTranslation } from 'react-i18next';
import { useGetProductsOrders } from './apis/useGetProductsOrders';
import type { ColumnDef } from '@tanstack/react-table';
import { Spinner } from '@/common/loaders/spinner';
import { SearchBar } from '@/common/search';
import { LayoutTitle } from '@/common/layoutTitle/layoutTitle';
export const ProductsOrders = () => {
  const { t } = useTranslation();
  const columns = UseProductOrdersColumns();
  const { isPending, ref, isFetchingNextPage, data } = useGetProductsOrders();
  return (
    <>
      <LayoutTitle title={t('products_orders.table_header')} />
      <div className='mt-[40px] mb-[10px]'>
        <SearchBar />
      </div>
      <MyTable
        data={data?.pages.flat() ?? []}
        columns={columns as ColumnDef<(typeof MOCK_DATA)[0]>[]}
        isLoading={isPending}
        paginationRef={ref}
      />
      {isFetchingNextPage && <Spinner />}
    </>
  );
};
