import type { TFunction } from '@/types/common';

type onClose = () => void;
type onOk = (onClose: onClose) => void;

export type Message = {
  type: 'message';
  data: {
    title: string;
    body: string;
  };
};

export type Confirm = {
  type: 'confirm';
  data: {
    title: string;
    body: string;
    onOk: onOk;
  };
};

type DialogProps = {
  t: TFunction;
  onClose: () => void;
};

export type DialogInfo = Message | Confirm;
export type ContentProps<T extends DialogInfo> = T['data'] & DialogProps;

export type ButtonType = 'cancel' | 'leave' | 'download' | 'delete';

export type DialogContextProps = {
  setDialog: (payload: Message | Confirm) => void;
  onClose: onClose;
};
