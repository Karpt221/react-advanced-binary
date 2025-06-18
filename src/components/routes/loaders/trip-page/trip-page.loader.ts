import { tripsActions } from '~/services/store/actions';
import { store } from '~/services/store/store';

async function tripPageLoader({ params }: { params: { tripId?: string } }) {
    const tripId = params.tripId;
    if (!tripId) {
        throw new Error('Trip ID is required.');
    }

    await store.dispatch(tripsActions.getTripByIdAction(tripId));

    return null;
}

export { tripPageLoader };
