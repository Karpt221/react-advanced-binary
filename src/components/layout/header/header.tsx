import styles from './header.module.css';
import { Link, useLocation } from 'react-router';
import { APP_ROUTES } from '~/enums/enums';
import HeaderNav from './header-nav/header-nav';

function Header() {
    const location = useLocation();
    const pathName = location.pathname;
    const isNavHidden = pathName === APP_ROUTES.SIGN_IN || pathName === APP_ROUTES.SIGN_UP;

    return (
        <header className={styles.header}>
            <div className={styles['header__inner']}>
                <Link to={APP_ROUTES.MAIN} data-test-id="header-logo" className={styles.header__logo}>
                    Travel App
                </Link>
                <HeaderNav isNavHidden={isNavHidden} />
            </div>
        </header>
    );
}

export default Header;
