import { ReactElement } from 'react';
import cx from 'classnames';
import { GrClose } from 'react-icons/gr';

import { InlineStyle } from '../../types/global';

import style from './modal-overlay.module.scss';

export interface ModalOverlayProps {
    children: ReactElement;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    contentCSS?: InlineStyle;
}

export function ModalOverlay(props: ModalOverlayProps) {
    const { children, isOpen, setIsOpen, contentCSS } = props;

    return (
        <div className={style.container}>
            <div className={style.section}>
                <div className={cx(style.modal, { [style.opened]: isOpen })}>
                    <div className={style.content} style={contentCSS || {}}>
                        {children}
                    </div>
                    <button className={style['close-btn']} onClick={() => setIsOpen(false)}>
                        <GrClose />
                    </button>
                </div>
            </div>
        </div>
    );
}
