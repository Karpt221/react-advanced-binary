import styles from './header.module.css';
import briefcaseIcon from '../../../assets/images/briefcase.svg';
import ProfileNav from './profile-nav/profile-nav';

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles['header__inner']}>
                <a data-test-id="header-logo" href="" className={styles.header__logo}>
                    Travel App
                </a>
                <nav data-test-id="header-nav" className={styles.header__nav}>
                    <ul className={styles['nav-header__list']}>
                        <li className={styles['nav-header__item']} title="Bookings">
                            <a data-test-id="header-bookings-link" href="" className={styles['nav-header__inner']}>
                                <span className="visually-hidden">Bookings</span>
                                <img src={briefcaseIcon} alt="bookings" />
                            </a>
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
