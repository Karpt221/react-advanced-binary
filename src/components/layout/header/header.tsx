import styles from './header.module.css';
import briefcaseIcon from '../../../assets/images/briefcase.svg';
import ProfileNav from './profile-nav/profile-nav';
import { Link } from 'react-router';
import { APP_ROUTES } from '../../../enums/enums';

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles['header__inner']}>
                <Link to={APP_ROUTES.MAIN} data-test-id="header-logo" className={styles.header__logo}>
                    Travel App
                </Link>
                <nav data-test-id="header-nav" className={styles.header__nav}>
                    <ul className={styles['nav-header__list']}>
                        <li className={styles['nav-header__item']} title="Bookings">
                            <Link
                                to={APP_ROUTES.BOOKINGS}
                                data-test-id="header-bookings-link"
                                className={styles['nav-header__inner']}
                            >
                                <span className="visually-hidden">Bookings</span>
                                <img src={briefcaseIcon} alt="bookings" />
                            </Link>
                        </li>
                        <li className={styles['nav-header__item']} title="Profile">
                            <ProfileNav className={styles['nav-header__inner']} />
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
