import type { UserDto } from '~/types/travel-api/user-dto.type';
import type { SignInRequestDto, SignInResponseDto, SignUpRequestDto, SignUpResponseDto } from '~/types/types';
import { httpApi } from '../../http/http.api';
import { AUTH_API_PATH, CONTENT_TYPE, HTTP_METHOD } from '~/enums/enums';

type Constructor = {
    apiUrl: string;
    authPath: Record<keyof typeof AUTH_API_PATH, string>;
    http: typeof httpApi;
};

class AuthApi {
    #apiUrl: Constructor['apiUrl'];
    #authPath: Constructor['authPath'];
    #http: Constructor['http'];

    constructor({ apiUrl, authPath, http }: Constructor) {
        this.#apiUrl = apiUrl;
        this.#authPath = authPath;
        this.#http = http;
    }

    public async signIn(payload: SignInRequestDto): Promise<SignInResponseDto> {
        return this.#http.fetch(this.#getUrl(this.#authPath.SIGN_IN), {
            method: HTTP_METHOD.POST,
            contentType: CONTENT_TYPE.JSON,
            payload: JSON.stringify(payload),
            hasAuth: false,
        });
    }

    public signUp(payload: SignUpRequestDto): Promise<SignUpResponseDto> {
        return this.#http.fetch(this.#getUrl(this.#authPath.SIGN_UP), {
            method: HTTP_METHOD.POST,
            contentType: CONTENT_TYPE.JSON,
            payload: JSON.stringify(payload),
            hasAuth: false,
        });
    }

    public authenticate(): Promise<UserDto> {
        return this.#http.fetch(this.#getUrl(this.#authPath.AUTHENTICATED_USER), {
            method: HTTP_METHOD.GET,
            hasAuth: true,
        });
    }

    #getUrl(path: string) {
        return `${this.#apiUrl}${this.#authPath.BASE}${path}`;
    }
}

export { AuthApi };
