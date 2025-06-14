import { type Level, type UUID } from '../types';

type Trip = {
    id: UUID;
    title: string;
    description: string;
    level: Level;
    duration: number;
    price: number;
    image: string;
    createdAt: string;
};

export { type Trip };
