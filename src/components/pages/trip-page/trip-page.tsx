import styles from './trip-page.module.css';
import { useState } from 'react';
import { BookTripModal } from './book-trip-modal/book-trip-modal';
import { Button, TripInfo, TripPrice } from '~/components/primitives/primitives';
import { useAppSelector } from '~/services/store/hooks';

function TripPage() {
    const tripData = useAppSelector((state) => state.trips.currentTrip);
    const [modalVisibility, setModalVisibility] = useState(false);

    return (
        <main className={styles['trip-page']}>
            <h1 className="visually-hidden">Travel App</h1>

            {tripData && (
                <>
                    <div className={styles['trip']}>
                        <img
                            data-test-id="trip-details-image"
                            src={tripData.image}
                            className={styles['trip__img']}
                            alt="trip photo"
                        />
                        <div className={styles['trip__content']}>
                            <TripInfo
                                dataTestIds={{
                                    headingId: 'trip-details-title',
                                    durationId: 'trip-details-duration',
                                    levelId: 'trip-details-level',
                                }}
                                title={tripData.title}
                                duration={tripData.duration}
                                level={tripData.level}
                            />
                            <div data-test-id="trip-details-description" className={styles['trip__description']}>
                                {tripData.description}
                            </div>
                            <TripPrice dataTestId="trip-details-price-value" price={tripData.price} />
                            <Button
                                onClick={() => setModalVisibility(true)}
                                dataTestId="trip-details-button"
                                className={styles['trip__button']}
                            >
                                Book a trip
                            </Button>
                        </div>
                    </div>
                    <BookTripModal
                        visibility={modalVisibility}
                        tripData={tripData}
                        onModalClose={() => setModalVisibility(false)}
                    />
                </>
            )}
        </main>
    );
}

export default TripPage;
