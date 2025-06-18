import { createAsyncThunk } from '@reduxjs/toolkit';
import { name } from './trips-slice';
import type { AsyncThunkConfig } from '~/types/store/async-thunk.type';
import type { TripResponseDto } from '~/types/types';
import { HttpError } from '~/services/http/http-error';
import { HTTP_CODE } from '~/enums/enums';

const getAllTripsAction = createAsyncThunk<TripResponseDto[], void, AsyncThunkConfig>(
    `${name}/getAll`,
    async (_payload, { extra, rejectWithValue }) => {
        const { trips } = extra.travelApi;
        try {
            const dto = await trips.getAll();
            return dto;
        } catch (error) {
            if (error instanceof HttpError && error.statusCode === HTTP_CODE.UNAUTHORIZED) {
                return rejectWithValue({ isUnauthorized: true });
            }

            throw error;
        }
    }
);

const getTripByIdAction = createAsyncThunk<TripResponseDto, string, AsyncThunkConfig>(
    `${name}/getById`,
    async (payload, { extra, rejectWithValue }) => {
        const { trips } = extra.travelApi;
        try {
            return await trips.getById(payload);
        } catch (error) {
            if (error instanceof HttpError && error.statusCode === HTTP_CODE.NOT_FOUND) {
                return rejectWithValue({ isNotFound: true });
            }

            throw error;
        }
    }
);

export { getAllTripsAction, getTripByIdAction };
