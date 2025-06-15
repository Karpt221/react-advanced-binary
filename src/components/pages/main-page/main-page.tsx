import MainLayout from '~/components/layout/main/main-layout';
import TripsFilter from '../main-page/trips-filter/trips-filter';
import Trips from './trips/trips';
import { type Duration, type Level, type Trip } from '~/types/types';
import { useCallback, useState } from 'react';
import { useLoaderData } from 'react-router';
import { filter } from './helpers/filter-helper';
import Header from '~/components/layout/header/header';
import Footer from '~/components/layout/footer/footer';

function MainPage() {
    const { tripsData }: { tripsData: Trip[] } = useLoaderData();
    const [trips, setTrips] = useState(tripsData);

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
        <>
            <Header />
            <MainLayout>
                <h1 className="visually-hidden">Travel App</h1>
                <TripsFilter handleFilter={handleFilter} />
                <Trips tripsData={trips} />
            </MainLayout>
            <Footer />
        </>
    );
}

export default MainPage;
