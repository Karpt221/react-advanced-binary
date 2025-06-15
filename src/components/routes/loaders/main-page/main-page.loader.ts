import { tripsApi } from '~/modules/trips/trips.api';

function mainPageLoader() {
    const tripsData = tripsApi.allTrips;
    return { tripsData };
}

export { mainPageLoader };
