import { FooterWrapper } from './styled';
import type { ChildrenProps } from '@/types/common';

type Props = ChildrenProps;

const ModalAction = ({ children }: Props) => (
  <FooterWrapper>{children}</FooterWrapper>
);

export default ModalAction;
