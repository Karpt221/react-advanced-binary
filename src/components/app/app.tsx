import RouterProvider from '../router-provider/router-provider';
import { APP_ROUTES } from '~/enums/enums';
import { tripPageLoader, unknownRouteLoader } from '../routes/loaders/loaders';
import { BookingsPage, MainPage, SignIn, SignUp, TripPage } from '../pages/pages';
import Navigator from '../navigator/navigator';
import { ToastContainer } from 'react-toastify';
import ProtectedRoute from '../protected-route/protected-route';

function App() {
    return (
        <>
            <ToastContainer className="notification" toastClassName="notification" />
            <RouterProvider
                routes={[
                    {
                        element: <Navigator />,
                        children: [
                            {
                                path: APP_ROUTES.MAIN,
                                element: (
                                    <ProtectedRoute>
                                        <MainPage />
                                    </ProtectedRoute>
                                ),
                            },
                            {
                                path: APP_ROUTES.SIGN_IN,
                                element: <SignIn />,
                            },
                            {
                                path: APP_ROUTES.SIGN_UP,
                                element: <SignUp />,
                            },
                            {
                                path: APP_ROUTES.BOOKINGS,
                                element: (
                                    <ProtectedRoute>
                                        <BookingsPage />
                                    </ProtectedRoute>
                                ),
                            },
                            {
                                path: `${APP_ROUTES.TRIP}/:tripId`,
                                element: (
                                    <ProtectedRoute>
                                        <TripPage />
                                    </ProtectedRoute>
                                ),
                                loader: tripPageLoader,
                            },
                            {
                                path: APP_ROUTES.ANY,
                                loader: unknownRouteLoader,
                            },
                        ],
                    },
                ]}
            />
        </>
    );
}

export default App;
