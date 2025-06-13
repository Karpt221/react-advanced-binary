import styles from './profile-nav.module.css';
import userIcon from '../../../../assets/images/user.svg';
import Button from '../../../primitives/button/button';
import { useNavigate } from 'react-router';
import { APP_ROUTES } from '../../../../enums/enums';

function ProfileNav({ className = '' }: { className: string }) {
    const navigate = useNavigate();

    return (
        <div data-test-id="header-profile-nav" className={`${className} ${styles['profile-nav']}`} tabIndex={0}>
            <span className="visually-hidden">Profile</span>
            <img src={userIcon} alt="profile" />
            <ul data-test-id="header-profile-nav-list" className={styles['profile-nav__list']}>
                <li data-test-id="header-profile-nav-username" className={styles['profile-nav__item']}>
                    John Doe
                </li>
                <li className={styles['profile-nav__item"']}>
                    <Button
                        onClick={() => navigate(APP_ROUTES.SIGN_IN)}
                        dataTestId="header-profile-nav-sign-out"
                        type="button"
                        className="profile-nav__sign-out"
                    >
                        Sign Out
                    </Button>
                </li>
            </ul>
        </div>
    );
}

export default ProfileNav;
