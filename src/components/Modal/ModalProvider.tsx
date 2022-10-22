import { useCallback, useState } from 'react';
import ModalContainer from './ModalContainer';
import { ModalContext } from './hook/useModal';

import type { ModalContextProps, Payloads } from './type';
import type { ChildrenProps } from '@/types/common';

const ModalProvider = ({ children }: ChildrenProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [payload, setPayload] = useState<Payloads>();

  const openModal: ModalContextProps['openModal'] = useCallback(
    (params) => {
      setIsOpen(true);
      setPayload(params);
    },
    [setIsOpen, setPayload],
  );

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setPayload(undefined);
  }, []);

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <ModalContainer isOpen={isOpen} payload={payload} />
    </ModalContext.Provider>
  );
};

export default ModalProvider;
