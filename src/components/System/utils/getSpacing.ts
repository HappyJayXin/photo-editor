import { css } from 'styled-components';

export type Spacing = {
  margin?: string;
  marginX?: string;
  marginY?: string;
  marginLeft?: string;
  marginRight?: string;
  marginTop?: string;
  marginBottom?: string;

  padding?: string;
  paddingX?: string;
  paddingY?: string;
  paddingLeft?: string;
  paddingRight?: string;
  paddingTop?: string;
  paddingBottom?: string;
};

const getSpacingStyle = ({
  margin,
  marginX,
  marginY,
  padding,
  paddingX,
  paddingY,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingBottom,
  marginLeft,
  marginRight,
  marginTop,
  marginBottom,
}: Spacing) => {
  let style = '';
  if (margin)
    style += `
      margin: ${margin};
    `;
  if (marginX)
    style += `
      margin-right: ${marginX};
      margin-left: ${marginX};
    `;
  if (marginY)
    style += `
      margin-top: ${marginY};
      margin-bottom: ${marginY};
    `;
  if (marginLeft)
    style += `
      margin-left: ${marginLeft};
    `;
  if (marginRight)
    style += `
      margin-right: ${marginRight};
    `;
  if (marginTop)
    style += `
      margin-top: ${marginTop};
    `;
  if (marginBottom)
    style += `
      margin-bottom: ${marginBottom};
    `;

  if (padding)
    style += `
      padding: ${padding};
    `;
  if (paddingX)
    style += `
      padding-left: ${paddingX};
      padding-right: ${paddingX};
    `;
  if (paddingY)
    style += `
      padding-top: ${paddingY};
      padding-bottom: ${paddingY};
    `;
  if (paddingLeft)
    style += `
      padding-left: ${paddingLeft};
    `;
  if (paddingRight)
    style += `
      padding-right: ${paddingRight};
    `;
  if (paddingTop)
    style += `
      padding-top: ${paddingTop};
    `;
  if (paddingBottom)
    style += `
      padding-bottom: ${paddingBottom};
    `;
  return css`
    ${style}
  `;
};

export default getSpacingStyle;
