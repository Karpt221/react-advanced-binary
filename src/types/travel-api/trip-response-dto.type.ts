import { type Level } from '../types';

type TripResponseDto = {
    id: string;
    title: string;
    description: string;
    level: Level;
    duration: number;
    price: number;
    image: string;
    createdAt: string;
};

export { type TripResponseDto };
