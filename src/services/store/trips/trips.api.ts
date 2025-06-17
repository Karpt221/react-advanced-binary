import importedTrips from '~/assets/data/trips.json';
import type { TripResponseDto } from '~/types/types';

class TripsApi {
    private readonly trips = importedTrips as TripResponseDto[];

    getById(id: string): TripResponseDto | null {
        const tripById = this.trips.find((trip) => trip.id === id);
        const result = tripById ?? null;
        return result;
    }

    get allTrips(): TripResponseDto[] {
        return structuredClone(this.trips);
    }
}

const tripsApi = new TripsApi();

export { tripsApi };
