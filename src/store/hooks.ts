import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { IRootState } from './index';

// 动态推导 IRootState 类型
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;
