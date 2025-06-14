import { APP_ROUTES } from '~/enums/enums';
import ProfileNav from '../profile-nav/profile-nav';
import styles from './header-nav.module.css';
import { Link } from 'react-router';
import briefcaseIcon from '~/assets/images/briefcase.svg';

function HeaderNav({ isNavHidden }: { isNavHidden: boolean }) {
    return (
        <nav hidden={isNavHidden} data-test-id="header-nav" className={styles.header__nav}>
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
    );
}

export default HeaderNav;
