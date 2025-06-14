import { redirect } from 'react-router';
import { APP_ROUTES } from '~/enums/enums';

const signInAction = () => {
    return redirect(APP_ROUTES.MAIN);
};

export { signInAction };
