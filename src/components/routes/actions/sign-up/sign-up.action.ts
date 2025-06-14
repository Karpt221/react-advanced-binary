import { redirect } from 'react-router';
import { APP_ROUTES } from '~/enums/enums';

const signUpAction = () => {
    return redirect(APP_ROUTES.MAIN);
};

export { signUpAction };
