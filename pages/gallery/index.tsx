import type { NextPage } from 'next';

import style from '../../styles/pages/gallery.module.scss';

// TODO: Redirect to [type].tsx with type=all
const Gallery: NextPage = () => {
    return <div className={style.container}></div>;
};

export async function getStaticProps() {
    return {
        props: {},
    };
}

export default Gallery;
