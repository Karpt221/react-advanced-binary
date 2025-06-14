import MainLayout from '~/components/layout/main/main-layout';
import styles from './bookings.module.css';
import type { AppContext } from '~/types/types';
import { useOutletContext } from 'react-router';
import BookingEntry from './booking-entry/booking-entry';

function BookingsPage() {
    const { bookings, removeBooking } = useOutletContext<AppContext>();
    const sortedBookings = bookings.sort((bookingA, bookingB) => {
        const timeA = new Date(bookingA.date).getTime();
        const timeB = new Date(bookingB.date).getTime();

        return timeA - timeB;
    });

    return (
        <MainLayout className={styles['bookings-page']}>
            <h1 className="visually-hidden">Travel App</h1>
            <ul className={styles['bookings__list']}>
                {sortedBookings.map((booking) => {
                    return <BookingEntry onRemove={removeBooking} key={booking.id} bookingData={booking} />;
                })}
            </ul>
        </MainLayout>
    );
}

export default BookingsPage;
