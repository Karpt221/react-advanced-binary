import TripsFilter from '../main-page/trips-filter/trips-filter';
import Trips from './trips/trips';
import { type Duration, type Level } from '~/types/types';
import { useCallback, useEffect, useState } from 'react';
import { filter } from './helpers/filter-helper';
import { useAppDispatch, useAppSelector } from '~/services/store/hooks';
import { Loader } from '~/components/primitives/primitives';
import { DATA_STATUS } from '~/enums/enums';
import { tripsActions } from '~/services/store/actions';
import styles from './main-page.module.css';

function MainPage() {
    const tripsData = useAppSelector((state) => state.trips.trips);
    const tripsStatus = useAppSelector((state) => state.trips.tripsStatus);
    const [trips, setTrips] = useState(tripsData);
    const dispatch = useAppDispatch();

    useEffect(() => {
        void dispatch(tripsActions.getAllTripsAction());
    }, [dispatch]);

    const handleFilter = useCallback(
        (title: string, duration: Duration, level: Level) => {
            const resultByTitle = filter.byTitle(tripsData, title);
            const resultByDuration = filter.byDuration(resultByTitle, duration);
            const resultByLevel = filter.byLevel(resultByDuration, level);
            setTrips([...resultByLevel]);
        },
        [tripsData]
    );

    return (
        <main>
            <h1 className="visually-hidden">Travel App</h1>
            <TripsFilter handleFilter={handleFilter} />
            {tripsStatus === DATA_STATUS.PENDING ? (
                <div className={`${styles['trips-wrapper']} flex-center`}>
                    <Loader />
                </div>
            ) : (
                <Trips tripsData={trips} />
            )}
        </main>
    );
}

export default MainPage;
