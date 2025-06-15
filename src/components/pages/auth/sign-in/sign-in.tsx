import { Form, Link } from 'react-router';
import styles from '../auth.module.css';
import { APP_ROUTES } from '~/enums/enums';
import Input from 'primitives/input/input';
import Button from 'primitives/button/button';
import MainLayout from 'components/layout/main/main-layout';
import Header from '~/components/layout/header/header';
import Footer from '~/components/layout/footer/footer';

function SignIn() {
    return (
        <>
            <Header />
            <MainLayout className={styles['sign-in-page']}>
                <h1 className="visually-hidden">Travel App</h1>
                <Form method="post" action={APP_ROUTES.SIGN_IN} className={styles['sign-in-form']} autoComplete="off">
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
                </Form>
                <span>
                    Don't have an account?
                    <Link
                        to={APP_ROUTES.SIGN_UP}
                        data-test-id="auth-sign-up-link"
                        className={styles['sign-in-form__link']}
                    >
                        Sign Up
                    </Link>
                </span>
            </MainLayout>
            <Footer />
        </>
    );
}

export default SignIn;
