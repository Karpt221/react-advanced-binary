import { authenticationAction, signInAction, signOutAction, signUpAction } from './actions';
import { actions, reducer } from './auth-slice';

const allActions = { ...actions, signInAction, signUpAction, authenticationAction, signOutAction };

export { allActions as actions, reducer };
