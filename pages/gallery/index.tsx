import type { NextPage } from 'next';

import style from '../../styles/pages/gallery.module.scss';

const Gallery: NextPage = () => {
    // Redirecting to gallery/[type] from "next.config.js"
    return <div className={style.container} />;
};

export default Gallery;
