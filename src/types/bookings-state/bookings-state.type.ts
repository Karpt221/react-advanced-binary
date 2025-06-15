import type { Booking, UUID } from '../types';

type BookingsState = {
    bookings: Booking[];
    addBooking: (newBooking: Omit<Booking, 'id' | 'userId' | 'createdAt'>) => void;
    removeBooking: (bookingId: UUID) => void;
};

export { type BookingsState };
