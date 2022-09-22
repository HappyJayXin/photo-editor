import { useCallback, useState } from 'react';
import DialogContainer from './DialogContainer';
import { DialogContext } from './hook/useDialog';

import type { DialogContextProps, Message } from './type';
import type { ChildrenProps } from '@/types/common';

const DialogProvider = ({ children }: ChildrenProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dialogInfo, setDialogInfo] = useState<Message>();

  const setDialog: DialogContextProps['setDialog'] = useCallback(
    (params) => {
      setDialogInfo(params);
      setIsOpen(true);
    },
    [setDialogInfo],
  );

  const closeDialog: DialogContextProps['closeDialog'] = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  return (
    <DialogContext.Provider value={{ setDialog, closeDialog }}>
      {children}
      <DialogContainer isOpen={isOpen} info={dialogInfo} />
    </DialogContext.Provider>
  );
};

export default DialogProvider;
