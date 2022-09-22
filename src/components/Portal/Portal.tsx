import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ChildrenProps } from '@/types/common';

type Props = ChildrenProps & {
  selector?: string;
};

const Portal = ({ children, selector = 'body' }: Props) => {
  const [mounted, setMounted] = useState(false);
  const [element, setElement] = useState<Element | null>(null);

  useEffect(() => {
    setMounted(true);
    setElement(document.querySelector(selector));
    return () => setMounted(false);
  }, []);

  return element && mounted ? createPortal(children, element) : null;
};

export default Portal;
