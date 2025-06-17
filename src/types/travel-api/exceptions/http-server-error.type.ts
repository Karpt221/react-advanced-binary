import { HTTP_CODE } from '~/enums/enums';
import { type ValueOf } from '~/types/types';

type ServerErrorResponse = {
    statusCode: ValueOf<typeof HTTP_CODE>;
    error: string;
    message: string;
};

export { type ServerErrorResponse };
