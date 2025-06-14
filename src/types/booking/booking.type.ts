import { type UUID } from '../types';

type Booking = {
    id: UUID;
    userId: UUID;
    tripId: UUID;
    guests: number;
    date: string;
    trip: {
        title: string;
        duration: number;
        price: number;
    };
    totalPrice: number;
    createdAt: string;
};

export { type Booking };
