import { useClassificationsColumns } from './columns';
import CLASSIFICATIONS_MOCK_DATA from './CLASSIFICATIONS_MOCK_DATA.json';
import { useGetClassifications } from './apis/useGetClassifications';
import type { ColumnDef } from '@tanstack/react-table';
import { Spinner } from '@/common/loaders/spinner';
import { MyTable } from '@/common/table/table.content';
export const ProductsClassifications = () => {
  const columns = useClassificationsColumns();
  const { isPending, ref, isFetchingNextPage, data } = useGetClassifications();

  const dataApi = data?.pages.flat() ?? [];
  const columnsDef = columns as ColumnDef<(typeof CLASSIFICATIONS_MOCK_DATA)[0]>[];

  return (
    <>
      <MyTable data={dataApi} columns={columnsDef} isLoading={isPending} paginationRef={ref} />;
      {isFetchingNextPage && <Spinner />}
    </>
  );
};
