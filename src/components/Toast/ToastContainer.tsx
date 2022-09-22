import { useEffect, useState } from 'react';
import { includes } from 'lodash';
import { useTransition, config } from 'react-spring';

import Toast from './Toast';
import { Container } from './styled';
import Portal from '@/components/Portal';

import type { Toast as ToastType, Placement } from './type';

const ToastContainer = ({ toasts }: { toasts: ToastType[] }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const [placements, setPlacements] = useState<Placement[]>([]);

  useEffect(() => {
    if (toasts.length) {
      const newPlacement = toasts[toasts.length - 1].placement;
      if (!includes(placements, newPlacement)) {
        setPlacements((prev) => [...prev, newPlacement]);
      }
    }
  }, [toasts]);

  const transitions = useTransition(toasts, {
    from: { opacity: 0, transform: 'translate3d(0,100px,0)' },
    enter: { opacity: 1, transform: 'translate3d(0,0px,0)' },
    leave: { opacity: 0 },
    config: config.gentle,
  });

  const pointerEvents = toasts.length > 0 ? 'auto' : 'none';

  if (!mounted) return null;
  return (
    <Portal>
      {placements.map((placement) => (
        <Container
          placement={placement}
          pointerEvents={pointerEvents}
          key={placement}
        >
          {transitions(
            (props, item) =>
              item.placement === placement && (
                <Toast
                  key={item.id}
                  id={item.id}
                  appearance={item.appearance}
                  autoDismissTimeout={item.autoDismissTimeout}
                  closeButton={item.closeButton}
                  title={item.title}
                  style={props}
                >
                  {item.content}
                </Toast>
              ),
          )}
        </Container>
      ))}
    </Portal>
  );
};

export default ToastContainer;
