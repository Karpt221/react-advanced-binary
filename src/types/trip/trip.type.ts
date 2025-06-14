import { type Levels } from '../types';

type Trip = {
    id: string;
    title: string;
    description: string;
    level: Levels;
    duration: number;
    price: number;
    image: string;
    createdAt: string;
};

export { type Trip };
