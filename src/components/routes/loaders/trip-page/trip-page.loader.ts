import { tripsRepository } from '~/repositories/trips.repository';

function tripPageLoader({ params }: { params: { tripId?: string } }) {
    const tripId = params.tripId;

    if (!tripId) {
        throw new Error('Trip ID is required.');
    }

    const tripData = tripsRepository.getById(tripId);

    return { tripData };
}

export { tripPageLoader };
