import MainLayout from '~/components/layout/main/main-layout';
import TripsFilter from '../main-page/trips-filter/trips-filter';
import Trips from './trips/trips';

function MainPage() {
    return (
        <MainLayout>
            <h1 className="visually-hidden">Travel App</h1>
            <TripsFilter />
            <Trips/>
        </MainLayout>
    );
}

export default MainPage;
