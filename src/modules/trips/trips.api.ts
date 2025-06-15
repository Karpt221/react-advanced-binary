import importedTrips from '~/assets/data/trips.json';
import type { Trip } from '~/types/types';

class TripsApi {
    private readonly trips = importedTrips as Trip[];

    getById(id: string): Trip | null {
        const tripById = this.trips.find((trip) => trip.id === id);
        const result = tripById ?? null;
        return result;
    }

    get allTrips(): Trip[] {
        return structuredClone(this.trips);
    }
}

const tripsApi = new TripsApi();

export { tripsApi };
