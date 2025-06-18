import { createAsyncThunk } from '@reduxjs/toolkit';
import { name } from './bookings-slice';
import type { AsyncThunkConfig } from '~/types/store/async-thunk.type';
import type { BookingRequestDTO, BookingResponseDto } from '~/types/types';
import { HttpError } from '~/services/http/http-error';
import { HTTP_CODE } from '~/enums/enums';

const getAllBookingsAction = createAsyncThunk<BookingResponseDto[], void, AsyncThunkConfig>(
    `${name}/getAll`,
    async (_payload, { extra, rejectWithValue }) => {
        const { bookings } = extra.travelApi;
        try {
            const dto = await bookings.getAll();
            return dto;
        } catch (error) {
            if (error instanceof HttpError && error.statusCode === HTTP_CODE.UNAUTHORIZED) {
                return rejectWithValue({ isUnauthorized: true });
            }

            throw error;
        }
    }
);

const createBookingAction = createAsyncThunk<void, BookingRequestDTO, AsyncThunkConfig>(
    `${name}/create`,
    async (payload, { extra, rejectWithValue }) => {
        const { bookings } = extra.travelApi;
        try {
            await bookings.create(payload);
        } catch (error) {
            if (error instanceof HttpError && error.statusCode === HTTP_CODE.UNAUTHORIZED) {
                return rejectWithValue({ isUnauthorized: true });
            }

            throw error;
        }
    }
);

const removeBookingAction = createAsyncThunk<string, string, AsyncThunkConfig>(
    `${name}/remove`,
    async (payload, { extra, rejectWithValue }) => {
        const { bookings } = extra.travelApi;
        try {
            await bookings.remove(payload);
            return payload;
        } catch (error) {
            if (error instanceof HttpError && error.statusCode === HTTP_CODE.UNAUTHORIZED) {
                return rejectWithValue({ isUnauthorized: true });
            }

            throw error;
        }
    }
);

export { getAllBookingsAction, createBookingAction, removeBookingAction };
