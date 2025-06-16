import { type HTTP_CODE } from '~/enums/http/http-code.enum';
import type { ValueOf } from '~/types/helpers/helpers';

type ServerErrorResponse = {
    statusCode: ValueOf<typeof HTTP_CODE>;
    error: string;
    message: string;
};

export { type ServerErrorResponse };
