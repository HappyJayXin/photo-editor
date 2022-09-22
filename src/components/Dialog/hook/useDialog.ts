import { createContext, useContext } from 'react';

import type { DialogContextProps } from '../type';

export const DialogContext = createContext<DialogContextProps | null>(null);

const useDialog = (): DialogContextProps => {
  const result = useContext(DialogContext);

  if (!result) {
    throw new Error();
  }

  return result;
};

export default useDialog;
