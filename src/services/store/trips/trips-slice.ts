import { createSlice } from '@reduxjs/toolkit';
import { DATA_STATUS } from '~/enums/enums';
import type { TripResponseDto, ValueOf } from '~/types/types';
import { getAllTripsAction, getTripByIdAction } from './actions';

type TripsState = {
    trips: TripResponseDto[];
    currentTrip: TripResponseDto | null;
    tripsStatus: ValueOf<typeof DATA_STATUS>;
    tripByIdStatus: ValueOf<typeof DATA_STATUS>;
};

const initialState: TripsState = {
    trips: [],
    currentTrip: null,
    tripsStatus: DATA_STATUS.IDLE,
    tripByIdStatus: DATA_STATUS.IDLE,
};

const name = 'trips';

const { actions, reducer } = createSlice({
    name,
    initialState: initialState,
    reducers: {
        resetState: (state) => {
            state.trips = [];
            state.tripsStatus = DATA_STATUS.IDLE;
            state.tripByIdStatus = DATA_STATUS.IDLE;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllTripsAction.pending, (state) => {
                state.tripsStatus = DATA_STATUS.PENDING;
                state.trips = [];
            })
            .addCase(getAllTripsAction.rejected, (state) => {
                state.tripsStatus = DATA_STATUS.REJECTED;
                state.trips = [];
            })
            .addCase(getAllTripsAction.fulfilled, (state, action) => {
                state.tripsStatus = DATA_STATUS.FULFILLED;
                state.trips = action.payload;
            })
            .addCase(getTripByIdAction.pending, (state) => {
                state.tripByIdStatus = DATA_STATUS.PENDING;
                state.currentTrip = null;
            })
            .addCase(getTripByIdAction.rejected, (state) => {
                state.tripByIdStatus = DATA_STATUS.REJECTED;
                state.currentTrip = null;
            })
            .addCase(getTripByIdAction.fulfilled, (state, action) => {
                state.tripByIdStatus = DATA_STATUS.FULFILLED;
                state.currentTrip = action.payload;
            });
    },
});

export { actions, reducer, name };
