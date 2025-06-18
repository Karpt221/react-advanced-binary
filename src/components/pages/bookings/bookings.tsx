import styles from './bookings.module.css';
import BookingEntry from './booking-entry/booking-entry';
import { useAppDispatch, useAppSelector } from '~/services/store/hooks';
import { useEffect } from 'react';
import { bookingsActions } from '~/services/store/actions';
import { toast } from 'react-toastify';
import { DATA_STATUS } from '~/enums/enums';

function BookingsPage() {
    const dispatch = useAppDispatch();
    const bookingsData = useAppSelector((state) => state.bookings.bookings);
    const bookingRemoveStatus = useAppSelector((state) => state.bookings.bookingRemoveStatus);

    useEffect(() => {
        void dispatch(bookingsActions.getAllBookingsAction());
    }, [dispatch]);

    useEffect(() => {
        if (bookingRemoveStatus === DATA_STATUS.FULFILLED) {
            toast.success('Booking removed!');
            dispatch(bookingsActions.resetBookingRemoveStatus());
        }
    }, [bookingRemoveStatus, dispatch]);

    const sortedBookings = [...bookingsData].sort((bookingA, bookingB) => {
        const timeA = new Date(bookingA.date).getTime();
        const timeB = new Date(bookingB.date).getTime();

        return timeA - timeB;
    });

    return (
        <main className={styles['bookings-page']}>
            <h1 className="visually-hidden">Travel App</h1>
            <ul className={styles['bookings__list']}>
                {sortedBookings.map((booking) => {
                    return (
                        <BookingEntry
                            onRemove={async () => {
                                await dispatch(bookingsActions.removeBookingAction(booking.id));
                            }}
                            key={booking.id}
                            bookingData={booking}
                        />
                    );
                })}
            </ul>
        </main>
    );
}

export default BookingsPage;
