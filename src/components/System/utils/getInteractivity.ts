import { css } from 'styled-components';
import type { Cursor, UserSelect } from '@/types/theme';

export type Interactivity = {
  userSelect?: UserSelect;
  cursor?: Cursor;
};

const getInteractivity = ({ userSelect, cursor }: Interactivity) => {
  let style = '';
  if (userSelect)
    style += `
      user-select: ${userSelect};
    `;
  if (cursor)
    style += `
      cursor: ${cursor};
    `;
  return css`
    ${style}
  `;
};

export default getInteractivity;
