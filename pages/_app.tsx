import { links } from '@volvo-cars/css/links';
import Head from 'next/head';
import { StrictMode } from 'react';
import Layout from '../src/components/Layout';

function HomePage() {
  return (
    <>
      <Head>
        <title>Volvo Cars GOD Front-end code test</title>
        {links().map(link => (
          <link key={link.href} {...link} />
        ))}
      </Head>
      <StrictMode>
        <div className='p-32'>
          <Layout />
        </div>
      </StrictMode>
    </>
  );
}

export default HomePage;
