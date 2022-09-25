import type { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Page from '@/modules/Common/Page';
import Header from '@/modules/Header';
import Content from '@/modules/Content';
import Tools from '@/modules/Tools';

const HomePage: NextPage = () => (
  <Page>
    <Header />
    <Content />
    <Tools />
  </Page>
);

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default HomePage;
