import { useEffect } from 'react';
import type { DependencyList } from 'react';

const useEffectAsync = (
  asyncFunc: () => void,
  inputs: DependencyList | undefined,
) => {
  useEffect(() => {
    asyncFunc();
  }, inputs);
};

export default useEffectAsync;
