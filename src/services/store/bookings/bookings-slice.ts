import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { DATA_STATUS } from '~/enums/enums';
import type { BookingResponseDto, ValueOf } from '~/types/types';
import { createBookingAction, getAllBookingsAction, removeBookingAction } from './actions';

type BookingsState = {
    bookings: BookingResponseDto[];
    bookingsStatus: ValueOf<typeof DATA_STATUS>;
    bookingCreateStatus: ValueOf<typeof DATA_STATUS>;
    bookingRemoveStatus: ValueOf<typeof DATA_STATUS>;
};

const initialState: BookingsState = {
    bookings: [],
    bookingsStatus: DATA_STATUS.IDLE,
    bookingCreateStatus: DATA_STATUS.IDLE,
    bookingRemoveStatus: DATA_STATUS.IDLE,
};

const name = 'bookings';

const { actions, reducer } = createSlice({
    name,
    initialState: initialState,
    reducers: {
        resetState: (state) => {
            state.bookings = [];
            state.bookingsStatus = DATA_STATUS.IDLE;
            state.bookingCreateStatus = DATA_STATUS.IDLE;
            state.bookingRemoveStatus = DATA_STATUS.IDLE;
        },
        resetBookingCreateStatus: (state) => {
            state.bookingCreateStatus = DATA_STATUS.IDLE;
        },
        resetBookingRemoveStatus: (state) => {
            state.bookingRemoveStatus = DATA_STATUS.IDLE;
        },
        setBookingsState: (state, action: PayloadAction<BookingResponseDto[]>) => {
            state.bookings = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllBookingsAction.pending, (state) => {
                state.bookingsStatus = DATA_STATUS.PENDING;
                state.bookings = [];
            })
            .addCase(getAllBookingsAction.rejected, (state) => {
                state.bookingsStatus = DATA_STATUS.REJECTED;
                state.bookings = [];
            })
            .addCase(getAllBookingsAction.fulfilled, (state, action) => {
                state.bookingsStatus = DATA_STATUS.FULFILLED;
                state.bookings = action.payload;
            })
            .addCase(createBookingAction.pending, (state) => {
                state.bookingCreateStatus = DATA_STATUS.PENDING;
            })
            .addCase(createBookingAction.rejected, (state) => {
                state.bookingCreateStatus = DATA_STATUS.REJECTED;
            })
            .addCase(createBookingAction.fulfilled, (state) => {
                state.bookingCreateStatus = DATA_STATUS.FULFILLED;
            })
            .addCase(removeBookingAction.pending, (state) => {
                state.bookingRemoveStatus = DATA_STATUS.PENDING;
            })
            .addCase(removeBookingAction.rejected, (state) => {
                state.bookingRemoveStatus = DATA_STATUS.REJECTED;
            })
            .addCase(removeBookingAction.fulfilled, (state, action) => {
                state.bookingRemoveStatus = DATA_STATUS.FULFILLED;
                state.bookings = state.bookings.filter((booking) => booking.id !== action.payload);
            });
    },
});

export { actions, reducer, name };
