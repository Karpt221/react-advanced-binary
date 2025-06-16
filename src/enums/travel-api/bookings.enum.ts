const BOOKINGS_API_PATH = {
    BOOKINGS: '/bookings',
} as const;

function getApiBookingPath(bookingId: string): string {
    return `${BOOKINGS_API_PATH.BOOKINGS}/${bookingId}`;
}

export { BOOKINGS_API_PATH, getApiBookingPath };
