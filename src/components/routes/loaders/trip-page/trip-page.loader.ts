import { tripsRepository } from '~/repositories/trips.repository';

function tripPageLoader({ params }: { params: { tripId: string } }) {
    const tripById = tripsRepository.getById(params.tripId);
    return { tripById };
}

export { tripPageLoader };
