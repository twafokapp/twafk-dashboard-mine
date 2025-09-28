export interface PageParams {
  page: number;
  limit?: number;
}

export interface ApiResponse<T> {
  status: number;
  message: string | null;
  data: T;
}

export interface AppInfinteQueryResult
  extends Pick<
    UseInfiniteQueryResult,
    | 'data'
    | 'error'
    | 'isPending'
    | 'hasNextPage'
    | 'fetchNextPage'
    | 'isFetchingNextPage'
    | 'isRefetching'
    | 'isError'
  > {
  ref: (node?: Element | null) => void;
}
