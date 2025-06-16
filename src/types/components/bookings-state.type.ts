import type { BookingResponseDto } from '../types';

type BookingsState = {
    bookings: BookingResponseDto[];
    addBooking: (newBooking: Omit<BookingResponseDto, 'id' | 'userId' | 'createdAt'>) => void;
    removeBooking: (bookingId: string) => void;
};

export { type BookingsState };
