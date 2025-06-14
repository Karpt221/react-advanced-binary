import { type Level } from '../types';

type Trip = {
    id: string;
    title: string;
    description: string;
    level: Level;
    duration: number;
    price: number;
    image: string;
    createdAt: string;
};

export { type Trip };
