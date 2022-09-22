import { css } from 'styled-components';

export type Typography = {
  textAlign?: 'left' | 'center' | 'right' | 'justify' | 'start' | 'end';
};

const getTypography = ({ textAlign }: Typography) => {
  let style = '';
  if (textAlign)
    style += `
      text-align: ${textAlign};
    `;
  return css`
    ${style}
  `;
};

export default getTypography;
