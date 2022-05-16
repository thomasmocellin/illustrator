import type { NextPage } from 'next';

import kevinImg from '../assets/kevin-dummy.jpg';
import style from '../styles/pages/about.module.scss';

const dummyText = `Lorem ipsum Thomas. Lorem ipsum Thomas. Lorem ipsum Thomas. Lorem ipsum Thomas.
Lorem ipsum Thomas. Lorem ipsum Thomas. Lorem ipsum Thomas. Lorem ipsum Thomas.
Lorem ipsum Thomas. Lorem ipsum Thomas. Lorem ipsum Thomas. Lorem ipsum Thomas.
Lorem ipsum Thomas. Lorem ipsum Thomas. Lorem ipsum Thomas. Lorem ipsum Thomas.
Lorem ipsum Thomas. Lorem ipsum Thomas. Lorem ipsum Thomas. Lorem ipsum Thomas.
Lorem ipsum Thomas. Lorem ipsum Thomas. Lorem ipsum Thomas. Lorem ipsum Thomas.
Lorem ipsum Thomas. Lorem ipsum Thomas. Lorem ipsum Thomas. Lorem ipsum Thomas.
Lorem ipsum Thomas. Lorem ipsum Thomas. Lorem ipsum Thomas. Lorem ipsum Thomas.`;

const About: NextPage = () => {
    return (
        <div className={style.container}>
            <h2>ABOUT</h2>
            <img src={kevinImg.src} />
            <div className={style.curve}></div>
            <div className={style.text}>
                <p>{dummyText}</p>
                <p>{dummyText}</p>
                <p>{dummyText}</p>
                <p>{dummyText}</p>
                <p>{dummyText}</p>
                <p>{dummyText}</p>
                <p>{dummyText}</p>
            </div>
        </div>
    );
};

export async function getStaticProps() {
    return {
        props: {},
    };
}

export default About;
