import { useTranslation } from 'next-i18next';
import Typography from '@/components/Typography';
import { Container } from './styled';

const Home = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Typography variant="title1">{t('home-title')}</Typography>
    </Container>
  );
};

export default Home;
