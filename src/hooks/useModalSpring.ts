import { useTransition } from 'react-spring';

const useModalBackgroundSpring = (isOpen: boolean) => {
  return useTransition(isOpen, {
    expires: true,
    config: { duration: 200 },
    enter: { opacity: 1 },
    from: { opacity: 0 },
    leave: { opacity: 0 },
  });
};

const useModalSpring = (isOpen: boolean) => {
  return useTransition(isOpen, {
    config: { duration: 200 },
    from: { opacity: 0, transform: 'translateY(-20px)' },
    enter: { opacity: 1, transform: 'translateY(0px)' },
    leave: { opacity: 0, transform: 'translateY(-20px)' },
  });
};

export { useModalBackgroundSpring, useModalSpring };
