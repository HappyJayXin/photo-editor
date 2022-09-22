import styled from 'styled-components';
import { animated } from 'react-spring';
import Paper from '@/components/Paper';

export const AnimateBackground = styled(animated.div)`
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  will-change: opacity;
`;

export const Container = styled.div`
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.2);
`;

export const AnimateWrapper = styled(animated(Paper))`
  background-color: white;
  border: solid 1px rgba(0, 0, 0, 0.12);
  display: inline-block;
  border-radius: 10px;
  overflow: hidden;
  max-width: 680px;
  will-change: opacity, transform;
`;
