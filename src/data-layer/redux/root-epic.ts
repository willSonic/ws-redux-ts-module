import { combineEpics } from 'redux-observable';

import { ErrorEpic } from './error/error.epic';
import { UserSessionEpic } from './user-session/user.session.epic';
import { ProfileEpic } from './profile/profile.epic';

export const RootEpic = combineEpics(
  ErrorEpic.catchAllRemoteErrors,
  UserSessionEpic.loginUser$,
  UserSessionEpic.logoutUser$,
  UserSessionEpic.logoutUserSuccess$,
  UserSessionEpic.removeErrorModelCheckUserFailure$,
  ProfileEpic.registerUser$,
  ProfileEpic.getUserByName$,
  ProfileEpic.getUserProfile$
);