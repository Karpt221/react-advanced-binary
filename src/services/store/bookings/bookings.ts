import { getAllBookingsAction, createBookingAction, removeBookingAction } from './actions';
import { actions, reducer } from './bookings-slice';

const allActions = { ...actions, getAllBookingsAction, createBookingAction, removeBookingAction };

export { allActions as actions, reducer };
