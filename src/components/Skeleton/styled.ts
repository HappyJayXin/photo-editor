import styled, { keyframes } from 'styled-components';

const shape: { [index: string]: string } = {
  rect: '',
  text: `
    margin-top: 8px;
    margin-bottom: 8px;
    transform-origin: 0 65%;
    transform: translateZ(0) scale(1, 0.65);
    border-radius: 4px;
    text-indent: -999px;

    &:empty:before {
      content: ' ';
    }
  `,
  circle: `
    border-radius: 50%;
  `,
};

const loading = keyframes`
  0% {
    transform: translateX(-100%);
  }
  60% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

export const Element = styled('div')<{ variant: string }>`
  display: block;
  margin: 5px 0;

  ${(props) => shape[props.variant]};

  position: relative;
  background-color: ${({ theme }) => theme.colors.grey[300]};
  overflow: hidden;

  &::after {
    display: block;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    transform: translateX(-100%);
    animation: 2s ${loading} linear 0.5s infinite;
    background: ${({ theme }) =>
      `linear-gradient(90deg, transparent, ${theme.colors.grey[200]}, transparent)`};
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    transform: translateX(-100%);
    z-index: 1;
  }
`;
