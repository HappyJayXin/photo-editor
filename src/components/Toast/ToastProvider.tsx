import { useCallback, useState } from 'react';
import ToastContainer from './ToastContainer';
import { ToastContext } from './hook/useToast';

import type { ToastContextProps, Toast } from './type';
import type { ChildrenProps } from '@/types/common';

let id = 0;

const defaultOptions = {
  appearance: 'info',
  placement: 'bottom-center',
  autoDismissTimeout: 5000,
} as const;

const ToastProvider = ({ children }: ChildrenProps) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast: ToastContextProps['addToast'] = useCallback(
    (content, options = defaultOptions) => {
      const newToast = {
        id: id++,
        content,
        appearance: options.appearance ?? defaultOptions.appearance,
        placement: options.placement ?? defaultOptions.placement,
        autoDismissTimeout:
          options.autoDismissTimeout ?? defaultOptions.autoDismissTimeout,
        closeButton: Boolean(options.closeButton),
        title: options.title,
      };

      setToasts((toasts) => [...toasts, newToast]);
    },
    [setToasts],
  );

  const removeToast: ToastContextProps['removeToast'] = useCallback(
    (id) => {
      setToasts((toasts) => toasts.filter((t) => t.id !== id));
    },
    [setToasts],
  );

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer toasts={toasts} />
    </ToastContext.Provider>
  );
};

export default ToastProvider;
