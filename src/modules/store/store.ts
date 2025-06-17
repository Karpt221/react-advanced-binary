import { configureStore } from '@reduxjs/toolkit';
import { reducer as authRducer } from './auth/slices/auth';
import { authApi } from '~/modules/store/auth/auth.api';

const extraArgument = { authApi };

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
