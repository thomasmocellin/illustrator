import style from './footer.module.scss';
import { FaFacebookF } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';

export interface FooterProps {}

const defaultProps = {} as Required<FooterProps>;

export function Footer(props: FooterProps) {
    const {} = { ...defaultProps, ...props };

    return (
        <div className={style.container}>
            <div className={style.icons}>
                <FaFacebookF />
                <BsInstagram />
                <span>share</span>
            </div>
            <p>Follow me on social media!</p>
        </div>
    );
}
