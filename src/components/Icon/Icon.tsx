import { useEffect, useState } from 'react';
import { Props as ReactSVGProps } from 'react-svg';
import { SVGWrapper, ReactSVG } from './styled';
import data from './data';

import type { Glyph } from './data';
import type { Cursor } from '@/types/theme';

type IconStyle = {
  margin?: string;
  padding?: string;
  fill?: string;
  size?: string;
};

type Props = {
  glyph: Glyph;
  isDisabled?: boolean;
  isActive?: boolean;
  cursor?: Cursor;
  style?: React.CSSProperties;
} & Omit<ReactSVGProps, 'src' | 'wrapper'> &
  React.HTMLAttributes<any> &
  IconStyle;

type IconType = {
  normal: string;
  hover?: string;
};

// const Icon = (
//   {
//     glyph,
//     onClick,
//     onBlur,
//     isDisabled = false,
//     isActive = false,
//     ...props
//   }: Props,
//   ref: any,
// ) => {
const IconType = ({
  glyph,
  onClick,
  onBlur,
  isDisabled = false,
  isActive = false,
  cursor = 'default',
  margin,
  padding,
  fill,
  size,
  style = {},
  ...props
}: Props) => {
  const { normal, hover }: IconType = data[glyph];

  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    setIsShown(isActive);
  }, [isActive]);

  const beforeInjection = (svg: any) => {
    if (margin) svg.setAttribute('style', 'margin:' + margin);
    if (padding) svg.setAttribute('style', 'padding:' + padding);
    if (fill && svg.querySelector('path'))
      svg.querySelector('path').setAttribute('fill', fill);
    if (size) {
      svg.setAttribute('width', size);
      svg.setAttribute('height', size);
    }
  };

  return (
    <SVGWrapper
      $cursor={onClick ? 'pointer' : cursor}
      isDisabled={isDisabled}
      tabIndex={0}
      style={style}
      // ref={ref}
    >
      <ReactSVG
        src={isShown && hover ? hover : normal}
        wrapper="span"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        onClick={isDisabled ? undefined : onClick}
        onBlur={onBlur}
        beforeInjection={beforeInjection}
        {...props}
      />
    </SVGWrapper>
  );
};

// export default forwardRef<unknown, Props>(Icon);
export default IconType;
