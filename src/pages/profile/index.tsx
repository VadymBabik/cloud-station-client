import type { NextPage } from 'next';

import { Layout } from '../../components/Layout';
import { ProfileIndexPage } from '../../main/profile/pages/ProfileIndexPage';

const Index: NextPage = () => {
  return (
    <Layout>
      <ProfileIndexPage />
    </Layout>
  );
};

export default Index;
