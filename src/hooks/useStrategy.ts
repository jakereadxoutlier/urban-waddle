import { useMutation } from '@tanstack/react-query';
import { generateStrategy } from '@api/openai';

export function useStrategy() {
  return useMutation({ mutationFn: generateStrategy });
}
