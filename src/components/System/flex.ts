import styled, { css } from 'styled-components';
import getSize, { Sizes } from './utils/getSize';
import getSpacingStyle, { Spacing } from './utils/getSpacing';

type FlexProps = Sizes &
  Spacing & {
    container?: boolean;
    inline?: boolean;
    flexDirection?: 'row' | 'column';
    justifyContent?:
      | 'flex-start'
      | 'flex-end'
      | 'center'
      | 'space-between'
      | 'space-around'
      | 'initial'
      | 'inherit';
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
    flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
    flexGrow?: number;
    flexShrink?: number;
    flexBasis?: number | string;
    flex?: string;
    gap?: string;

    spacing?: string;
  };

const getFlexStyle = ({
  container,
  inline,
  flexDirection,
  justifyContent,
  alignItems,
  flexGrow,
  flexBasis,
  flexShrink,
  flexWrap,
  flex,
  gap,
}: FlexProps) => {
  let style = '';
  if (container)
    style += `
      display: ${container ? 'flex' : 'block'};
    `;
  if (inline)
    style += `
      display: ${inline ? 'inline-flex' : 'block'};
    `;
  if (flexDirection)
    style += `
      flex-direction: ${flexDirection};
    `;
  if (justifyContent)
    style += `
      justify-content: ${justifyContent};
    `;
  if (alignItems)
    style += `
      align-items: ${alignItems};
    `;
  if (flexGrow)
    style += `
      flex-grow: ${flexGrow};
    `;
  if (flexBasis)
    style += `
      flex-basis: ${flexBasis};
    `;
  if (flexShrink)
    style += `
      flex-shrink: ${flexShrink};
    `;
  if (flexWrap)
    style += `
      flex-wrap: ${flexWrap};
    `;
  if (flex)
    style += `
      flex: ${flex};
    `;
  if (gap)
    style += `
    gap: ${gap};
    `;
  return css`
    ${style}
  `;
};

const getItemSpacingStyle = ({ spacing, flexDirection = 'row' }: FlexProps) => {
  if (spacing && flexDirection === 'row') {
    return css`
      > :not(style) + :not(style) {
        margin: 0px 0px 0px ${spacing};
      }
    `;
  }
  if (spacing && flexDirection === 'column') {
    return css`
      > :not(style) + :not(style) {
        margin: ${spacing} 0px 0px 0px;
      }
    `;
  }
};

const Flex = styled.div<FlexProps>`
  ${(props) => getFlexStyle(props)};
  ${(props) => getSpacingStyle(props)};
  ${(props) => getSize(props)};
  ${(props) => getItemSpacingStyle(props)};
`;

export default Flex;
