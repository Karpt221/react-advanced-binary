import type { AppDispatch, ExtraArgument, RootState } from './store.type';

type AsyncThunkConfig = {
    dispatch: AppDispatch;
    extra: ExtraArgument;
    state: RootState;
};

export { type AsyncThunkConfig };
