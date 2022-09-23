import { useEffect } from 'react';
import type { DependencyList } from 'react';

export const useEffectAsync = (
  asyncFunc: () => void,
  inputs: DependencyList | undefined,
) => {
  useEffect(() => {
    asyncFunc();
  }, inputs);
};
