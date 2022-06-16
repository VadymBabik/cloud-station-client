import type { NextPage } from 'next';
import Image from 'next/image';

import { Layout } from '../components/Layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="flex justify-center items-center min-h-full">
        <Image
          src={'/images/hero-image.png'}
          width="800"
          height="800"
          objectFit="fill"
          alt={'hero-image'}
        />
      </div>
    </Layout>
  );
};

export default Home;
