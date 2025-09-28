import { MyTable } from '@/common/table/table.content';
import { UseDeliveryMenLogsColumns } from './columns';
import type { ColumnDef } from '@tanstack/react-table';
import { Spinner } from '@/common/loaders/spinner';
import type { AppInfinteQueryResult } from '@/types/types';
import type { DeliveryManLogTypes } from './deliveryMenLogs.type';

export const DeliveryMenLogs = ({ query }: { query?: AppInfinteQueryResult }) => {
  const columns = UseDeliveryMenLogsColumns({ query });
  return (
    <div>
      <MyTable
        data={query?.data?.pages.flat() as []}
        columns={columns as ColumnDef<DeliveryManLogTypes>[]}
        isLoading={query?.isPending}
        paginationRef={query?.ref}
      />
      {query?.isFetchingNextPage && <Spinner />}
    </div>
  );
};
