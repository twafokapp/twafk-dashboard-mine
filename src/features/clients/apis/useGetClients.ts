import { getAllClients } from './clientApis';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { CLIENTS_KEY } from '@/constants/queryKeys';

// Accept the search string as an argument
export const useGetClients = (search: string) => {
  const {
    data,
    error,
    isPending,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isRefetching,
    isError,
  } = useInfiniteQuery({
    refetchOnWindowFocus: false,
    // Add the search term to the queryKey to uniquely identify and cache the query
    queryKey: [CLIENTS_KEY, search],
    // Pass the search term down to the API call function
    queryFn: ({ pageParam }) => getAllClients({ pageParam, search })?.then(res => res?.data?.data),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      // It's safer to check if lastPage exists
      if (!lastPage || lastPage.length < 10) {
        return undefined;
      }
      return allPages.length + 1;
    },
    staleTime: 6000,
  });

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  return {
    data,
    error,
    isPending,
    hasNextPage,
    isFetchingNextPage,
    isRefetching,
    fetchNextPage,
    isError,
    ref,
  };
};
