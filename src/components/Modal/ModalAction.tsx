import styled from 'styled-components';
import type { ChildrenProps } from '@/types/common';

type Props = ChildrenProps;

const FooterWrapper = styled.footer`
  padding: 24px;
  display: flex;
  justify-content: flex-end;
  background: ${({ theme }) => theme.colors.grey[0]};

  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

const ModalAction = ({ children }: Props) => (
  <FooterWrapper>{children}</FooterWrapper>
);

export default ModalAction;
