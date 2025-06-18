import { Link } from 'react-router';
import styles from '../auth.module.css';
import { APP_ROUTES, DATA_STATUS } from '~/enums/enums';
import { Button, Input, Loader } from '~/components/primitives/primitives';
import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '~/services/store/hooks';
import { authActions } from '~/services/store/actions';

function SignUp() {
    const dispatch = useAppDispatch();
    const sighnUpStatus = useAppSelector((state) => state.auth.signUpStatus);

    const handleSubmit = useCallback(
        async (formData: FormData) => {
            const fullName = formData.get('full-name') as string;
            const email = formData.get('email') as string;
            const password = formData.get('password') as string;
            await dispatch(authActions.signUpAction({ fullName, email, password }));
        },
        [dispatch]
    );

    return (
        <main className={styles['sign-up-page']}>
            <h1 className="visually-hidden">Travel App</h1>
            {sighnUpStatus === DATA_STATUS.PENDING ? <Loader /> : <></>}
            <form action={handleSubmit} className={styles['sign-up-form']} autoComplete="off">
                <h2 className={styles['sign-up-form__title']}>Sign Up</h2>
                <Input
                    dataTestId="auth-full-name"
                    heading="Full name"
                    name="full-name"
                    type="text"
                    other={{ required: true }}
                />
                <Input dataTestId="auth-email" heading="Email" type="email" other={{ required: true }} />
                <Input
                    dataTestId="auth-password"
                    heading="Password"
                    type="password"
                    other={{ autoComplete: 'new-password', minLength: 3, maxLength: 20, required: true }}
                />
                <Button dataTestId="auth-submit" type="submit">
                    Sign Up
                </Button>
            </form>
            <span>
                Already have an account?
                <Link to={APP_ROUTES.SIGN_IN} data-test-id="auth-sign-in-link" className={styles['sign-up-form__link']}>
                    Sign In
                </Link>
            </span>
        </main>
    );
}

export default SignUp;
