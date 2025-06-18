import { AUTH_API_PATH, BOOKINGS_API_PATH, ENV, TRIPS_API_PATH } from '~/enums/enums';
import { AuthApi } from './auth/auth.api';
import { httpApi } from '../http/http.api';
import { TripsApi } from './trips/trips.api';
import { BookingsApi } from './bookings/bookings.api';

const auth = new AuthApi({ baseUrl: ENV.TRAVEL_API_URL, paths: AUTH_API_PATH, http: httpApi });

const trips = new TripsApi({ baseUrl: ENV.TRAVEL_API_URL, paths: TRIPS_API_PATH, http: httpApi });

const bookings = new BookingsApi({ baseUrl: ENV.TRAVEL_API_URL, paths: BOOKINGS_API_PATH, http: httpApi });

const travelApi = { auth, trips, bookings };

export { travelApi };
