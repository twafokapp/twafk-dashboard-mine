import { PRODUCTS_ORDERS } from '@/constants/queryKeys';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getAllProductsOrders } from './productsOrdersApis';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export const useGetProductsOrders = () => {
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

    queryKey: [PRODUCTS_ORDERS],
    queryFn: ({ pageParam }) => getAllProductsOrders({ pageParam })?.then(res => res?.data?.data),
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
  });

  return {
    data,
    error,
    isPending,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isRefetching,
    isError,
    ref,
  };
};
