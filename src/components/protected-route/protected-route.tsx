import { useEffect, type JSX } from 'react';
import { DATA_STATUS } from '~/enums/enums';
import { authActions } from '~/services/store/actions';
import { useAppDispatch, useAppSelector } from '~/services/store/hooks';
import { Loader } from '../primitives/primitives';
import { toast } from 'react-toastify';
import { MainLayout } from '../layout/layout';
import styles from './protected-route.module.css';
import { useLocation } from 'react-router';

function ProtectedRoute({ children }: { children: JSX.Element }) {
    const dispatch = useAppDispatch();
    const authenticationStatus = useAppSelector((state) => state.auth.authenticationStatus);
    const location = useLocation();
    const token = localStorage.getItem('token');

    useEffect(() => {
        if (token) {
            void dispatch(authActions.authenticationAction());
        } else {
            void dispatch(authActions.signOutAction());
        }
    }, [dispatch, token, location]);

    useEffect(() => {
        if (authenticationStatus === DATA_STATUS.REJECTED) {
            toast.error('Authentication Failed!');
        }
    }, [authenticationStatus, dispatch]);

    if (authenticationStatus === DATA_STATUS.FULFILLED) {
        return children;
    }

    if (authenticationStatus === DATA_STATUS.PENDING) {
        return (
            <>
                <MainLayout className={styles['flex-center']}>
                    <Loader />
                </MainLayout>
            </>
        );
    }

    return null;
}

export default ProtectedRoute;
