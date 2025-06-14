import { APP_ROUTES } from './routes.enum';

function getTripPath(tripId: string): string {
    return `${APP_ROUTES.TRIP}/${tripId}`;
}

export { getTripPath };
