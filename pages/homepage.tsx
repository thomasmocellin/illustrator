import type { NextPage } from 'next';
import { GalleryView } from '../containers/gallery-view/gallery-view.container';
import { getImages } from '../database/get-images';

import style from '../styles/pages/homepage.module.scss';

const Homepage: NextPage<{ images: { id: number; url: string }[] }> = ({ images }) => {
    return (
        <div className={style.container}>
            <GalleryView srcs={images.map(({ url }) => url)} />
        </div>
    );
};

export async function getStaticProps() {
    const res = await getImages(10);
    const images = res.rows || [];

    return {
        props: {
            images,
        },
    };
}

export default Homepage;
