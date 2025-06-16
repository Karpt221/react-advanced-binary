import { type HTTP_CODE } from '~/enums/http/http-code.enum';

type ServerErrorResponse = {
    statusCode: (typeof HTTP_CODE)[keyof typeof HTTP_CODE];
    error: string;
    message: string;
};

export { type ServerErrorResponse };
