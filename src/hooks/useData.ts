import { useQuery } from '@tanstack/react-query';

import { fetchData } from '@/api/fetchData';
import { useRefreshOnFocus } from '@/hooks/useRefreshOnFocus';

export const useData = () => {
  const { isLoading, isError, data, error, refetch, isRefetching } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchData,
  });

  useRefreshOnFocus(refetch);

  return { isLoading, isError, data, error, refetch, isRefetching };
};
