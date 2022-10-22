import { useTranslation } from 'next-i18next';
import Dialog from './Dialog';
import useDialog from './hook/useDialog';

import MessageContent from './components/MessageContent';
import ConfirmContent from './components/ConfirmContent';

import type { DialogInfo } from './type';

type Props = {
  isOpen: boolean;
  info?: DialogInfo;
};

const DialogContainer = ({ info, isOpen }: Props) => {
  const { t } = useTranslation('dialog');
  const { onClose } = useDialog();

  const getContent = (info: DialogInfo) => {
    switch (info.type) {
      case 'message':
        return <MessageContent {...info.data} t={t} onClose={onClose} />;
      case 'confirm':
        return <ConfirmContent {...info.data} t={t} onClose={onClose} />;
    }
  };

  return <Dialog isOpen={isOpen}>{info && getContent(info)}</Dialog>;
};

export default DialogContainer;
