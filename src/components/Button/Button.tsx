import { forwardRef } from 'react';
import Link from 'next/link';
import { GlobalButton, GlobalLink, IconWrapper } from './styled';

import type { Variant, Size } from './styled';
import type { ChildrenProps } from '@/types/common';
import type { ColorType } from '@/types/theme';

type Props = ChildrenProps & {
  id?: string;
  color?: ColorType;
  variant?: Variant;
  size?: Size;
  isDisabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  fullWidth?: boolean;
  minWidth?: string;
  type?: 'button' | 'submit' | 'reset';
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  href?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
};

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, Props>(
  (
    {
      children,
      onClick,
      type = 'button',
      isDisabled = false,
      startIcon,
      endIcon,
      href,
      target,
      ...props
    },
    ref,
  ) => {
    // internal link
    if (href && !target) {
      return (
        <Link href={isDisabled ? {} : href}>
          <GlobalButton
            ref={ref as React.ForwardedRef<HTMLButtonElement>}
            disabled={isDisabled}
            {...props}
          >
            {startIcon ? <IconWrapper>{startIcon}</IconWrapper> : null}
            {children}
            {endIcon ? <IconWrapper>{endIcon}</IconWrapper> : null}
          </GlobalButton>
        </Link>
      );
    }

    // external link
    if (href && target) {
      return (
        <GlobalLink
          ref={ref as React.ForwardedRef<HTMLAnchorElement>}
          href={href}
          target={target}
          {...props}
          role="link"
        >
          {startIcon ? <IconWrapper>{startIcon}</IconWrapper> : null}
          {children}
          {endIcon ? <IconWrapper>{endIcon}</IconWrapper> : null}
        </GlobalLink>
      );
    }

    return (
      <GlobalButton
        ref={ref as React.ForwardedRef<HTMLButtonElement>}
        type={type}
        onClick={(e) => (isDisabled || !onClick ? null : onClick(e))}
        {...props}
        disabled={isDisabled}
        role="presentation"
      >
        {startIcon ? <IconWrapper>{startIcon}</IconWrapper> : null}
        {children}
        {endIcon ? <IconWrapper>{endIcon}</IconWrapper> : null}
      </GlobalButton>
    );
  },
);

export default Button;
