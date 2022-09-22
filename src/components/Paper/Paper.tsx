import styled from 'styled-components';
import { ChildrenProps } from '@/types/common';

export type Elevation = 0 | 1 | 2 | 3 | 4 | 5;

type Props = ChildrenProps & {
  elevation: Elevation;
};

export const Paper = styled.div<Props>`
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-shadow: ${({ theme, elevation }) => theme.elevations[elevation]};
`;

export default Paper;
