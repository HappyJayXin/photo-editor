import styled from 'styled-components';
import { animated } from 'react-spring';

export const PageWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  overflow: auto;
  background-color: #edf4f6;
`;

export const HeaderContainer = styled(animated.div)<{ index: number }>`
  position: relative;
  width: 100%;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.grey[0]};
  border-bottom: 2px solid ${({ theme }) => theme.colors.grey[100]};
  z-index: ${(props) => props.index};
`;
