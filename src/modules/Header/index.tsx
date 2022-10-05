import { useTranslation } from 'next-i18next';
import Typography from '@/components/Typography';
import Button from '@/components/Button';
import { Flex } from '@/components/System';
import { useTypedSelector } from '@/redux/hook';
import { HeaderContainer } from './styled';

const Header = () => {
  const file = useTypedSelector((state) => state.file);
  const { t } = useTranslation();
  return (
    <HeaderContainer>
      <Flex container justifyContent="space-between">
        <Typography variant="title6">{file.info?.name}</Typography>
        <Button>{t('share')}</Button>
      </Flex>
    </HeaderContainer>
  );
};

export default Header;
