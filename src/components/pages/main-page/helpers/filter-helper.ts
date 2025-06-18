import { DURATIONS } from '~/enums/enums';
import type { Duration, Level, TripResponseDto } from '~/types/types';

class FilterHelper {
    byTitle(tripsData: TripResponseDto[], title: string): TripResponseDto[] {
        if (title === '') {
            return tripsData;
        }

        const regex = new RegExp(`^${title}`, 'i');
        const result = tripsData.filter((trip) => {
            return trip.title.search(regex) !== -1;
        });

        return result;
    }

    byDuration(tripsData: TripResponseDto[], duration: Duration): TripResponseDto[] {
        if (duration === '') {
            return tripsData;
        }

        let range = (trip: TripResponseDto) => trip.duration <= 5 && trip.duration >= 1;

        if (duration === DURATIONS.LESS_THAN_TEN_DAYS.value) {
            range = (trip) => trip.duration >= 6 && trip.duration <= 10;
        }

        if (duration === DURATIONS.TEN_OR_MORE_DAYS.value) {
            range = (trip) => trip.duration >= 11;
        }

        return tripsData.filter(range);
    }

    byLevel(tripsData: TripResponseDto[], level: Level): TripResponseDto[] {
        if (level === '') {
            return tripsData;
        }

        return tripsData.filter((trip) => trip.level === level);
    }
}

const filter = new FilterHelper();

export { filter };
