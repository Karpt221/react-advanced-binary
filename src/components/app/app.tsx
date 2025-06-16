import { type BookingResponseDto } from '~/types/types';
import importedBookings from '~/assets/data/bookings.json';
import { useState } from 'react';
import RouterProvider from '../router-provider/router-provider';
import { APP_ROUTES } from '~/enums/enums';
import { mainPageLoader, tripPageLoader, unknownRouteLoader } from '../routes/loaders/loaders';
import { signInAction, signUpAction } from '../routes/actions/actions';
import { BookingsPage, MainPage, SignIn, SignUp, TripPage } from '../pages/pages';

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
        <RouterProvider
            routes={[
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
                    element: <BookingsPage bookings={bookings} onRemove={removeBooking} />,
                },
                {
                    path: `${APP_ROUTES.TRIP}/:tripId`,
                    element: <TripPage onAddBooking={addBooking} />,
                    loader: tripPageLoader,
                },
                {
                    path: APP_ROUTES.ANY,
                    loader: unknownRouteLoader,
                },
            ]}
        />
    );
}

export default App;
