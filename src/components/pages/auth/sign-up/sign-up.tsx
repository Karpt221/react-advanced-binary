import { Form, Link } from 'react-router';
import styles from '../auth.module.css';
import { APP_ROUTES } from '~/enums/enums';
import Input from 'primitives/input/input';
import Button from 'primitives/button/button';
import MainLayout from 'components/layout/main/main-layout';
import Header from '~/components/layout/header/header';
import Footer from '~/components/layout/footer/footer';

function SignUp() {
    return (
        <>
            <Header isNavHidden={true} />
            <MainLayout className={styles['sign-up-page']}>
                <h1 className="visually-hidden">Travel App</h1>
                <Form method="post" action={APP_ROUTES.SIGN_UP} className={styles['sign-up-form']} autoComplete="off">
                    <h2 className={styles['sign-up-form__title']}>Sign Up</h2>
                    <Input dataTestId="auth-full-name" heading="Full name" type="text" other={{ required: true }} />
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
                </Form>
                <span>
                    Already have an account?
                    <Link
                        to={APP_ROUTES.SIGN_IN}
                        data-test-id="auth-sign-in-link"
                        className={styles['sign-up-form__link']}
                    >
                        Sign In
                    </Link>
                </span>
            </MainLayout>
            <Footer />
        </>
    );
}

export default SignUp;
