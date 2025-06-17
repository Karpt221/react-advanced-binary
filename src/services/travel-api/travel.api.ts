import { AUTH_API_PATH, ENV } from '~/enums/enums';
import { AuthApi } from './auth/auth.api';
import { httpApi } from '../http/http.api';

const auth = new AuthApi({ apiUrl: ENV.TRAVEL_API_URL, authPath: AUTH_API_PATH, http: httpApi });

const travelApi = { auth };

export { travelApi };
