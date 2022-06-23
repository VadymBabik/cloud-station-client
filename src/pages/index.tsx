import type { NextPage } from 'next';
import Image from 'next/image';

import { Layout } from '../components/Layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="flex justify-center items-center">
        <Image
          src={'/images/hero-image.png'}
          width="500"
          height="500"
          objectFit="fill"
          alt={'hero-image'}
        />
      </div>
    </Layout>
  );
};

export default Home;
