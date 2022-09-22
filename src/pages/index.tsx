import type { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Page from '@/modules/Common/Page';
import Home from '@/modules/Home';

const HomePage: NextPage = () => (
  <Page>
    <Home />
  </Page>
);

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default HomePage;
