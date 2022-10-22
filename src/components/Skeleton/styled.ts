import styled, { keyframes, css } from 'styled-components';

const wave = keyframes`
  0% { background-position: -468px 0; }
  100% { background-position: 468px 0; }
`;

type Size = {
  width?: string;
  height?: string;
};

const Wave = styled.div`
  background: linear-gradient(
    to right,
    rgba(130, 130, 130, 0.2) 8%,
    rgba(130, 130, 130, 0.3) 18%,
    rgba(130, 130, 130, 0.2) 33%
  );
  background-size: 800px 100px;
  animation: ${wave} 2s infinite ease-out;
`;

export const Circle = styled(Wave)<Size>`
  height: ${({ height = '16px' }) => height};
  width: ${({ width = '16px' }) => width};
  border-radius: 50%;
`;

export const Line = styled(Wave)<Size>`
  height: ${({ height = '8px' }) => height};
  width: ${({ width = '80px' }) => width};
  border-radius: 2px;
`;

export const Square = styled(Wave)<Size>`
  height: ${({ height = '16px' }) => height};
  width: ${({ width = '16px' }) => width};
  border-radius: 5px;
`;

export const Button = styled(Wave)<Size>`
  height: ${({ height = '32px' }) => height};
  width: ${({ width = '80px' }) => width};
  border-radius: 16px;
`;
