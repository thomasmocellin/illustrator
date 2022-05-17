import Link from 'next/link';
import { MenuResponsive } from '../../components/menu-responsive/menu-responsive.component';
import { Footer } from '../footer/footer.component';
import style from './navbar.module.scss';

// TODO: A lot of empty space in big screens below menu (make bigger fonts and a bit more bottom padding)
export function Navbar() {
    return (
        <div className={style.container}>
            <h1 className={style.title}>
                <Link href='/homepage'>
                    <span>Kevin Mocellin</span>
                </Link>

                <Link href='/i-in-kevin'>
                    <div className={style.secret} />
                </Link>
            </h1>
            <div className={style.options}>
                <MenuResponsive />
            </div>
            <div className={style.footer}>
                <Footer />
            </div>
        </div>
    );
}
