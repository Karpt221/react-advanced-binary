import { type BookingsState, type Trip } from '~/types/types';
import styles from './book-trip-modal.module.css';
import Modal from '~/components/primitives/modal/modal';
import TripInfo from '~/components/primitives/trip-info/trip-info';
import Input from '~/components/primitives/input/input';
import Button from '~/components/primitives/button/button';
import { getTomorrowDate } from './helpers/get-tomorrow-date';
import { useCallback, useState, type FormEvent } from 'react';

type BoolTripModalProps = {
    visibility: boolean;
    tripData: Trip;
    onModalClose: () => void;
    onBookingSubmit: BookingsState['addBooking'];
};

function BookTripModal({ visibility = false, tripData, onModalClose, onBookingSubmit }: BoolTripModalProps) {
    const [totalPrice, setTotalPrice] = useState(tripData.price);
    const [numberOfGuests, setNumberOfGuests] = useState(1);
    const [date, setDate] = useState('');

    const handleCloseModal = useCallback(() => {
        onModalClose();
        setTotalPrice(tripData.price);
        setNumberOfGuests(1);
        setDate('');
    }, [onModalClose, tripData.price]);

    const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(event.target.value);
        setTotalPrice(newValue * tripData.price);
        setNumberOfGuests(newValue);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        onBookingSubmit({
            tripId: tripData.id,
            trip: { title: tripData.title, duration: tripData.duration, price: tripData.price },
            guests: numberOfGuests,
            date: date,
            totalPrice: totalPrice,
        });

        onModalClose();
    };

    return (
        <Modal visibility={visibility}>
            <div data-test-id="book-trip-popup" className={styles['book-trip-popup']}>
                <button
                    onClick={handleCloseModal}
                    className={styles['book-trip-popup__close']}
                    data-test-id="book-trip-popup-close"
                >
                    ×
                </button>
                <form onSubmit={handleSubmit} className={styles['book-trip-popup__form']} autoComplete="off">
                    <TripInfo
                        dataTestIds={{
                            headingId: 'book-trip-popup-title',
                            durationId: 'book-trip-popup-duration',
                            levelId: 'book-trip-popup-level',
                        }}
                        title={tripData.title}
                        duration={tripData.duration}
                        level={tripData.level}
                    />
                    <Input
                        heading={'Date'}
                        type="date"
                        dataTestId="book-trip-popup-date"
                        other={{ required: true, min: getTomorrowDate(), value: date }}
                        onChange={(event) => setDate(event.target.value)}
                    />
                    <Input
                        heading={'Number of guests'}
                        type="number"
                        dataTestId="book-trip-popup-guests"
                        other={{ required: true, min: 1, max: 10, value: numberOfGuests }}
                        onChange={handleNumberChange}
                    />
                    <span className={styles['book-trip-popup__total']}>
                        Total:
                        <output
                            data-test-id="book-trip-popup-total-value"
                            className={styles['book-trip-popup__total-value']}
                        >
                            ${totalPrice}
                        </output>
                    </span>
                    <Button type="submit" dataTestId="book-trip-popup-submit">
                        Book a trip
                    </Button>
                </form>
            </div>
        </Modal>
    );
}

export { BookTripModal };
