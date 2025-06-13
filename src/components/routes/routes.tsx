import { APP_ROUTES } from '../../enums/enums';
import App from '../app/app';
import Button from '../primitives/button/button';

const appRoutes = [
    {
        element: <App />,
        children: [
            {
                path: APP_ROUTES.MAIN,
                element: <Button dataTestId="">MAIN</Button>,
            },
            {
                path: APP_ROUTES.SIGN_IN,
                element: <Button dataTestId="">SIGN_IN</Button>,
            },
            {
                path: APP_ROUTES.SIGN_UP,
                element: <Button dataTestId="">SIGN_UP</Button>,
            },
            {
                path: APP_ROUTES.BOOKINGS,
                element: <Button dataTestId="">BOOKINGS</Button>,
            },
            {
                path: APP_ROUTES.TRIP,
                element: <Button dataTestId="">TRIP</Button>,
            },
            {
                path: '*',
                element: <Button dataTestId="">MAIN</Button>,
            },
        ],
    },
];

export default appRoutes;
