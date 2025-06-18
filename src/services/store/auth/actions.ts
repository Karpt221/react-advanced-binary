import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AsyncThunkConfig } from '~/types/store/async-thunk.type';
import type { UserDto } from '~/types/travel-api/user-dto.type';
import type { SignInRequestDto, SignInResponseDto, SignUpRequestDto, SignUpResponseDto } from '~/types/types';
import { name } from './auth-slice';
import { HttpError } from '~/services/http/http-error';
import { APP_ROUTES, HTTP_CODE } from '~/enums/enums';
import { bookingsActions, navActions, tripsActions } from '../actions';

const signInAction = createAsyncThunk<SignInResponseDto, SignInRequestDto, AsyncThunkConfig>(
    `${name}/sign-in`,
    async (payload, { dispatch, extra, rejectWithValue }) => {
        const { auth } = extra.travelApi;
        try {
            const dto = await auth.signIn(payload);
            localStorage.setItem('token', dto.token);
            dispatch(navActions.navigate(APP_ROUTES.MAIN));
            return dto;
        } catch (error) {
            if (
                error instanceof HttpError &&
                (error.statusCode === HTTP_CODE.BAD_REQUEST || error.statusCode === HTTP_CODE.UNAUTHORIZED)
            ) {
                return rejectWithValue({ errorMessage: error.message, signInError: true });
            }

            throw error;
        }
    }
);

const signUpAction = createAsyncThunk<SignUpResponseDto, SignUpRequestDto, AsyncThunkConfig>(
    `${name}/sign-up`,
    async (payload, { dispatch, extra, rejectWithValue }) => {
        const { auth } = extra.travelApi;
        try {
            const dto = await auth.signUp(payload);
            localStorage.setItem('token', dto.token);
            dispatch(navActions.navigate(APP_ROUTES.MAIN));
            return dto;
        } catch (error) {
            if (
                error instanceof HttpError &&
                (error.statusCode === HTTP_CODE.BAD_REQUEST || error.statusCode === HTTP_CODE.UNAUTHORIZED)
            ) {
                return rejectWithValue({ errorMessage: error.message, signUpError: true });
            }

            throw error;
        }
    }
);

const signOutAction = createAsyncThunk<void, void, AsyncThunkConfig>(`${name}/sign-out`, (_payload, { dispatch }) => {
    localStorage.removeItem('token');
    dispatch(tripsActions.resetState());
    dispatch(bookingsActions.resetState());
    dispatch(navActions.navigate(APP_ROUTES.SIGN_IN));
});

const authenticationAction = createAsyncThunk<UserDto, void, AsyncThunkConfig>(
    `${name}/authenticate`,
    async (_payload, { extra, rejectWithValue }) => {
        const { auth } = extra.travelApi;
        try {
            return await auth.authenticate();
        } catch (error) {
            if (error instanceof HttpError && error.statusCode === HTTP_CODE.UNAUTHORIZED) {
                return rejectWithValue({ isUnauthorized: true });
            }

            throw error;
        }
    }
);

export { signInAction, signUpAction, authenticationAction, signOutAction };
