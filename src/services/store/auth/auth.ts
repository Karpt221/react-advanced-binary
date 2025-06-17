import { authenticationAction, signInAction, signUpAction } from './actions';
import { actions, reducer } from './auth-slice';

const allActions = { ...actions, signInAction, signUpAction, authenticationAction };

export { allActions as actions, reducer };
