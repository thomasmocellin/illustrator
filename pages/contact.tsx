import type { NextPage } from 'next';

import { BiMessageDetail } from 'react-icons/bi';
import { AiFillMail } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaTiktok } from 'react-icons/fa';
import style from '../styles/pages/contact.module.scss';
import cx from 'classnames';

const dummyText = `Lorem ipsum Thomas. Lorem ipsum Thomas. Lorem ipsum Thomas. Lorem ipsum Thomas.
Lorem ipsum Thomas. Lorem ipsum Thomas. Lorem ipsum Thomas. Lorem ipsum Thomas.
Lorem ipsum Thomas. Lorem ipsum Thomas. Lorem ipsum Thomas. Lorem ipsum Thomas.
Lorem ipsum Thomas. Lorem ipsum Thomas. Lorem ipsum Thomas. Lorem ipsum Thomas.
Lorem ipsum Thomas. Lorem ipsum Thomas. Lorem ipsum Thomas. Lorem ipsum Thomas.
Lorem ipsum Thomas. Lorem ipsum Thomas. Lorem ipsum Thomas. Lorem ipsum Thomas.
Lorem ipsum Thomas. Lorem ipsum Thomas. Lorem ipsum Thomas. Lorem ipsum Thomas.
Lorem ipsum Thomas. Lorem ipsum Thomas. Lorem ipsum Thomas. Lorem ipsum Thomas.`;

const Contact: NextPage = () => {
    return (
        <div className={style.container}>
            <h2>Contact</h2>
            <div className={style.content}>
                <button>
                    <span>Direct Request</span>
                    <BiMessageDetail />
                </button>
                <div className={style.text}>
                    <p>{dummyText}</p>
                    <p>{dummyText}</p>
                    <p>{dummyText}</p>
                </div>
                <div className={style.social}>
                    <li className={cx(style.icon, style.mail)}>
                        <span className={style.tooltip}>Mail</span>
                        <AiFillMail />
                    </li>
                    <li className={cx(style.icon, style.instagram)}>
                        <span className={style.tooltip}>Instagram</span>
                        <AiOutlineInstagram />
                    </li>
                    <li className={cx(style.icon, style.tiktok)}>
                        <span className={style.tooltip}>Tik Tok</span>
                        <FaTiktok />
                    </li>
                </div>
            </div>
        </div>
    );
};

export async function getStaticProps() {
    return {
        props: {},
    };
}

export default Contact;
