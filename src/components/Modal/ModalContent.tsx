import styled from 'styled-components';
import type { ChildrenProps } from '@/types/common';

type Props = ChildrenProps;

const ContentWrapper = styled.main`
  padding: 24px;
  background: ${({ theme }) => theme.colors.grey[0]};
`;

const ModalContent = ({ children }: Props) => (
  <ContentWrapper>{children}</ContentWrapper>
);

export default ModalContent;
