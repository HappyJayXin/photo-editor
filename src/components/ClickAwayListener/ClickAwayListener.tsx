import React, { useEffect, useRef } from 'react';

type Props = {
  onClick: (e: MouseEvent | TouchEvent) => void;
  targetElementId?: string;
  children: React.ReactNode;
};

const ClickAwayListener: React.FC<Props> = ({
  onClick,
  targetElementId = '__next',
  children,
  ...rest
}: Props) => {
  const node = useRef<HTMLDivElement>(null);

  const handleClick = (e: MouseEvent | TouchEvent) => {
    if (node.current && !node.current.contains(e.target as HTMLElement)) {
      onClick(e);
    }
  };

  useEffect(() => {
    const element = document.getElementById(targetElementId);

    if (element) {
      element.addEventListener('mousedown', handleClick);
      element.addEventListener('touchstart', handleClick);

      return () => {
        element.removeEventListener('mousedown', handleClick);
        element.removeEventListener('touchstart', handleClick);
      };
    }
  }, [onClick, targetElementId]);

  return (
    <span ref={node} {...rest}>
      {children}
    </span>
  );
};

export default ClickAwayListener;
