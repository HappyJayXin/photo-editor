import { useCallback, useState } from 'react';
import DialogContainer from './DialogContainer';
import { DialogContext } from './hook/useDialog';

import type { DialogContextProps, DialogInfo } from './type';
import type { ChildrenProps } from '@/types/common';

const DialogProvider = ({ children }: ChildrenProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dialogInfo, setDialogInfo] = useState<DialogInfo>();

  const setDialog: DialogContextProps['setDialog'] = useCallback(
    (params) => {
      setDialogInfo(params);
      setIsOpen(true);
    },
    [setDialogInfo],
  );

  const onClose: DialogContextProps['onClose'] = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  return (
    <DialogContext.Provider value={{ setDialog, onClose }}>
      {children}
      <DialogContainer isOpen={isOpen} info={dialogInfo} />
    </DialogContext.Provider>
  );
};

export default DialogProvider;
