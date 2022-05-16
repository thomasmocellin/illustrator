import { AiFillMail } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaTiktok } from 'react-icons/fa';

import style from './social-icons.module.scss';
import cx from 'classnames';

export function SocialIcons() {
    return (
        <div className={style['container']}>
            <li className={cx(style.icon, style.mail)}>
                <a href='https://www.facebook.com/pedro.caetano.125' target='_blank' />
                <span className={style.tooltip}>Mail</span>
                <AiFillMail />
            </li>
            <li className={cx(style.icon, style.instagram)}>
                <a href='https://www.instagram.com/pedrothemessi/' target='_blank' />
                <span className={style.tooltip}>Instagram</span>
                <AiOutlineInstagram />
            </li>
            <li className={cx(style.icon, style.tiktok)}>
                <a href='https://www.linkedin.com/in/pedro-mpl-caetano/' target='_blank' />
                <span className={style.tooltip}>Tik Tok</span>
                <FaTiktok />
            </li>
        </div>
    );
}
