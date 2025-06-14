import type { Trip } from '~/types/types';
import styles from './trip-list.module.css';
import TripCard from '../trip-card/trip-card';

type TripListProps = Readonly<{
    tripsData: Trip[];
}>;

function TripList({ tripsData }: TripListProps) {
    return (
        <ul className={styles['trip-list']}>
            {tripsData.map((trip) => {
                return <TripCard key={trip.id} tripData={trip} />;
            })}
        </ul>
    );
}

export default TripList;
