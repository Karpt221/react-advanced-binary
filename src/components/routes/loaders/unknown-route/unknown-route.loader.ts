import { redirect } from 'react-router';
import { APP_ROUTES } from '~/enums/enums';

function unknownRouteLoader() {
    return redirect(APP_ROUTES.MAIN);
}

export { unknownRouteLoader };
