import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { APP_ROUTES } from '~/enums/enums';
import type { ValueOf } from '~/types/helpers/helpers';

type AppPath = Exclude<ValueOf<typeof APP_ROUTES>, '*'> | null;

type NavState = {
    settedPath: AppPath;
};

const initialState: NavState = {
    settedPath: null,
};

const name = 'navigation';

const { actions, reducer } = createSlice({
    name,
    initialState: initialState,
    reducers: {
        navigate: (state, action: PayloadAction<AppPath>) => {
            state.settedPath = action.payload;
        },
        clearPath: (state) => {
            state.settedPath = null;
        },
    },
});

export { actions, reducer, name };
