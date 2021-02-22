import Head from 'next/head';
import ExperienceBar from '../components/ExperienceBar';
import Layout from '../Layout';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Move.it</title>
      </Head>

      <Layout>
        <ExperienceBar />
      </Layout>
    </div>
  );
}
