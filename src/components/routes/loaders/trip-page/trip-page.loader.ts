import { tripsRepository } from '~/repositories/trips.repository';

function tripPageLoader({ params }: { params: { tripId: string } }) {
    const tripData = tripsRepository.getById(params.tripId);
    return { tripData };
}

export { tripPageLoader };
