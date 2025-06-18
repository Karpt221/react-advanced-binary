import { configureStore, createListenerMiddleware, isRejected, type TypedStartListening } from '@reduxjs/toolkit';
import { reducer as authRducer, actions as authActions } from './auth/auth';
import { travelApi } from '~/services/travel-api/travel.api';
import { reducer as navReducer } from './navigation/navigation-slice';
import type { AppDispatch, RootState } from '~/types/store/store.type';

const extraArgument = { travelApi };

const listenerMiddleware = createListenerMiddleware();

type AppStartListening = TypedStartListening<RootState, AppDispatch>;
const startAppListening = listenerMiddleware.startListening as AppStartListening;

startAppListening({
    matcher: isRejected,
    effect: async (action, listenerApi) => {
        if (action.payload && (action.payload as { isUnauthorized?: boolean }).isUnauthorized) {
            await listenerApi.dispatch(authActions.signOutAction());
        }
    },
});

const store = configureStore({
    reducer: {
        auth: authRducer,
        nav: navReducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            thunk: {
                extraArgument,
            },
        }).prepend(listenerMiddleware.middleware);
    },
});

export { store, extraArgument };
