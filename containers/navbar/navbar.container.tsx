import { MenuHamburger } from '../../components/menu-hamburger/menu-hamburger.component';
import { Footer } from '../footer/footer.component';
import style from './navbar.module.scss';

// TODO: A lot of empty space in big screens below menu (make bigger fonts and a bit more bottom padding)
// TODO: Finish mobile version
export function Navbar() {
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
