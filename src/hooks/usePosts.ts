import { useQuery } from '@tanstack/react-query';

import { fetchPosts } from '@/api/fetchPosts';
import { useRefreshOnFocus } from '@/hooks/useRefreshOnFocus';

export const usePosts = () => {
  const {
    isLoading: isLoadingPosts,
    isError: isErrorPosts,
    data: dataPosts,
    error: errorPosts,
    refetch: refetchPosts,
    isRefetching: isRefetchingPosts,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  useRefreshOnFocus(refetchPosts);

  return { isLoadingPosts, isErrorPosts, dataPosts, errorPosts, refetchPosts, isRefetchingPosts };
};
