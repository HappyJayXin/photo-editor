import { createContext, useContext } from 'react';

import type { ToastContextProps } from '../type';

export const ToastContext = createContext<ToastContextProps | null>(null);

const useToast = (): ToastContextProps => {
  const result = useContext(ToastContext);

  if (!result) {
    throw new Error();
  }

  return result;
};

export default useToast;
