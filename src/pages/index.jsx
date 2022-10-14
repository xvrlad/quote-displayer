import React from 'react';
import Head from 'next/head';
import Card from '../app/components/Card';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Quote Displayer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Card />
    </div>
  );
}
