import styles from './header.module.css';
import { Link } from 'react-router';
import { APP_ROUTES } from '~/enums/enums';
import HeaderNav from './header-nav/header-nav';

function Header({ isNavHidden = false }: { isNavHidden?: boolean }) {
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
