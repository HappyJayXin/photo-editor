import { Flex } from '@/components/System';
import Skeleton from '@/components/Skeleton';
import { HeaderContainer } from '../../styled';

const HeaderLoader = () => (
  <HeaderContainer>
    <Flex container justifyContent="space-between">
      <Skeleton variant="line" width="300px" height="30px" />
      <Flex container gap="4px">
        <Skeleton variant="button" width="110px" />
        <Skeleton variant="button" width="110px" />
      </Flex>
    </Flex>
  </HeaderContainer>
);

export default HeaderLoader;
