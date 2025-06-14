import { APP_ROUTES } from '~/enums/enums';
import App from '../app/app';
import Button from 'primitives/button/button';
import SignIn from '../pages/auth/sign-in/sign-in';
import SignUp from '../pages/auth/sign-up/sign-up';
import MainPage from '../pages/main-page/main-page';
import { signInAction, signUpAction } from './actions/actions';
import { mainPageLoader, tripPageLoader } from './loaders/loaders';

const appRoutes = [
    {
        element: <App />,
        children: [
            {
                path: APP_ROUTES.MAIN,
                element: <MainPage />,
                loader: mainPageLoader,
            },
            {
                path: APP_ROUTES.SIGN_IN,
                element: <SignIn />,
                action: signInAction,
            },
            {
                path: APP_ROUTES.SIGN_UP,
                element: <SignUp />,
                action: signUpAction,
            },
            {
                path: APP_ROUTES.BOOKINGS,
                element: <Button dataTestId="">BOOKINGS</Button>,
            },
            {
                path: `${APP_ROUTES.TRIP}/:tripId`,
                element: <Button dataTestId="">TRIP</Button>,
                loader: tripPageLoader,
            },
            {
                path: '*',
                element: <Button dataTestId="">MAIN</Button>,
            },
        ],
    },
];

export default appRoutes;
