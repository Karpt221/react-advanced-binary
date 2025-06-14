import { DURATIONS } from '~/enums/enums';
import type { Duration, Level, Trip } from '~/types/types';

class Filter {
    byTitle(tripsData: Trip[], title: string): Trip[] {
        if (title === '') {
            return tripsData;
        }

        const regex = new RegExp(`^${title}`, 'i');
        const result = tripsData.filter((trip) => {
            return trip.title.search(regex) !== -1;
        });

        return result;
    }

    byDuration(tripsData: Trip[], duration: Duration): Trip[] {
        if (duration === '') {
            return tripsData;
        }

        let range = (trip: Trip) => trip.duration <= 5 && trip.duration >= 1;

        if (duration === DURATIONS.LESS_THAN_TEN_DAYS.value) {
            range = (trip) => trip.duration >= 6 && trip.duration <= 10;
        }

        if (duration === DURATIONS.TEN_OR_MORE_DAYS.value) {
            range = (trip) => trip.duration >= 11;
        }

        return tripsData.filter(range);
    }

    byLevel(tripsData: Trip[], level: Level): Trip[] {
        if (level === '') {
            return tripsData;
        }

        return tripsData.filter((trip) => trip.level === level);
    }
}

const filter = new Filter();

export { filter };
