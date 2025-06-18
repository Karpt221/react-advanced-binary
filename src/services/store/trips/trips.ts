import { getAllTripsAction, getTripByIdAction } from './actions';
import { actions, reducer } from './trips-slice';

const allActions = { ...actions, getAllTripsAction, getTripByIdAction };

export { allActions as actions, reducer };
