import { MyTable } from '@/common/table/table.content';
import { UseDeliveryMenRegisterRequestsColumns } from './columns';
import DELIVERYMEN_REGISTER_REQUESTS from './DELIVERYMEN_REGISTER_REQUESTS.json';
import type { AppInfinteQueryResult } from '@/types/types';
import type { ColumnDef } from '@tanstack/react-table';
import { Spinner } from '@/common/loaders/spinner';
export const DeliveryMenRegisterRequests = ({ query }: { query: AppInfinteQueryResult }) => {
  const columns = UseDeliveryMenRegisterRequestsColumns();
  return (
    <div>
      <MyTable
        data={query.data?.pages.flat() ?? []}
        columns={columns as ColumnDef<(typeof DELIVERYMEN_REGISTER_REQUESTS)[0]>[]}
        isLoading={query.isPending}
        paginationRef={query.ref}
      />
      {query.isFetchingNextPage && <Spinner />}
    </div>
  );
};
