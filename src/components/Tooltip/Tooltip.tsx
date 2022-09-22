import { useState, useCallback, useEffect } from 'react';
import { includes } from 'lodash';
import { Manager, usePopper } from 'react-popper';

import { ReferenceElement, TooltipContainer, Arrow } from './styled';
import useInterval from '@/hooks/useInterval';

import Portal from '@/components/Portal';
import ClickAwayListener from '@/components/ClickAwayListener';

import type { Placement } from '@popperjs/core';
import type { ChildrenProps } from '@/types/common';
import Typography from '../Typography';

type TooltipEvent = 'hover' | 'click';

type Props = ChildrenProps & {
  placement?: Placement;
  content: React.ReactNode;
  /**
   * Event to appear tooltip
   */
  on?: TooltipEvent[];
  isArrow?: boolean;
  /**
   * The seconds time displayed at the beginning
   */
  initialTime?: number;
  /**
   * Offset along the reference
   */
  skidding?: number;
  /**
   * Offset away the reference
   */
  distance?: number;
};

type PopperElement = HTMLElement | null;

const Tooltip = ({
  placement,
  children,
  content,
  on = ['hover'],
  isArrow = false,
  initialTime = 0,
  skidding = 0,
  distance = 8,
}: Props) => {
  const [referenceElement, setReferenceElement] = useState<PopperElement>(null);
  const [arrowElement, setArrowElement] = useState<HTMLElement | null>(null);
  const [popperElement, setPopperElement] = useState<PopperElement>(null);
  const { styles, attributes, update } = usePopper(
    referenceElement,
    popperElement,
    {
      placement,
      strategy: 'fixed',
      modifiers: [
        { name: 'offset', options: { offset: [skidding, distance] } },
        { name: 'arrow', options: { element: arrowElement } },
      ],
    },
  );

  const [show, setShow] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (initialTime > 0) {
      setShow(true);
      timer = setTimeout(() => setShow(false), initialTime * 1000);
    }

    return () => clearTimeout(timer);
  }, [initialTime]);

  const onMouseEnter = () => {
    if (includes(on, 'hover')) {
      setShow(true);
    }
  };

  const onMouseLeave = () => {
    if (includes(on, 'hover')) {
      setShow(false);
    }
  };

  const onClick = () => {
    if (includes(on, 'click')) {
      setShow(true);
    }
  };

  const updateCallback = useCallback(() => {
    if (update) {
      update();
    }
  }, [update]);

  useInterval(updateCallback, show ? 1000 : null);

  return (
    <Manager>
      <ReferenceElement
        ref={setReferenceElement}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
      >
        <ClickAwayListener onClick={() => setShow(false)}>
          {children}
        </ClickAwayListener>
      </ReferenceElement>
      <Portal>
        <TooltipContainer
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
          show={show}
        >
          <Typography as="div" variant="body2" color="white">
            {content}
          </Typography>
          {isArrow ? (
            <Arrow
              data-placement={placement}
              ref={setArrowElement}
              style={styles.arrow}
              {...attributes.arrow}
            />
          ) : null}
        </TooltipContainer>
      </Portal>
    </Manager>
  );
};

export default Tooltip;
