import styles from './header.module.css';
import { Link, useLocation } from 'react-router';
import { APP_ROUTES, DATA_STATUS } from '~/enums/enums';
import HeaderNav from './header-nav/header-nav';
import { useAppSelector } from '~/services/store/hooks';

function Header() {
    const location = useLocation();
    const path = location.pathname;

    const authenticationStatus = useAppSelector((state) => state.auth.authenticationStatus);

    const isNavHidden =
        authenticationStatus !== DATA_STATUS.FULFILLED || path === APP_ROUTES.SIGN_IN || path === APP_ROUTES.SIGN_UP;

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
