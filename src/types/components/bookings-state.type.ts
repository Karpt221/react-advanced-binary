import type { BookingResponseDTO } from '../types';

type BookingsState = {
    bookings: BookingResponseDTO[];
    addBooking: (newBooking: Omit<BookingResponseDTO, 'id' | 'userId' | 'createdAt'>) => void;
    removeBooking: (bookingId: string) => void;
};

export { type BookingsState };
