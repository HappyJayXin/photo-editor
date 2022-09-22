import { useTranslation } from 'next-i18next';
import Dialog from './Dialog';
import useDialog from './hook/useDialog';

import MessageContent from './components/MessageContent';

import type { Message } from './type';

type Props = {
  isOpen: boolean;
  info?: Message;
};

const DialogContainer = ({ info, isOpen }: Props) => {
  const { t } = useTranslation();
  const { closeDialog } = useDialog();

  const getContent = (info: Message) => {
    switch (info.type) {
      case 'message':
        return <MessageContent {...info.data} t={t} onClose={closeDialog} />;
    }
  };

  return <Dialog isOpen={isOpen}>{info && getContent(info)}</Dialog>;
};

export default DialogContainer;
