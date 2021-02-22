import Head from 'next/head';
import Main from '../components/Main';
import Layout from '../Layout';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Move.it</title>
      </Head>

      <Layout>
        <Main />
      </Layout>
    </div>
  );
}
