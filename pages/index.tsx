import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Piotr Ostrowski</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Piotr Ostrowski</h1>
        <h2>
          <a href="https://piotr-ostrowski.s3.us-east-2.amazonaws.com/CV.pdf">
            Resume part 1
          </a>
          ,{" "}
          <a href="https://piotr-ostrowski.s3.us-east-2.amazonaws.com/CV.pdf">
            part 2
          </a>
          , <a href="https://github.com/piotrostr/">Github</a>,{" "}
        </h2>
        <p className={styles.description}>
          Please find below some of the open-source projects I have worked on.
        </p>
        <div className={styles.grid}>
          <a href="https://smplverse.xyz" className={styles.card}>
            <h2>SMPLverse</h2>
            <p style={{ textAlign: "center" }}>🤖</p>
          </a>
          <a href="https://health-token.com" className={styles.card}>
            <h2>Health Token</h2>
            <p style={{ textAlign: "center" }}>🌱</p>
          </a>
          <a href="https://pixilartillery.io" className={styles.card}>
            <h2>PixilArtillery</h2>
            <p style={{ textAlign: "center" }}>🔫</p>
          </a>
          <a href="https://stoned-cookies.vercel.app" className={styles.card}>
            <h2>Stoned Cookies</h2>
            <p style={{ textAlign: "center" }}>🍪</p>
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h2>Have a great day! </h2>
          <span style={{ color: "#e25555" }}>❤️</span>
        </div>
      </footer>
    </div>
  );
};

export default Home;
