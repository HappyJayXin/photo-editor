import styled, { css } from 'styled-components';
import { ReactSVG as SVG } from 'react-svg';
import type { Cursor } from '@/types/theme';

export const SVGWrapper = styled.div<{
  $cursor: Cursor;
  isDisabled: boolean;
}>`
  display: inline-block;
  cursor: ${({ $cursor }) => $cursor};
  ${({ isDisabled }) =>
    isDisabled &&
    css`
      opacity: 0.6;
      cursor: default;
    `}
`;

export const ReactSVG = styled(SVG)`
  display: block;
  span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
