import type { ApiConstructor, BookingRequestDTO, BookingResponseDto } from '~/types/types';
import { httpApi } from '../../http/http.api';
import { HTTP_METHOD, BOOKINGS_API_PATH, CONTENT_TYPE } from '~/enums/enums';

type BookingsApiConstructor = ApiConstructor<typeof BOOKINGS_API_PATH, typeof httpApi>;

class BookingsApi {
    #baseUrl: BookingsApiConstructor['baseUrl'];
    #paths: BookingsApiConstructor['paths'];
    #http: BookingsApiConstructor['http'];

    constructor({ baseUrl, paths, http }: BookingsApiConstructor) {
        this.#baseUrl = baseUrl;
        this.#paths = paths;
        this.#http = http;
    }

    public async getAll(): Promise<BookingResponseDto[]> {
        return this.#http.fetch(this.#getUrl(), {
            method: HTTP_METHOD.GET,
            hasAuth: true,
        });
    }

    public async create(payload: BookingRequestDTO): Promise<BookingResponseDto> {
        return this.#http.fetch(this.#getUrl(), {
            method: HTTP_METHOD.POST,
            contentType: CONTENT_TYPE.JSON,
            payload: JSON.stringify(payload),
            hasAuth: true,
        });
    }

    public async remove(id: string): Promise<BookingResponseDto> {
        return this.#http.fetch(this.#getUrl(`/${id}`), {
            method: HTTP_METHOD.DELETE,
            hasAuth: true,
        });
    }

    #getUrl(path: string = '') {
        return `${this.#baseUrl}${this.#paths.BASE}${path}`;
    }
}

export { BookingsApi };
