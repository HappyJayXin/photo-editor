import { PageWrapper } from '@/styles/common';
import type { ChildrenProps } from '@/types/common';

type Props = ChildrenProps;

const Page = ({ children }: Props) => <PageWrapper>{children}</PageWrapper>;

export default Page;
