import Link from 'next/link';

import style from './menu-hamburger.module.scss';

export interface MenuHamburgerProps {}

const defaultProps = {} as Required<MenuHamburgerProps>;

// TODO: Make this into container (options come from props)
export function MenuHamburger(props: MenuHamburgerProps) {
    const {} = { ...defaultProps, ...props };

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
                                <a>Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/gallery'>
                                <a>Galleries</a>
                            </Link>
                            <ul>
                                <Link href='/gallery'>
                                    <a>Type A</a>
                                </Link>
                                <Link href='/gallery'>
                                    <a>Type B</a>
                                </Link>
                            </ul>
                        </li>
                        <li>
                            <Link href='/about'>
                                <a>About</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/homepage'>
                                <a>Contact</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </label>
        </div>
    );
}
