import styled from 'styled-components';
import fontStyle from './constant/fontStyle';
import textColor from './constant/textColor';

import type { FontStyle } from './constant/fontStyle';
import type { TextColor } from './constant/textColor';

import type { ChildrenProps, DangerouslySetInnerHTML } from '@/types/common';

type Props = ChildrenProps & {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div' | 'span';
  variant?: FontStyle;
  align?: 'left' | 'center' | 'right';
  style?: React.CSSProperties;
  gutterBottom?: boolean;
  color?: TextColor;
  onClick?: (event: React.MouseEvent) => void;
  dangerouslySetInnerHTML?: DangerouslySetInnerHTML;
};

const TypographyStyle = styled.span<Props>(
  ({ variant = 'body1' }) => fontStyle[variant],
  ({ color }) => (color ? textColor[color] : textColor['black']),
  ({ align = 'left', gutterBottom = false }) => ({
    textAlign: align,
    marginTop: 0,
    marginBottom: gutterBottom ? '0.35em' : 0,
  }),
);

const Typography = ({ children, as = 'span', style = {}, ...props }: Props) => (
  <TypographyStyle as={as} style={style} {...props}>
    {children}
  </TypographyStyle>
);

export default Typography;
