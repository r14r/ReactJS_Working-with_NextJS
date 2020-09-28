import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>[Your Self Introduction]</p>
                <p>
                    You’ll be building a site like this on{' '}
                    <a href="https://nextjs.org/learn">our Next.js tutorial</a>.
                </p>
            </section>
            <section>
                <h2 className="title">
                    Read{' '}
                    <Link href="/posts/first-post">
                        <a>this page!</a>
                    </Link>
                </h2>
                <h2 className="title">
                    Or try an{' '}
                    <Link href="/demo/alert">
                        <a>Alert</a>
                    </Link>
                </h2>
            </section>
        </Layout>
    );
}
