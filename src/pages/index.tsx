import type { NextPage } from 'next';
import Head from 'next/head';
import { Card } from '../components';
// import data from ./data.json';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Piotr Ostrowski</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Piotr Ostrowski</h1>
        <div>
          <h2>
            <a href="https://piotr-ostrowski.s3.us-east-2.amazonaws.com/CV.pdf">
              Resume
            </a>
            {'  '}-{'  '}
            <a href="https://github.com/piotrostr/">Github</a>
            {'  '}-{'  '}
            <a href="https://piotr-ostrowski.s3.us-east-2.amazonaws.com/Most%20Recent%20Jobs.pdf">
              Recent Jobs
            </a>
          </h2>
        </div>
        <br />
        <div style={{ marginTop: '3rem' }}>
          <a href="https://smplverse.xyz">
            <Card title={'SMPLverse'} emoji={'🤖'} description={'desc'} />
          </a>
          <a href="https://health-token.com">
            <Card title={'Health Token'} emoji={'🌱'} description={'desc'} />
          </a>
          <a href="https://pixilartillery.io">
            <Card title={'Pixil Artillery'} emoji={'🔫'} description={'desc'} />
          </a>
          <a href="https://stoned-cookies.vercel.app">
            <Card title={'Stoned Cookies'} emoji={'🍪'} description={'desc'} />
          </a>
          <a href="https://domi-owczarek.biz">
            <Card
              title={"Domi's Portfolio"}
              emoji={'🐭'}
              description={'desc'}
            />
          </a>
          <a href="https://okemonos.com">
            <Card title={'Okemonos'} emoji={'🐲'} description={'desc'} />
          </a>
          <a href="https://www.luifs.com">
            <Card title={'LUIFS'} emoji={'📈'} description={'desc'} />
          </a>
        </div>
      </main>
      <footer>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <h3>Have a great day!</h3>
          <span style={{ color: 'green' }}>{'♡'}</span>
        </div>
      </footer>
    </div>
  );
};

export default Home;