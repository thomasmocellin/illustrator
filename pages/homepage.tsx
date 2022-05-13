import type { NextPage } from 'next';

import styles from '../styles/pages/homepage.module.scss';

// TODO: Create grid with random variable size for cells
// TODO: Create Galleries page with same grid as in homepage but not random (and dropdown on top)
const Homepage: NextPage = () => {
    return (
        <div className={styles.container}>
            <main className={styles.main}>Homepage</main>
        </div>
    );
};

export async function getStaticProps() {
    return {
        props: {},
    };
}

export default Homepage;
