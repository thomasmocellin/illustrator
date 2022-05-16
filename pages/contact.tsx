import type { NextPage } from 'next';

import { SocialIcons } from '../components/social-icons/social-icons.component';

import { BiMessageDetail } from 'react-icons/bi';
import style from '../styles/pages/contact.module.scss';

const dummyText = `Lorem ipsum Thomas. Lorem ipsum Thomas. Lorem ipsum Thomas. Lorem ipsum Thomas.
Lorem ipsum Thomas. Lorem ipsum Thomas. Lorem ipsum Thomas. Lorem ipsum Thomas.
Lorem ipsum Thomas. Lorem ipsum Thomas. Lorem ipsum Thomas. Lorem ipsum Thomas.
Lorem ipsum Thomas. Lorem ipsum Thomas. Lorem ipsum Thomas. Lorem ipsum Thomas.
Lorem ipsum Thomas. Lorem ipsum Thomas. Lorem ipsum Thomas. Lorem ipsum Thomas.
Lorem ipsum Thomas. Lorem ipsum Thomas. Lorem ipsum Thomas. Lorem ipsum Thomas.
Lorem ipsum Thomas. Lorem ipsum Thomas. Lorem ipsum Thomas. Lorem ipsum Thomas.
Lorem ipsum Thomas. Lorem ipsum Thomas. Lorem ipsum Thomas. Lorem ipsum Thomas.`;

// TODO: Make modal when clicking "Direct Request" btn: send immediately simple email
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
