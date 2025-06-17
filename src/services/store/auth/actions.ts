import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AsyncThunkConfig } from '~/types/store/async-thunk.type';
import type { UserDto } from '~/types/travel-api/user-dto.type';
import type { SignInRequestDto, SignInResponseDto, SignUpRequestDto, SignUpResponseDto } from '~/types/types';
import { name } from './auth-slice';

const signInAction = createAsyncThunk<SignInResponseDto, SignInRequestDto, AsyncThunkConfig>(
    `${name}/sign-in`,
    async (payload, { extra }) => {
        const { auth } = extra.travelApi;
        return await auth.signIn(payload);
    }
);

const signUpAction = createAsyncThunk<SignUpResponseDto, SignUpRequestDto, AsyncThunkConfig>(
    `${name}/sign-up`,
    async (payload, { extra }) => {
        const { auth } = extra.travelApi;
        return await auth.signUp(payload);
    }
);

const authenticationAction = createAsyncThunk<UserDto, void, AsyncThunkConfig>(
    `${name}/authenticate`,
    async (_payload, { extra }) => {
        const { auth } = extra.travelApi;
        return await auth.authenticate();
    }
);

export { signInAction, signUpAction, authenticationAction };
