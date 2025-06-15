import styles from './bookings.module.css';
import BookingEntry from './booking-entry/booking-entry';
import { type Booking, type BookingsState } from '~/types/types';
import { Footer, Header, MainLayout } from '~/components/layout/layout';

function BookingsPage({ bookings, onRemove }: { bookings: Booking[]; onRemove: BookingsState['removeBooking'] }) {
    const sortedBookings = bookings.sort((bookingA, bookingB) => {
        const timeA = new Date(bookingA.date).getTime();
        const timeB = new Date(bookingB.date).getTime();

        return timeA - timeB;
    });

    return (
        <>
            <Header />
            <MainLayout className={styles['bookings-page']}>
                <h1 className="visually-hidden">Travel App</h1>
                <ul className={styles['bookings__list']}>
                    {sortedBookings.map((booking) => {
                        return <BookingEntry onRemove={onRemove} key={booking.id} bookingData={booking} />;
                    })}
                </ul>
            </MainLayout>
            <Footer />
        </>
    );
}

export default BookingsPage;
