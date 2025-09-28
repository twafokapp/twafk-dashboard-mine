import { SHIPMENTS_KEY } from '@/constants/queryKeys';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { getAllShipmentManagement } from './shipmentmanagementApis';

export const useGetShipments = () => {
  const {
    data,
    error,
    isPending,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isRefetching,
    refetch,
    isError,
  } = useInfiniteQuery({
    refetchOnWindowFocus: false,
    queryKey: [SHIPMENTS_KEY],
    queryFn: ({ pageParam }) =>
      getAllShipmentManagement({ pageParam })?.then(res => res?.data?.data),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length < 10) {
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
    fetchNextPage,
    isFetchingNextPage,
    isRefetching,
    refetch,
    isError,
    ref,
  };
};
