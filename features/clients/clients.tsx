import { MyTable } from '@/common/table/table.content';
import { UseClientColumns } from './columns';
import { useTranslation } from 'react-i18next';
import type { ColumnDef } from '@tanstack/react-table';
import { Spinner } from '@/common/loaders/spinner';
import { SearchBar } from '@/common/search';
import { LayoutTitle } from '@/common/layoutTitle/layoutTitle';
import { useState } from 'react';

// 1. Import your useDebounce hook
import { useDebounce } from '@/hooks/useDebounce';
import { useGetClients } from './apis/useGetClients';
import type { TClient } from './clients.types';

export const Clients = () => {
  const columns = UseClientColumns();
  const { t } = useTranslation();

  const [searchQuery, setSearchQuery] = useState('');
  // 2. Create the debounced value from your search query
  const debouncedSearchQuery = useDebounce(searchQuery, 500); // 500ms delay

  const { isPending, ref, isFetchingNextPage, data } = useGetClients(debouncedSearchQuery);

  const clients = data?.pages.flat() ?? [];

  return (
    <>
      <LayoutTitle title={t('clients.table_header')} />
      <div className='mt-[40px] mb-[10px]'>
        <SearchBar query={searchQuery} onQueryChange={setSearchQuery} />
      </div>
      <MyTable
        data={clients}
        columns={columns as ColumnDef<TClient>[]}
        isLoading={isPending}
        paginationRef={ref}
      />
      {isFetchingNextPage && <Spinner />}
    </>
  );
};
