import { APP_ROUTES } from './app-routes.enum';

function getAppTripPath(tripId: string): string {
    return `${APP_ROUTES.TRIP}/${tripId}`;
}

export { getAppTripPath };
