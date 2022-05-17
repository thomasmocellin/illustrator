import { useState } from 'react';
import type { NextPage } from 'next';

import { SocialIcons } from '../components/social-icons/social-icons.component';
import { ContactForm } from '../containers/contact-form/contact-form.component';

import { GrClose } from 'react-icons/gr';
import { BiMessageDetail } from 'react-icons/bi';
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
    const [modalOpened, setModalOpened] = useState(false);

    return (
        <div className={style.container}>
            <h2>Contact</h2>
            <button onClick={() => setModalOpened(true)}>
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

            <div className={style.modal}>
                <div className={style.section}>
                    <div className={cx(style.modal, { [style.opened]: modalOpened })}>
                        <div className={style['modal-wrap']}>
                            <ContactForm />
                        </div>
                        <button className={style['close-btn']} onClick={() => setModalOpened(false)}>
                            <GrClose />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
