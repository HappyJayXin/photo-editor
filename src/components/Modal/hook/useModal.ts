import { createContext, useContext } from 'react';

import type { ModalContextProps } from '../type';

export const ModalContext = createContext<ModalContextProps | null>(null);

const useModal = (): ModalContextProps => {
  const result = useContext(ModalContext);

  if (!result) {
    throw new Error();
  }

  return result;
};

export default useModal;
