import type { NextPage } from 'next';

import { Layout } from '../../components/Layout';
import { DashBord } from '../../main/dashboard';

const Index: NextPage = () => {
  return (
    <Layout>
      <DashBord />
    </Layout>
  );
};

export default Index;
