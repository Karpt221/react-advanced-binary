import styles from './profile-nav.module.css';
import userIcon from '~/assets/images/user.svg';
import { Button } from '~/components/primitives/primitives';
import { authActions } from '~/services/store/actions';
import { useAppDispatch, useAppSelector } from '~/services/store/hooks';

function ProfileNav({ className = '' }: { className: string }) {
    const dispatch = useAppDispatch();
    const username = useAppSelector((state) => state.auth.user?.fullName);

    return (
        <div data-test-id="header-profile-nav" className={`${className} ${styles['profile-nav']}`} tabIndex={0}>
            <span className="visually-hidden">Profile</span>
            <img src={userIcon} alt="profile" />
            <ul data-test-id="header-profile-nav-list" className={styles['profile-nav__list']}>
                <li data-test-id="header-profile-nav-username" className={styles['profile-nav__item']}>
                    {username || 'Username'}
                </li>
                <li className={styles['profile-nav__item"']}>
                    <Button
                        onClick={() => dispatch(authActions.signOutAction())}
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
