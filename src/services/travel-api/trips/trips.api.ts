import type { ApiConstructor, TripResponseDto } from '~/types/types';
import { httpApi } from '../../http/http.api';
import { HTTP_METHOD, TRIPS_API_PATH } from '~/enums/enums';

type TripsApiConstructor = ApiConstructor<typeof TRIPS_API_PATH, typeof httpApi>;

class TripsApi {
    #baseUrl: TripsApiConstructor['baseUrl'];
    #paths: TripsApiConstructor['paths'];
    #http: TripsApiConstructor['http'];

    constructor({ baseUrl, paths, http }: TripsApiConstructor) {
        this.#baseUrl = baseUrl;
        this.#paths = paths;
        this.#http = http;
    }

    public async getAll(): Promise<TripResponseDto[]> {
        return this.#http.fetch(this.#getUrl(), {
            method: HTTP_METHOD.GET,
            hasAuth: true,
        });
    }

    public async getById(id: string): Promise<TripResponseDto> {
        return this.#http.fetch(this.#getUrl(`/${id}`), {
            method: HTTP_METHOD.GET,
            hasAuth: true,
        });
    }

    #getUrl(path: string = '') {
        return `${this.#baseUrl}${this.#paths.BASE}${path}`;
    }
}

export { TripsApi };
