import styled, { css } from 'styled-components';
import type { Placement } from './type';

const getPlacementStyle = (placement: Placement) => {
  let style;
  switch (placement) {
    case 'center':
      style = css`
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      `;
      break;

    case 'bottom-center':
      style = css`
        bottom: 0px;
        left: 50%;
        transform: translateX(-50%);
      `;
      break;
  }
  return style;
};

export const Container = styled.div<{
  placement: Placement;
  pointerEvents: 'auto' | 'none';
}>`
  box-sizing: border-box;
  max-height: 100%;
  overflow: hidden auto;
  padding: 30px;
  pointer-events: ${({ pointerEvents = 'none' }) => pointerEvents};
  position: fixed;
  z-index: 1000;

  &::-webkit-scrollbar {
    display: none;
  } /* Chrome, Safari and Opera */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  ${({ placement }) => getPlacementStyle(placement)}
`;
