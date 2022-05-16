import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Navbar } from '../containers/navbar/navbar.container';

import '../styles/globals.scss';
import style from '../styles/pages/app.module.scss';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Contact</title>
                <meta name='description' content='Generated by create next app' />
                <link rel='icon' href='/utrecht.png' />

                <link rel='preconnect' href='https://fonts.googleapis.com' />
                <link rel='preconnect' href='https://fonts.gstatic.com' />
                <link href='https://fonts.googleapis.com/css2?family=PT+Sans&display=swap' rel='stylesheet' />
            </Head>

            <div className={style.container}>
                <div className={style.navbar}>
                    <Navbar />
                </div>
                <div className={style.page}>
                    <main className={style.main}>
                        <Component {...pageProps} />
                    </main>
                </div>
            </div>
        </>
    );
}

export default MyApp;
