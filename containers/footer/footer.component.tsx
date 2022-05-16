import style from './footer.module.scss';
import { FaFacebookF } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { SocialIcons } from '../../components/social-icons/social-icons.component';

export interface FooterProps {}

const defaultProps = {} as Required<FooterProps>;

// TODO: replace "share" with tiktok and also add mail icon (use already icons used in contacts)
export function Footer(props: FooterProps) {
    const {} = { ...defaultProps, ...props };

    return (
        <div className={style.container}>
            <div className={style.social}>
                <SocialIcons />
            </div>
            <p>Follow me on social media!</p>
        </div>
    );
}
