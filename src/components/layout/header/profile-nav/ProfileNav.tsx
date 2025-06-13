import styles from './ProfileNav.module.css';
import userImg from '../../../../assets/images/user.svg';
import Button from '../../../primitives/button/Button';

function ProfileNav({ className = '' }: { className: string }) {
    return (
        <div data-test-id="header-profile-nav" className={`${className} ${styles['profile-nav']}`} tabIndex={0}>
            <span className="visually-hidden">Profile</span>
            <img src={userImg} alt="profile" />
            <ul data-test-id="header-profile-nav-list" className={styles['profile-nav__list']}>
                <li data-test-id="header-profile-nav-username" className={styles['profile-nav__item']}>
                    John Doe
                </li>
                <li className={styles['profile-nav__item"']}>
                    <Button dataTestId="header-profile-nav-sign-out" type="button" className="profile-nav__sign-out">
                        Sign Out
                    </Button>
                </li>
            </ul>
        </div>
    );
}

export default ProfileNav;
