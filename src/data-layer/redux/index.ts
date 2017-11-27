import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import {  RootReducer } from './root-reducer';
import { RootEpic } from './root-epic';


export * from './root-action';
export * from './root-reducer';
export * from './root-epic';
export * from './types';




const epicMiddleware = createEpicMiddleware(RootEpic);
const createStoreWithMiddleware = applyMiddleware(epicMiddleware)(createStore);

export let store = createStoreWithMiddleware(RootReducer);