import type { Booking, UUID } from '../types';

type AppContext = {
    bookings: Booking[];
    addBooking: (newBooking: Omit<Booking, 'id' | 'userId' | 'createdAt'>) => void;
    removeBooking: (bookingId: UUID) => void;
};

export { type AppContext };
