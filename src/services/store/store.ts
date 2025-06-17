import { configureStore } from '@reduxjs/toolkit';
import { reducer as authRducer } from './auth/auth';
import { travelApi } from '~/services/travel-api/travel.api';

const extraArgument = { travelApi };

const store = configureStore({
    reducer: {
        auth: authRducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            thunk: {
                extraArgument,
            },
        });
    },
});

export { store, extraArgument };
