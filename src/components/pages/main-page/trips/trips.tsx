import styles from './trips.module.css';
import TripList from './trips-list/trip-list';
import trips from '~/assets/data/trips.json';
import { type Trip } from '~/types/types';

const tripsData: Trip[] = trips as Trip[];

function Trips() {
    return (
        <section className={styles.trips}>
            <h2 className="visually-hidden">Trips List</h2>
            <TripList tripsData={tripsData} />
        </section>
    );
}

export default Trips;
