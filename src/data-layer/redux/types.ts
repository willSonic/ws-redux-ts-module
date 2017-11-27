import {
  Dispatch as ReduxDispatch,
  Reducer as ReduxReducer,
} from 'redux';

import { RootState } from './root-reducer';

//import { RootReducer } from './root-reducer';

import { RootAction } from './root-action';




//export type RootReducerType = RootReducer;

export type Dispatch = ReduxDispatch< RootAction >;
export type Reducer = ReduxReducer< RootState, RootAction >;

export type Api = {};

