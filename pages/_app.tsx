import type { AppProps } from 'next/app';
import { Navbar } from '../containers/navbar/navbar.container';

import '../styles/globals.scss';
import style from '../styles/app.module.scss';

function MyApp({ Component, pageProps }: AppProps) {
    return (
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
    );
}

export default MyApp;
