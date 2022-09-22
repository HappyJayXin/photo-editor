import styled from 'styled-components';

export const ReferenceElement = styled.div`
  display: inline-block;
`;

export const TooltipContainer = styled.div<{ show: boolean }>`
  z-index: 1000;
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: visibility 150ms linear, opacity 150ms linear;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.grey['1000']};
  color: ${({ theme }) => theme.colors.grey[0]};
  padding: 4px 12px;
  max-width: 246px;
`;

export const Arrow = styled.span`
  visibility: hidden;
  background-color: inherit;

  &::before {
    position: absolute;
    width: 8px;
    height: 8px;
    background-color: inherit;

    visibility: visible;
    content: '';
    transform: rotate(45deg);
    transform-origin: center;
  }

  &[data-placement*='top'] {
    bottom: 4px;
    &::before {
      transform: rotate(45deg) translate(-3px, 3px);
    }
  }

  &[data-placement*='bottom'] {
    top: -4px !important;
    &::before {
      transform: rotate(45deg) translate(-3px, 3px);
    }
  }

  &[data-placement*='left'] {
    right: 4px;
    top: -4px !important;
  }

  &[data-placement*='right'] {
    left: -4px;
    top: -4px !important;
  }
`;
