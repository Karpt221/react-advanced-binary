const TRIPS_API_PATH = {
    TRIPS: '/trips',
} as const;

function getApiTripPath(tripId: string): string {
    return `${TRIPS_API_PATH.TRIPS}/${tripId}`;
}

export { TRIPS_API_PATH, getApiTripPath };
