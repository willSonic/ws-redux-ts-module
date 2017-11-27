import { RouterAction, LocationChangeAction } from 'react-router-redux';

import * as ErrorActions  from './error/error.actions';
import *  as ProfileActions  from './profile/profile.actions';
import *  as LayoutActions  from './layout/layout.actions';
import *  as UserSessionActions from './user-session/user.session.actions';

type ReactRouterAction = RouterAction | LocationChangeAction;

export const ErrorActionCreators = ErrorActions.actionCreators;
export const ProfileActionCreators = ProfileActions.actionCreators;
export const LayoutActionCreators = LayoutActions.actionCreators;
export const UserSessionActionCreators = UserSessionActions.actionCreators;

export type RootAction =
  | ReactRouterAction
  | ErrorActions.Actions[ keyof ErrorActions.Actions]
  | ProfileActions.Actions[ keyof ProfileActions.Actions]
  | LayoutActions.Actions[ keyof LayoutActions.Actions]
  | UserSessionActions.Actions[keyof UserSessionActions.Actions];




