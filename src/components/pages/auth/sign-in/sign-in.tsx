import { Link } from 'react-router';
import styles from '../auth.module.css';
import { APP_ROUTES, DATA_STATUS } from '~/enums/enums';
import { Button, Input, Loader } from '~/components/primitives/primitives';
import { useAppDispatch, useAppSelector } from '~/services/store/hooks';
import { toast } from 'react-toastify';
import { useCallback, useEffect } from 'react';
import { authActions } from '~/services/store/actions';

function SignIn() {
    const dispatch = useAppDispatch();
    const sighnInStatus = useAppSelector((state) => state.auth.signInStatus);

    const handleSubmit = useCallback(
        async (formData: FormData) => {
            const email = formData.get('email') as string;
            const password = formData.get('password') as string;
            await dispatch(authActions.signInAction({ email, password }));
        },
        [dispatch]
    );

    useEffect(() => {
        if (sighnInStatus === DATA_STATUS.REJECTED) {
            toast.error('Sign In Failed!');
            dispatch(authActions.resetSignInStatus());
        }
    }, [sighnInStatus, dispatch]);

    return (
        <main className={styles['sign-in-page']}>
            <h1 className="visually-hidden">Travel App</h1>
            {sighnInStatus === DATA_STATUS.PENDING ? <Loader /> : <></>}
            <form action={handleSubmit} className={styles['sign-in-form']} autoComplete="off">
                <h2 className={styles['sign-in-form__title']}>Sign In</h2>
                <Input dataTestId="auth-email" heading="Email" type="email" other={{ required: true }} />
                <Input
                    dataTestId="auth-password"
                    heading="Password"
                    type="password"
                    other={{ autoComplete: 'new-password', minLength: 3, maxLength: 20, required: true }}
                />
                <Button dataTestId="auth-submit" type="submit">
                    Sign In
                </Button>
            </form>
            <span>
                Don't have an account?
                <Link to={APP_ROUTES.SIGN_UP} data-test-id="auth-sign-up-link" className={styles['sign-in-form__link']}>
                    Sign Up
                </Link>
            </span>
        </main>
    );
}

export default SignIn;
