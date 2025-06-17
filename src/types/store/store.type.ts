import type { extraArgument, store } from '~/modules/store/store';

type AppStore = typeof store;
type RootState = ReturnType<AppStore['getState']>;
type AppDispatch = AppStore['dispatch'];
type ExtraArgument = typeof extraArgument;

export { type AppStore, type RootState, type AppDispatch, type ExtraArgument };
