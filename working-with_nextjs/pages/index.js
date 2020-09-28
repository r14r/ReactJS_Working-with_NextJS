import Head from 'next/head';
import Layout from '../components/layout';
import WoWComponent from '../components/wow';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <Layout>
            <div className={styles.container}>
                <Head>
                    <title>Create Next App</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <WoWComponent></WoWComponent>

                <main className={styles.main}>
                    <h1 className={styles.title}>
                        Welcome to <a href="https://nextjs.org">Next.js!</a>
                    </h1>
                </main>

                <footer className={styles.footer}></footer>
            </div>
        </Layout>
    );
}
