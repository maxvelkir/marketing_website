import { Inter } from "@next/font/google";
import Head from "next/head";
import styles from "../styles/index.module.css";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Marketing Freaks</title>
        <meta name="description" content="Personal website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.blackbar}></div>
        <div className={styles.video}>some video here</div>
      </main>
    </>
  );
}
