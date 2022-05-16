import { MenuHamburger } from '../../components/menu-hamburger/menu-hamburger.component';
import { Footer } from '../footer/footer.component';
import style from './navbar.module.scss';

// TODO: A lot of empty space in big screens below menu (make bigger fonts and a bit more bottom padding)
// TODO: Clicking Kevin Mocellin goes back to homepage
// TODO: Insert Easter Egg 1: Have console.log in Inspector with funny message from me and Thomas
// TODO: Add title to page and favicon
// TODO: Add Easter Egg 2: One of the letters in his name is clickable and should open a secret popup with some privileged information
// TODO: Easter Egg 3: some custom route could go to a secret page: /kevinhasabrother -> some page about his brother
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
