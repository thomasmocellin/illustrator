import style from './gallery-view.module.scss';

export interface GalleryViewProps {
    srcs: string[];
}

const imgSizes: string[] = ['big', 'tall', '', '', 'wide', '', 'tall', '', 'wide', 'big', 'tall', '', '', '', '', 'wide', '', '', 'wide', '', 'wide', 'big'];

// TODO: Import images on scroll down (use code-splitting/lazy loading)
// TODO: Change name to container
/**
 * Displays image cards in a grid with variable cell size
 * @param scrs List of source strings for images
 */
export function GalleryView(props: GalleryViewProps) {
    const { srcs } = props;

    return (
        <div className={style.container}>
            <div className={style.grid}>
                {srcs.map((src, i) => (
                    <div className={style[imgSizes[i % imgSizes.length]]}>
                        <img src={src} alt='photo' />
                    </div>
                ))}
            </div>
        </div>
    );
}
