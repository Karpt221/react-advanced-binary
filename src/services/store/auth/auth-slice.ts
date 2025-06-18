import { createSlice } from '@reduxjs/toolkit';
import { DATA_STATUS } from '~/enums/enums';
import type { ValueOf } from '~/types/helpers/helpers';
import type { UserDto } from '~/types/travel-api/user-dto.type';
import { authenticationAction, signInAction, signOutAction, signUpAction } from './actions';

type AuthState = {
    user: null | UserDto;
    authenticationStatus: ValueOf<typeof DATA_STATUS>;
    signInStatus: ValueOf<typeof DATA_STATUS>;
    signUpStatus: ValueOf<typeof DATA_STATUS>;
};

const initialState: AuthState = {
    user: null,
    authenticationStatus: DATA_STATUS.IDLE,
    signInStatus: DATA_STATUS.IDLE,
    signUpStatus: DATA_STATUS.IDLE,
};

const name = 'auth';

const { actions, reducer } = createSlice({
    name,
    initialState: initialState,
    reducers: {
        resetSignInStatus: (state) => {
            state.signInStatus = DATA_STATUS.IDLE;
        },
        resetSignUpStatus: (state) => {
            state.signUpStatus = DATA_STATUS.IDLE;
        },
        resetAuthenticationStatus: (state) => {
            state.authenticationStatus = DATA_STATUS.IDLE;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(signInAction.pending, (state) => {
                state.signInStatus = DATA_STATUS.PENDING;
            })
            .addCase(signInAction.fulfilled, (state, action) => {
                state.signInStatus = DATA_STATUS.FULFILLED;
                state.user = action.payload.user;
            })
            .addCase(signInAction.rejected, (state) => {
                state.signInStatus = DATA_STATUS.REJECTED;
            })
            .addCase(signUpAction.pending, (state) => {
                state.signUpStatus = DATA_STATUS.PENDING;
            })
            .addCase(signUpAction.fulfilled, (state, action) => {
                state.signUpStatus = DATA_STATUS.FULFILLED;
                state.user = action.payload.user;
            })
            .addCase(signUpAction.rejected, (state) => {
                state.signUpStatus = DATA_STATUS.REJECTED;
            })
            .addCase(authenticationAction.pending, (state) => {
                state.authenticationStatus = DATA_STATUS.PENDING;
            })
            .addCase(authenticationAction.fulfilled, (state, action) => {
                state.authenticationStatus = DATA_STATUS.FULFILLED;
                state.user = action.payload;
            })
            .addCase(authenticationAction.rejected, (state) => {
                state.authenticationStatus = DATA_STATUS.REJECTED;
            })
            .addCase(signOutAction.fulfilled, (state) => {
                state.user = null;
                state.signInStatus = DATA_STATUS.IDLE;
                state.signUpStatus = DATA_STATUS.IDLE;
                state.authenticationStatus = DATA_STATUS.IDLE;
            });
    },
});

export { actions, reducer, name };
