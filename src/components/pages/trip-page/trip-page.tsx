import MainLayout from '~/components/layout/main/main-layout';
import styles from './trip-page.module.css';
import { useLoaderData } from 'react-router';
import { type BookingsState, type Trip } from '~/types/types';
import TripInfo from '~/components/primitives/trip-info/trip-info';
import TripPrice from '~/components/primitives/trip-price/trip-price';
import Button from '~/components/primitives/button/button';
import { useState } from 'react';
import { BookTripModal } from './book-trip-modal/book-trip-modal';
import Header from '~/components/layout/header/header';
import Footer from '~/components/layout/footer/footer';

function TripPage({ onAddBooking }: { onAddBooking: BookingsState['addBooking'] }) {
    const { tripData }: { tripData: Trip } = useLoaderData();
    const [modalVisibility, setModalVisibility] = useState(false);

    return (
        <>
            <Header />
            <MainLayout className={styles['trip-page']}>
                <h1 className="visually-hidden">Travel App</h1>
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
                    onBookingSubmit={onAddBooking}
                />
            </MainLayout>
            <Footer />
        </>
    );
}

export default TripPage;
