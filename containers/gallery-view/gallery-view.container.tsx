import style from './gallery-view.module.scss';
import RenderIfVisible from 'react-render-if-visible';
import cx from 'classnames';

export interface GalleryViewProps {
    srcs: string[];
}

const imgSizes: string[] = ['big', 'tall', '', '', 'wide', '', 'tall', '', 'wide', 'big', 'tall', '', '', '', '', 'wide', '', '', 'wide', '', 'wide', 'big'];

/**
 * Displays image cards in a grid with variable cell size
 * @obs Images will only render when visible
 * @param scrs List of source strings for images
 */
export function GalleryView(props: GalleryViewProps) {
    const { srcs } = props;

    return (
        <div className={style.container}>
            <div className={style.grid}>
                {srcs.map((src, i) => (
                    <div className={cx(style.cell, style[imgSizes[i % imgSizes.length]])}>
                        <RenderIfVisible stayRendered={true}>
                            <img src={src} alt='...' loading='lazy' />
                        </RenderIfVisible>
                    </div>
                ))}
            </div>
        </div>
    );
}
