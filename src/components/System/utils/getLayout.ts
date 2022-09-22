import { css } from 'styled-components';

export type Layout = {
  display?:
    | 'block'
    | 'inline-block'
    | 'inline'
    | 'flex'
    | 'inline-flex'
    | 'table'
    | 'inline-table'
    | 'grid'
    | 'inline-grid'
    | 'none';
};

const getLayout = ({ display }: Layout) => {
  let style = '';
  if (display)
    style += `
    display: ${display};
    `;
  return css`
    ${style}
  `;
};

export default getLayout;
