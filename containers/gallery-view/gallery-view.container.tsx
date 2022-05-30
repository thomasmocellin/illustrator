import { useState } from 'react';
import RenderIfVisible from 'react-render-if-visible';

import { ModalOverlay } from '../../components/modal-overlay/modal-overlay.component';

import style from './gallery-view.module.scss';
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
    const [modalOpened, setModalOpened] = useState<string | undefined>(undefined);

    return (
        <div className={style.container}>
            <div className={style.grid}>
                {srcs.map((src, i) => (
                    <div className={cx(style.cell, style[imgSizes[i % imgSizes.length]])} key={i} onClick={() => setModalOpened(src)}>
                        <RenderIfVisible stayRendered={true}>
                            <img src={src} alt='...' loading='lazy' />
                        </RenderIfVisible>
                    </div>
                ))}
            </div>
            <ModalOverlay
                isOpen={!!modalOpened}
                setIsOpen={() => setModalOpened(undefined)}
                contentCSS={{
                    maxWidth: '97vw',
                    maxHeight: '97vh',
                }}
            >
                <div className={style.visualize}>
                    <img src={modalOpened || ''} alt='...' loading='lazy' />
                    <a style={{ display: 'table-cell' }} href={modalOpened} target='_blank'>
                        Original
                    </a>
                </div>
            </ModalOverlay>
        </div>
    );
}
