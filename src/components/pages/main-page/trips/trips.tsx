import styles from './trips.module.css';
import TripList from './trips-list/trip-list';
import type { Trip } from '~/types/types';


type TripProps = Readonly<{
    tripsData: Trip[];
}>;

function Trips({tripsData} : TripProps) {
    return (
        <section className={styles.trips}>
            <h2 className="visually-hidden">Trips List</h2>
            <TripList tripsData={tripsData} />
        </section>
    );
}

export default Trips;
