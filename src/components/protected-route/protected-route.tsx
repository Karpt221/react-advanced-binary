import { useEffect, type JSX } from 'react';
import { DATA_STATUS } from '~/enums/enums';
import { authActions } from '~/services/store/actions';
import { useAppDispatch, useAppSelector } from '~/services/store/hooks';
import { toast } from 'react-toastify';
import { useLocation } from 'react-router';
import { LoaderPage } from '../pages/pages';

function ProtectedRoute({ children }: { children: JSX.Element }) {
    const dispatch = useAppDispatch();
    const authenticationStatus = useAppSelector((state) => state.auth.authenticationStatus);
    const location = useLocation();

    useEffect(() => {
        void dispatch(authActions.authenticationAction());
    }, [dispatch, location]);

    useEffect(() => {
        if (authenticationStatus === DATA_STATUS.REJECTED) {
            toast.error('Authentication Failed!');
        }
    }, [authenticationStatus, dispatch]);

    if (authenticationStatus === DATA_STATUS.FULFILLED) {
        return children;
    }

    if (authenticationStatus === DATA_STATUS.PENDING) {
        return <LoaderPage />;
    }

    return <LoaderPage />;
}

export default ProtectedRoute;
