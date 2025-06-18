import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '~/types/store/store.type';

const useAppDispatch = useDispatch.withTypes<AppDispatch>();
const useAppSelector = useSelector.withTypes<RootState>();

export { useAppDispatch, useAppSelector };
