import type { NextPage } from 'next';

import { Layout } from '../../components/Layout';
import { DashBord } from '../../components/DashBord';

const Index: NextPage = () => {
  return (
    <Layout>
      <DashBord />
    </Layout>
  );
};

export default Index;
