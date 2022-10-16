import { useTranslation } from 'next-i18next';
import Typography from '@/components/Typography';
import Button from '@/components/Button';
import { Flex } from '@/components/System';
import Skeleton from '@/components/Skeleton';
import { useTypedSelector } from '@/redux/hook';
import { HeaderContainer } from './styled';

const Header = () => {
  const { t } = useTranslation();
  const file = useTypedSelector((state) => state.file);
  const isPlaceholder = file.info === null;
  return (
    <HeaderContainer>
      <Flex container justifyContent="space-between">
        {isPlaceholder ? (
          <Skeleton variant="line" width="300px" height="30" />
        ) : (
          <Typography variant="title6">{file.info?.name}</Typography>
        )}
        <Button>{t('share')}</Button>
      </Flex>
    </HeaderContainer>
  );
};

export default Header;
