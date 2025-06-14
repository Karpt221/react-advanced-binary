import { tripsRepository } from '~/repositories/trips.repository';

function mainPageLoader() {
    const tripsData = tripsRepository.allTrips;
    return { tripsData };
}

export { mainPageLoader };
