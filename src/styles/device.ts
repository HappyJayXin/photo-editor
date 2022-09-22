import styled from 'styled-components';
import { down, up } from 'styled-breakpoints';

export const DesktopOnly = styled.div`
  ${down('laptop')} {
    display: none;
  }
`;

export const TabletOnly = styled.div`
  ${up('laptop')} {
    display: none;
  }
`;
