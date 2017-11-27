import { SessionModel, ErrorModel,AuthModel } from '../../../business-layer/models/index'

export const APP_START_CLEAR_LOGIN   = 'APP_START_CLEAR_LOGIN';
export const LOGIN_USER_ATTEMPT      = 'LOGIN_USER_ATTEMPT';
export const LOGIN_USER_FAILURE      = 'LOGIN_USER_FAILURE';
export const LOGIN_USER_SUCCESS      = 'LOGIN_USER_SUCCESS';
export const LOGOUT_USER_ATTEMPT     = 'LOGOUT_USER_ATTEMPT';
export const LOGOUT_USER_FAILURE     = 'LOGOUT_USER_FAILURE';
export const LOGOUT_USER_SUCCESS      = 'LOGOUT_USER_SUCCESS';
export const GET_SESSION_USER_ATTEMPT   = 'GET_SESSION_USER_ATTEMPT';
export const GET_SESSION_USER_SUCCESS   = 'GET_SESSION_USER_SUCCESS';

export type Actions = {
     APP_START_CLEAR_LOGIN : {
             type: typeof APP_START_CLEAR_LOGIN
          },
     LOGIN_USER_ATTEMPT: {
             type:  typeof LOGIN_USER_ATTEMPT,
             payload: AuthModel
          },
     LOGIN_USER_FAILURE: {
             type:  typeof LOGIN_USER_FAILURE,
             payload: ErrorModel
          },
     LOGIN_USER_SUCCESS: {
             type: typeof  LOGIN_USER_SUCCESS,
             payload: any
          },
     LOGOUT_USER_ATTEMPT: {
             type:  typeof LOGOUT_USER_ATTEMPT
          },
     LOGOUT_USER_FAILURE: {
             type:  typeof  LOGOUT_USER_FAILURE,
             payload: ErrorModel
          },
     LOGOUT_USER_SUCCESS: {
             type:  typeof  LOGOUT_USER_SUCCESS,
             payload: any
          },
     GET_SESSION_USER_ATTEMPT: {
             type: typeof GET_SESSION_USER_ATTEMPT,
             payload: any
          },
     GET_SESSION_USER_SUCCESS: {
             type:  typeof  GET_SESSION_USER_SUCCESS,
             payload: SessionModel
          }
}


export const actionCreators = {
  appStartLoginClear: ( ): Actions[typeof APP_START_CLEAR_LOGIN] => ({
    type: APP_START_CLEAR_LOGIN,
  }),

  userLoginAttempt: (payload:AuthModel) => ({
    type: LOGIN_USER_ATTEMPT, payload,
  }),

  userLoginFailure: (payload: ErrorModel): Actions[typeof LOGIN_USER_FAILURE] => ({
    type: LOGIN_USER_FAILURE, payload,
  }),

  userLoginSuccess: (payload: SessionModel): Actions[typeof LOGIN_USER_SUCCESS] => ({
    type: LOGIN_USER_SUCCESS, payload,
  }),

  userLogoutAttempt: (): Actions[typeof LOGOUT_USER_ATTEMPT] => ({
    type: LOGOUT_USER_ATTEMPT,
  }),

  userLogoutFailure: (payload: ErrorModel): Actions[typeof LOGOUT_USER_FAILURE] => ({
    type: LOGOUT_USER_FAILURE, payload,
  }),

  userLogoutSuccess: (payload: any): Actions[typeof LOGOUT_USER_SUCCESS] => ({
    type: LOGOUT_USER_SUCCESS, payload,
  }),

  getSessionUserAttempt: (payload: any): Actions[typeof GET_SESSION_USER_ATTEMPT] => ({
    type: GET_SESSION_USER_ATTEMPT, payload,
  }),

  getSessionUserSuccess: (payload: SessionModel): Actions[typeof GET_SESSION_USER_SUCCESS] => ({
    type: GET_SESSION_USER_SUCCESS, payload,
  })
};

