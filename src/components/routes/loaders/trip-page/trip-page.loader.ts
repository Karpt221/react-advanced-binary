import { tripsApi } from '~/modules/trips/trips.api';

function tripPageLoader({ params }: { params: { tripId?: string } }) {
    const tripId = params.tripId;

    if (!tripId) {
        throw new Error('Trip ID is required.');
    }

    const tripData = tripsApi.getById(tripId);

    return { tripData };
}

export { tripPageLoader };
