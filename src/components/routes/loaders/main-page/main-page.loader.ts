import { tripsApi } from '~/services/store/trips/trips.api';

function mainPageLoader() {
    const tripsData = tripsApi.allTrips;
    return { tripsData };
}

export { mainPageLoader };
