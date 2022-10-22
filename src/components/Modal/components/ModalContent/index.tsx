import { ContentWrapper } from './styled';
import type { ChildrenProps } from '@/types/common';

type Props = ChildrenProps;

const ModalContent = ({ children }: Props) => (
  <ContentWrapper>{children}</ContentWrapper>
);

export default ModalContent;
