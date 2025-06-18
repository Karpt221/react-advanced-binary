import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';
import { navActions } from '~/services/store/actions';
import { useAppDispatch, useAppSelector } from '~/services/store/hooks';
import { Footer, Header } from '../layout/layout';

function Navigator() {
    const dispatch = useAppDispatch();
    const settedPath = useAppSelector((state) => state.nav.settedPath);
    const navigate = useNavigate();

    useEffect(() => {
        if (settedPath) {
            void navigate(settedPath);
            dispatch(navActions.clearPath());
        }
    }, [settedPath, dispatch, navigate]);

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}

export default Navigator;
