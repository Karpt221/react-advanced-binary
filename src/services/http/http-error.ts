import type { ServerErrorResponse } from '~/types/types';

class HttpError extends Error {
    error: string;
    statusCode: number;
    constructor({ statusCode, error, message }: ServerErrorResponse) {
        super(message);
        this.statusCode = statusCode;
        this.error = error;
    }
}

export { HttpError };
