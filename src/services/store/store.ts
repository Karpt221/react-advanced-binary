import { configureStore, createListenerMiddleware, isRejected, type TypedStartListening } from '@reduxjs/toolkit';
import { reducer as authRducer, actions as authActions } from './auth/auth';
import { reducer as navReducer } from './navigation/navigation-slice';
import { reducer as tripsReucer } from './trips/trips';
import { reducer as bookingsReucer } from './bookings/bookings';
import { travelApi } from '~/services/travel-api/travel.api';
import type { AppDispatch, RootState } from '~/types/store/store.type';
import { navActions } from './actions';
import { APP_ROUTES } from '~/enums/enums';
import { toast } from 'react-toastify';

const extraArgument = { travelApi };

const listenerMiddleware = createListenerMiddleware();

type AppStartListening = TypedStartListening<RootState, AppDispatch>;
const startAppListening = listenerMiddleware.startListening as AppStartListening;

startAppListening({
    matcher: isRejected,
    effect: async (action, listenerApi) => {
        if (action.payload && (action.payload as { isUnauthorized?: boolean }).isUnauthorized) {
            if ((action.payload as { bookingCreateError?: boolean }).bookingCreateError) {
                toast.error('Failed to book! Session expired!');
            }
            if ((action.payload as { bookingRemoveError?: boolean }).bookingRemoveError) {
                toast.error('Failed to cancel! Session expired!');
            }
            await listenerApi.dispatch(authActions.signOutAction());
        }

        if ((action.payload as { signUpError?: boolean; errorMessage: string }).signUpError) {
            const payload = action.payload as { errorMessage: string };
            toast.error(payload.errorMessage);
        }

        if ((action.payload as { signInError?: boolean; errorMessage: string }).signInError) {
            const payload = action.payload as { errorMessage: string };
            toast.error(payload.errorMessage);
        }

        if (action.payload && (action.payload as { isNotFound?: boolean }).isNotFound) {
            listenerApi.dispatch(navActions.navigate(APP_ROUTES.MAIN));
        }
    },
});

const store = configureStore({
    reducer: {
        auth: authRducer,
        nav: navReducer,
        trips: tripsReucer,
        bookings: bookingsReucer,
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
