import trips from '~/assets/data/trips.json';
import { type Trip } from '~/types/types';

function mainPageLoader() {
    const tripsData = trips as Trip[];
    return { tripsData };
}

export { mainPageLoader };
