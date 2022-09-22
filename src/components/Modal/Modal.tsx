import Portal from '@/components/Portal';
import {
  useModalBackgroundSpring,
  useModalSpring,
} from '@/hooks/useModalSpring';
import { AnimateBackground, Container, AnimateWrapper } from './styled';

import type { ChildrenProps } from '@/types/common';

type Props = ChildrenProps & {
  isOpen: boolean;
};

const Modal = ({ isOpen, children }: Props) => {
  const backgroundTransitions = useModalBackgroundSpring(isOpen);
  const dialogTransitions = useModalSpring(isOpen);

  return (
    <Portal>
      {backgroundTransitions(
        (style, item) => item && <AnimateBackground style={style} />,
      )}
      {dialogTransitions(
        (style, item) =>
          item && (
            // Add id modal for ClickAwayListener component
            <Container id="modal">
              <AnimateWrapper elevation={4} style={style}>
                {children}
              </AnimateWrapper>
            </Container>
          ),
      )}
    </Portal>
  );
};

export default Modal;
