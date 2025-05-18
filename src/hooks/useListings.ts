import { useQuery } from '@tanstack/react-query';
import { mockListings } from '@utils/mockData';

export function useListings() {
  return useQuery({
    queryKey: ['listings'],
    queryFn: async () => mockListings,
  });
}
