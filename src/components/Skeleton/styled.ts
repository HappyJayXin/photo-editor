import styled, { keyframes } from 'styled-components';

const wave = keyframes`
  0% { background-position: -468px 0; }
  100% { background-position: 468px 0; }
`;

type Size = {
  width: string;
  height: string;
};

export const Circle = styled.div<Size>`
  border-radius: 50%;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background: linear-gradient(
    to right,
    rgba(130, 130, 130, 0.2) 8%,
    rgba(130, 130, 130, 0.3) 18%,
    rgba(130, 130, 130, 0.2) 33%
  );
  background-size: 800px 100px;
  animation: ${wave} 2s infinite ease-out;
`;

export const Line = styled.div<Size>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 2px;
  background: linear-gradient(
    to right,
    rgba(130, 130, 130, 0.2) 8%,
    rgba(130, 130, 130, 0.3) 18%,
    rgba(130, 130, 130, 0.2) 33%
  );
  background-size: 800px 100px;
  animation: wave-lines 2s infinite ease-out;
  animation: ${wave} 2s infinite ease-out;
`;

export const Square = styled.div<Size>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  height: 80px;
  border-radius: 5px;
  background: linear-gradient(
    to right,
    rgba(130, 130, 130, 0.2) 8%,
    rgba(130, 130, 130, 0.3) 18%,
    rgba(130, 130, 130, 0.2) 33%
  );
  background-size: 800px 100px;
  animation: ${wave} 2s infinite ease-out;
`;
