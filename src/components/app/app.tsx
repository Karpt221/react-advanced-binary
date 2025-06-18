import { type BookingResponseDto } from '~/types/types';
import importedBookings from '~/assets/data/bookings.json';
import { useState } from 'react';
import RouterProvider from '../router-provider/router-provider';
import { APP_ROUTES } from '~/enums/enums';
import { mainPageLoader, tripPageLoader, unknownRouteLoader } from '../routes/loaders/loaders';
import { BookingsPage, MainPage, SignIn, SignUp, TripPage } from '../pages/pages';
import Navigator from '../navigator/navigator';
import { ToastContainer } from 'react-toastify';
import ProtectedRoute from '../protected-route/protected-route';

const bookingsData = importedBookings as BookingResponseDto[];

function App() {
    const [bookings, setBookings] = useState<BookingResponseDto[]>(bookingsData);

    const addBooking = (newBooking: Omit<BookingResponseDto, 'id' | 'userId' | 'createdAt'>) => {
        const id = crypto.randomUUID() as string;
        const userId = crypto.randomUUID() as string;
        const createdAt = new Date().toString();
        const bookingWithID: BookingResponseDto = { ...newBooking, id, userId, createdAt };
        setBookings((prevBookings) => [...prevBookings, bookingWithID]);
    };

    const removeBooking = (bookingId: string) => {
        setBookings((prevBookings) => [...prevBookings.filter((booking) => booking.id !== bookingId)]);
    };

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
                                loader: mainPageLoader,
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
                                        <BookingsPage bookings={bookings} onRemove={removeBooking} />
                                    </ProtectedRoute>
                                ),
                            },
                            {
                                path: `${APP_ROUTES.TRIP}/:tripId`,
                                element: (
                                    <ProtectedRoute>
                                        <TripPage onAddBooking={addBooking} />
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
