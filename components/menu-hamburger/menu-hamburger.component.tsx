import style from './menu-hamburger.module.scss';

export interface MenuHamburgerProps {}

const defaultProps = {} as Required<MenuHamburgerProps>;

// TODO: Make this into container (not agnostic and with links)
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
                            <p>Home</p>
                        </li>
                        <li>
                            <p>Galleries</p>
                            <ul>
                                <li>Type A</li>
                                <li>Type B</li>
                            </ul>
                        </li>
                        <li>
                            <p>About</p>
                        </li>
                        <li>
                            <p>Contact</p>
                        </li>
                    </ul>
                </div>
            </label>
        </div>
    );
}
