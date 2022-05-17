import type { NextPage } from 'next';

import style from '../../styles/pages/gallery.module.scss';

const Gallery: NextPage = () => {
    // Redirecting to gallery/[type]
    return <div className={style.container} />;
};

export default Gallery;
