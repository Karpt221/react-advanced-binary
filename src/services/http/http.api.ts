import { CONTENT_TYPE, HTTP_METHOD, HTTP_CODE } from '~/enums/enums';
import { type ServerErrorResponse, type ValueOf } from '~/types/types';
import { HttpError } from './http-error';

type FetchOptions = {
    method: ValueOf<typeof HTTP_METHOD>;
    hasAuth: boolean;
    payload?: BodyInit;
    headers: Headers;
    query: Record<string, unknown>;
    contentType?: ValueOf<typeof CONTENT_TYPE>;
};

class HttpApi {
    #getUrl(url: string, query: Record<string, unknown>): URL | RequestInfo {
        const path = new URL(url);
        Object.keys(query).map((key) => {
            path.searchParams.append(key, String(query[key]));
        });
        return path;
    }

    async #checkResponse(response: Response): Promise<Response> {
        if (!response.ok) {
            await this.#handleError(response);
        }

        return (await response.json()) as Promise<Response>;
    }

    #handleError = async (response: Response): Promise<never> => {
        let parsedException: ServerErrorResponse;

        try {
            parsedException = (await response.json()) as ServerErrorResponse;
        } catch {
            parsedException = {
                statusCode: HTTP_CODE.INTERNAL_SERVER_ERROR,
                error: response.statusText,
                message: 'INTERNAL_SERVER_ERROR',
            };
        }

        throw new HttpError(parsedException);
    };

    #getHeaders({ contentType, hasAuth }: { contentType: 'application/json' | undefined; hasAuth: boolean }): Headers {
        const headers = new Headers();

        if (contentType) {
            headers.append('Content-Type', contentType);
        }
        if (hasAuth) {
            const token = localStorage.getItem('token');

            headers.append('Authorization', `Bearer ${token}`);
        }

        return headers;
    }

    public async fetch<T>(url: string, options: Partial<FetchOptions>): Promise<T> {
        const { contentType, hasAuth = true, method = HTTP_METHOD.GET, payload = null, query = {} } = options;
        const headers = this.#getHeaders({
            contentType,
            hasAuth,
        });

        const response = await fetch(this.#getUrl(url, query), {
            body: payload,
            headers,
            method,
        });

        return (await this.#checkResponse(response)) as T;
    }
}

const httpApi = new HttpApi();

export { httpApi };
