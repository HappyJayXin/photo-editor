import styled, { css } from 'styled-components';
import getSize, { Sizes } from './utils/getSize';
import getSpacingStyle, { Spacing } from './utils/getSpacing';
import getInteractivity, { Interactivity } from './utils/getInteractivity';
import getTypography, { Typography } from './utils/getTypography';
import getLayout, { Layout } from './utils/getLayout';

type BoxProps = Sizes &
  Spacing &
  Interactivity &
  Typography &
  Layout & {
    center?: boolean;
  };

const getPosition = ({ center }: BoxProps) => {
  let style = '';
  if (center)
    style += `
      display: flex;
      justify-content: center;
      align-items: center;
    `;
  return css`
    ${style}
  `;
};

const Box = styled.div<BoxProps>`
  ${(props) => getSpacingStyle(props)};
  ${(props) => getPosition(props)};
  ${(props) => getSize(props)};
  ${(props) => getInteractivity(props)};
  ${(props) => getTypography(props)};
  ${(props) => getLayout(props)};
`;

export default Box;
