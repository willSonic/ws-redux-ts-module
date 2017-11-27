
import { combineReducers } from 'redux';
import { routerReducer as router, RouterState } from 'react-router-redux';
import { createSelector } from 'reselect';

import * as fromError  from './error/error.reducer';
import * as fromLayout  from './layout/layout.reducer'
import * as fromUserSession  from './user-session/user.session.reducer';
import * as fromProfile from './profile/profile.reducer';



interface StoreEnhancerState { }

export interface RootState extends StoreEnhancerState {
  router: RouterState,
  errors: fromError.State,
  layouts: fromLayout.State,
  usersessions: fromUserSession.State,
  profiles: fromProfile.State,
}



export const RootReducer = combineReducers<RootState>({
  router,
  errors:fromError.ErrorReducer,
  layouts:fromLayout.LayoutReducer,
  usersessions:fromUserSession.UserSessionReducer,
  profiles: fromProfile.ProfileReducer
});


/**
 * A selector function is a map function factory. We pass it parameters and it
 * returns a function that maps from the larger state tree into a smaller
 * piece of state. This selector simply selects the `books` state.
 *
 * Selectors are used with the `select` operator.
 *
 * ```ts
 * class MyComponent {
 * 	constructor(state$: Observable<State>) {
 * 	  this.booksState$ = state$.select(getBooksState);
 * 	}
 * }
 * ```
 */
export const getUsersessionState = (state: RootState) => state.usersessions;

/**
 * Every reducer module exports selector functions, however child reducers
 * have no knowledge of the overall state tree. To make them useable, we
 * need to make new selectors that wrap them.
 *
 * The createSelector function from the reselect library creates
 * very efficient selectors that are memoized and only recompute when arguments change.
 * The created selectors can also be composed together to select different
 * pieces of state.
 */
export const getUser = createSelector(getUsersessionState, fromUserSession.getUser);
export const getToken = createSelector(getUsersessionState, fromUserSession.getToken);
export const getUserLoading = createSelector(getUsersessionState, fromUserSession.getUserLoading);
export const getUserLoaded = createSelector(getUsersessionState, fromUserSession.getUserLoaded);
export const hasLoggedInUser = createSelector(getToken, (token) => {
         return token !=='' ? true:false;
});



/**
 * Just like with the books selectors, we also have to compose the search
 * reducer's and collection reducer's selectors.
 */
export const getErrorState = (state: RootState) => state.errors;

export const getErrorIds = createSelector(getErrorState, fromError.getIds);
export const getErrorEntities  = createSelector(getErrorState, fromError.getEntities);



export const getProfilesState = (state: RootState) => state.profiles;

export const getProfileIds = createSelector(getProfilesState, fromProfile.getIds);
export const getProfileEntities  = createSelector(getProfilesState, fromProfile.getEntities);
export const getSelectedProfileId  = createSelector(getProfilesState, fromProfile.getSelectedProfileId);
export const getSelectedProfile  = createSelector(getProfilesState, fromProfile.getSelectedProfile);
export const getValidUserName  = createSelector(getProfilesState, fromProfile.getValidUserName);




/**
 * Layout Reducers
 */
export const getLayoutState = (state: RootState) => state.layouts;

export const getShowLoginDialog = createSelector(getLayoutState, fromLayout.getShowLoginDialog);

export const getRequestedURL = createSelector(getLayoutState, fromLayout.getRequestedURL);
