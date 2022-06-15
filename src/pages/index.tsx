import type { NextPage } from 'next';
import Layout from '../components/Layout/Layout';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="flex justify-center items-center min-h-full">
        <Image
          src={'/images/hero-image.png'}
          width={800}
          height={800}
          alt={'hero-image'}
        />
      </div>
    </Layout>
  );
};

export default Home;
