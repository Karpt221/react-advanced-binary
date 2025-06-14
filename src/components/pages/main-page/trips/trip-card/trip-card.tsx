import styles from './trip-card.module.css';
import { type Trip } from '~/types/types';
import TripInfo from 'primitives/trip-info/trip-info';
import TripPrice from 'primitives/trip-price/trip-price';
import Button from 'primitives/button/button';
import { useNavigate } from 'react-router';
import { getTripPath } from '~/enums/enums';

type TripCardProps = Readonly<{
    tripData: Trip;
}>;

function TripCard({ tripData }: TripCardProps) {
    const navigate = useNavigate();

    return (
        <li data-test-id="trip-card" className={styles['trip-card']}>
            <img
                className={styles['trip-card__image']}
                data-test-id="trip-card-image"
                src={tripData.image}
                alt="trip photo"
            />
            <div className={styles['trip-card__content']}>
                <TripInfo
                    dataTestIds={{
                        headingId: 'trip-card-title',
                        durationId: 'trip-card-duration',
                        levelId: 'trip-card-level',
                    }}
                    title={tripData.title}
                    duration={tripData.duration}
                    level={tripData.level}
                />
                <TripPrice dataTestId="trip-card-price-value" price={tripData.price} />
                <Button onClick={() => navigate(getTripPath(tripData.id))} dataTestId="trip-card-link">
                    Discover a trip
                </Button>
            </div>
        </li>
    );
}

export default TripCard;
