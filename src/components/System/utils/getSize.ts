import { css } from 'styled-components';

export type Sizes = {
  width?: string;
  height?: string;
  maxWidth?: string;
  minWidth?: string;
  maxHeight?: string;
  minHeight?: string;
};

const getSize = ({
  width,
  height,
  maxWidth,
  minWidth,
  maxHeight,
  minHeight,
}: Sizes) => {
  let style = '';
  if (width)
    style += `
      width: ${width};
    `;
  if (height)
    style += `
      height: ${height};
    `;
  if (maxWidth)
    style += `
      max-width: ${maxWidth};
    `;
  if (minWidth)
    style += `
      min-width: ${minWidth};
    `;
  if (maxHeight)
    style += `
      max-height: ${maxHeight};
    `;
  if (minHeight)
    style += `
    min-height: ${minHeight};
    `;
  return css`
    ${style}
  `;
};

export default getSize;
