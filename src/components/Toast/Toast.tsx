import { useEffect, memo } from 'react';

import useToast from './hook/useToast';
import ToastWrapper from './component/ToastWrapper';

import type { ChildrenProps } from '@/types/common';
import type { ToastOption } from './type';

type Props = ChildrenProps &
  Omit<ToastOption, 'placement'> & {
    id: number;
    style: object;
  };

const Toast = ({
  children,
  id,
  appearance,
  autoDismissTimeout,
  closeButton = false,
  title,
  style,
}: Props) => {
  const { removeToast } = useToast();

  let timer: NodeJS.Timeout;

  useEffect(() => {
    timer = setTimeout(() => {
      removeToast(id);
    }, autoDismissTimeout);
    return () => {
      clearTimeout(timer);
    };
  });

  const onClose = () => {
    removeToast(id);
    clearTimeout(timer);
  };

  return (
    <ToastWrapper
      onClose={onClose}
      appearance={appearance}
      closeButton={closeButton}
      title={title}
      style={style}
    >
      {children}
    </ToastWrapper>
  );
};

export default memo(Toast);
