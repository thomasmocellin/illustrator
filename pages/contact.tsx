import type { NextPage } from 'next';

import { BiMessageDetail } from 'react-icons/bi';
import { AiFillMail } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaTiktok } from 'react-icons/fa';
import style from '../styles/pages/contact.module.scss';
import cx from 'classnames';
import { SocialIcons } from '../components/social-icons/social-icons.component';

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
            <button>
                <span>Direct Request</span>
                <BiMessageDetail />
            </button>
            <div className={style.content}>
                <div className={style.text}>
                    <p>{dummyText}</p>
                    <p>{dummyText}</p>
                    <p>{dummyText}</p>
                </div>
                <SocialIcons />
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
