import { MenuHamburger } from '../../components/menu-hamburger/menu-hamburger.component';
import { Footer } from '../footer/footer.component';
import style from './navbar.module.scss';

export interface NavbarProps {}

const defaultProps = {} as Required<NavbarProps>;

export function Navbar(props: NavbarProps) {
    const {} = { ...defaultProps, ...props };

    return (
        <div className={style.container}>
            <h1 className={style.title}>Kevin Mocellin</h1>
            <div className={style.options}>
                <MenuHamburger />
            </div>
            <div className={style.footer}>
                <Footer />
            </div>
        </div>
    );
}
