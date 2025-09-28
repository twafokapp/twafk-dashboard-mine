import type { ColumnDef } from '@tanstack/react-table';
import { useProductManagementColumns } from './columns';
import { useGetProductsManagement } from './apis/useProductsMangement';
import { Spinner } from '@/common/loaders/spinner.tsx';
import { MyTable } from '@/common/table/table.content';
import PRODUCTS_MANAGEMENT_MOCK_DATA from './PRODUCTS_MANAGEMENT_MOCK_DATA.json';
export const ProductsManagement = () => {
  const columns = useProductManagementColumns();
  const { isPending, ref, isFetchingNextPage, data } = useGetProductsManagement();

  return (
    <>
      <MyTable
        data={data?.pages.flat() ?? []}
        columns={columns as ColumnDef<(typeof PRODUCTS_MANAGEMENT_MOCK_DATA)[0]>[]}
        isLoading={isPending}
        paginationRef={ref}
      />
      {isFetchingNextPage && <Spinner />}
    </>
  );
};
