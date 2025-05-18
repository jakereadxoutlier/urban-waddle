import { useQuery } from '@tanstack/react-query';
import api from '@api/index';

export function useListings() {
  return useQuery({ queryKey: ['listings'], queryFn: () => api.get('/listings') });
}
