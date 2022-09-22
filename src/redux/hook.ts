import { bindActionCreators } from '@reduxjs/toolkit';
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
  shallowEqual,
} from 'react-redux';

import type { AppDispatch, RootState } from './store';
import actionCreators from './actionCreators';

export const useActions = () => {
  const dispatch = useDispatch<AppDispatch>();
  return bindActionCreators(actionCreators, dispatch);
};

export const useTypedSelector: TypedUseSelectorHook<RootState> = (selector) => {
  return useSelector(selector, shallowEqual);
};
