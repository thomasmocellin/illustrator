import { ChangeEvent, useState } from 'react';

import style from './contact-form.module.scss';

export function ContactForm() {
    const [formInfo, setFormInfo] = useState({ name: '', email: '', description: '' });

    return (
        <div className={style.container}>
            <h2>Send Email:</h2>
            <label>
                <input name='name' placeholder='Name...' onChange={updateForm} spellCheck={false} />
            </label>
            <label>
                <input name='email' placeholder='Email...' onChange={updateForm} spellCheck={false} />
            </label>
            <label>
                <textarea name='description' placeholder='Description...' onChange={updateForm} spellCheck={false} />
            </label>

            <button onClick={() => sendForm()}>Tot Ziens!</button>
        </div>
    );

    function updateForm(e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) {
        const { value, name } = e.target;
        if ((value || '').length > 2)
            setFormInfo((prev) => ({
                ...prev,
                [name || '']: value,
            }));
    }

    function sendForm() {
        // TODO: Setup mail sending with EmailJS: https://www.youtube.com/watch?v=NgWGllOjkbs&ab_channel=RemyFamily
        // Check for anomalies/form guards: email incorrect(no @, invalid characters, etc), name with non letter characters
        // Fill
    }
}
