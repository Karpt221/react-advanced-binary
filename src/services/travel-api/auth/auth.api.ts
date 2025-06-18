import type { UserDto } from '~/types/travel-api/user-dto.type';
import type { SignInRequestDto, SignInResponseDto, SignUpRequestDto, SignUpResponseDto } from '~/types/types';
import { httpApi } from '../../http/http.api';
import { AUTH_API_PATH, CONTENT_TYPE, HTTP_METHOD } from '~/enums/enums';
import { type ApiConstructor } from '~/types/types';

type AuthApiConstructor = ApiConstructor<typeof AUTH_API_PATH, typeof httpApi>;

class AuthApi {
    #baseUrl: AuthApiConstructor['baseUrl'];
    #paths: AuthApiConstructor['paths'];
    #http: AuthApiConstructor['http'];

    constructor({ baseUrl, paths, http }: AuthApiConstructor) {
        this.#baseUrl = baseUrl;
        this.#paths = paths;
        this.#http = http;
    }

    public async signIn(payload: SignInRequestDto): Promise<SignInResponseDto> {
        return this.#http.fetch(this.#getUrl(this.#paths.SIGN_IN), {
            method: HTTP_METHOD.POST,
            contentType: CONTENT_TYPE.JSON,
            payload: JSON.stringify(payload),
            hasAuth: false,
        });
    }

    public signUp(payload: SignUpRequestDto): Promise<SignUpResponseDto> {
        return this.#http.fetch(this.#getUrl(this.#paths.SIGN_UP), {
            method: HTTP_METHOD.POST,
            contentType: CONTENT_TYPE.JSON,
            payload: JSON.stringify(payload),
            hasAuth: false,
        });
    }

    public authenticate(): Promise<UserDto> {
        return this.#http.fetch(this.#getUrl(this.#paths.AUTHENTICATED_USER), {
            method: HTTP_METHOD.GET,
            hasAuth: true,
        });
    }

    #getUrl(path: string = '') {
        return `${this.#baseUrl}${this.#paths.BASE}${path}`;
    }
}

export { AuthApi };
