import { useState } from 'react';
import type { NextPage } from 'next';

import { SocialIcons } from '../components/social-icons/social-icons.component';
import { ContactForm } from '../containers/contact-form/contact-form.component';
import { ModalOverlay } from '../components/modal-overlay/modal-overlay.component';

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

            <ModalOverlay
                isOpen={modalOpened}
                setIsOpen={(isOpen) => setModalOpened(isOpen)}
                contentCSS={{
                    width: '100%',
                    maxWidth: '400px',
                    marginTop: '20px',
                    marginBottom: '20px',
                    paddingBottom: '20px',
                }}
            >
                <ContactForm />
            </ModalOverlay>
        </div>
    );
};

export default Contact;
