import { useQuery } from '@tanstack/react-query';

import { fetchPost } from '@/api/fetchPost';
import { useRefreshOnFocus } from '@/hooks/useRefreshOnFocus';

export const usePost = (id: number) => {
  const {
    isLoading: isLoadingPost,
    isError: isErrorPost,
    data: dataPost,
    error: errorPost,
    refetch: refetchPost,
    isRefetching: isRefetchingPost,
  } = useQuery({
    queryKey: ['post', id],
    queryFn: () => fetchPost(id),
  });

  useRefreshOnFocus(refetchPost);

  return { isLoadingPost, isErrorPost, dataPost, errorPost, refetchPost, isRefetchingPost };
};
