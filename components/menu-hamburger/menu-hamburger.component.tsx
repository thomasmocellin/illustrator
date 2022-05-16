import Link from 'next/link';
import { useRouter } from 'next/router';
import style from './menu-hamburger.module.scss';
import cx from 'classnames';

// TODO: Make this into container (options come from props) and change name to menu responsive
export function MenuHamburger() {
    const {
        pathname,
        query: { type },
    } = useRouter();

    return (
        <div className={style.container}>
            <label htmlFor='check'>
                <input type='checkbox' id='check' />
                <span></span>
                <span></span>
                <span></span>
                <div className={style.options}>
                    <ul>
                        <li>
                            <Link href='/homepage'>
                                <a className={cx({ [style.selected]: checkPathname('homepage') })}>Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/gallery/all'>
                                <a className={cx({ [style.selected]: checkPathname('gallery') })}>Galleries</a>
                            </Link>
                            <ul>
                                <Link href='/gallery/traditional'>
                                    <a className={cx({ [style.selected]: checkQueryType('traditional') })}>Traditional</a>
                                </Link>
                                <Link href='/gallery/digital'>
                                    <a className={cx({ [style.selected]: checkQueryType('digital') })}>Digital</a>
                                </Link>
                            </ul>
                        </li>
                        <li>
                            <Link href='/about'>
                                <a className={cx({ [style.selected]: checkPathname('about') })}>About</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/contact'>
                                <a className={cx({ [style.selected]: checkPathname('contact') })}>Contact</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </label>
        </div>
    );

    /** Check if pathname/query includes a certain 'name' as a sub-string */
    function checkPathname(name: string): boolean {
        return pathname.includes(name);
    }
    function checkQueryType(name: string): boolean {
        return type ? type.includes(name) : false;
    }
}
