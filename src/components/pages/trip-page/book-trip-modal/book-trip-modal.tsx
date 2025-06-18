import { type TripResponseDto } from '~/types/types';
import styles from './book-trip-modal.module.css';
import { getTomorrowDate } from './helpers/get-tomorrow-date';
import { useCallback, useEffect, useState } from 'react';
import { Button, Input, Modal, TripInfo } from '~/components/primitives/primitives';
import { bookingsActions } from '~/services/store/actions';
import { useAppDispatch, useAppSelector } from '~/services/store/hooks';
import { DATA_STATUS } from '~/enums/enums';
import { toast } from 'react-toastify';

type BoolTripModalProps = {
    visibility: boolean;
    tripData: TripResponseDto;
    onModalClose: () => void;
};

function BookTripModal({ visibility = false, tripData, onModalClose }: BoolTripModalProps) {
    const [totalPrice, setTotalPrice] = useState(tripData.price);
    const [numberOfGuests, setNumberOfGuests] = useState(1);
    const [date, setDate] = useState('');
    const dispatch = useAppDispatch();
    const bookingCreateStatus = useAppSelector((state) => state.bookings.bookingCreateStatus);

    const handleCloseModal = useCallback(() => {
        onModalClose();
        setTotalPrice(tripData.price);
        setNumberOfGuests(1);
        setDate('');
    }, [onModalClose, tripData.price]);

    useEffect(() => {
        if (bookingCreateStatus === DATA_STATUS.FULFILLED) {
            toast.success('Booking created!');
            dispatch(bookingsActions.resetBookingCreateStatus());
            handleCloseModal();
        }
        if (bookingCreateStatus === DATA_STATUS.REJECTED) {
            toast.error('Booking failed!');
            dispatch(bookingsActions.resetBookingCreateStatus());
        }
    }, [bookingCreateStatus, dispatch, handleCloseModal]);

    const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(event.target.value);
        setTotalPrice(newValue * tripData.price);
        setNumberOfGuests(newValue);
    };
    const handleSubmit = useCallback(
        (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const date = formData.get('date') as string;
            const guests = Number(formData.get('guests'));
            void dispatch(bookingsActions.createBookingAction({ tripId: tripData.id, date, guests }));
        },
        [dispatch, tripData.id]
    );

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
                        name="guests"
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
