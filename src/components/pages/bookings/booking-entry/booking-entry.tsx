import { type BookingResponseDTO, type BookingsState } from '~/types/types';
import styles from './booking-entry.module.css';

type BookingEntryProps = { bookingData: BookingResponseDTO; onRemove: BookingsState['removeBooking'] };

function BookingEntry({ bookingData, onRemove }: BookingEntryProps) {
    const formattedDate = bookingData.date.split('T')[0];
    return (
        <li data-test-id="booking" className={styles['booking']}>
            <h3 data-test-id="booking-title" className={styles['booking__title']}>
                {bookingData.trip.title}
            </h3>
            <span data-test-id="booking-guests" className={styles['booking__guests']}>
                {bookingData.guests} guests
            </span>
            <span data-test-id="booking-date" className={styles['booking__date']}>
                {formattedDate}
            </span>
            <span data-test-id="booking-total" className={styles['booking__total']}>
                ${bookingData.trip.price}
            </span>
            <button
                onClick={() => onRemove(bookingData.id)}
                data-test-id="booking-cancel"
                className={styles['booking__cancel']}
                title="Cancel booking"
            >
                <span className="visually-hidden">Cancel booking</span>×
            </button>
        </li>
    );
}

export default BookingEntry;
