import type { TFunction } from '@/types/common';

export type DialogType = 'message' | null;

export type Message = {
  type: 'message';
  data: {
    title: string;
    body: string;
  };
};

export type ButtonType = 'cancel' | 'leave' | 'download' | 'delete';

type DialogProps = {
  t: TFunction;
  onClose: () => void;
};

export type MessageProps = Message['data'] & DialogProps;

export type DialogContextProps = {
  setDialog: (payload: Message) => void;
  closeDialog: () => void;
};
