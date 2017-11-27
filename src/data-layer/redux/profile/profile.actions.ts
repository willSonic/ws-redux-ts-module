import { RegistrationModel, ErrorModel, UserModel } from '../../../business-layer/models/index'

export const CHECK_USER_PROFILE_NAME_ATTEMPT = 'CHECK_USER_PROFILE_NAME_ATTEMPT';
export const CHECK_USER_PROFILE_NAME_FAILURE = 'CHECK_USER_PROFILE_NAME_FAILURE';
export const CHECK_USER_PROFILE_NAME_SUCCESS = 'CHECK_USER_PROFILE_NAME_SUCCESS';

export const RESET_USER_PROFILE_NAME_VALID = 'RESET_USER_PROFILE_NAME_VALID';

export const SET_SELECTED_PROFILE_ID = 'SET_SELECTED_PROFILE_ID';


export const GET_USER_PROFILE_ATTEMPT = 'GET_USER_PROFILE_ATTEMPT';
export const GET_USER_PROFILE_FAILURE = 'GET_USER_PROFILE_FAILURE';
export const GET_USER_PROFILE_SUCCESS = 'GET_USER_PROFILE_SUCCESS';

export const EDIT_USER_PROFILE_ATTEMPT = 'EDIT_USER_PROFILE_ATTEMPT';
export const EDIT_USER_PROFILE_FAILURE = 'EDIT_USER_PROFILE_FAILURE';
export const EDIT_USER_PROFILE_SUCCESS = 'EDIT_USER_PROFILE_SUCCESS';

export const REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE';
export const REGISTER_USER_ATTEMPT = 'REGISTER_USER_ATTEMPT';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';

export type Actions = {
     CHECK_USER_PROFILE_NAME_ATTEMPT : {
             type: typeof CHECK_USER_PROFILE_NAME_ATTEMPT,
             payload:string
          },
     CHECK_USER_PROFILE_NAME_FAILURE: {
             type:  typeof CHECK_USER_PROFILE_NAME_FAILURE,
             payload:ErrorModel
          },
     CHECK_USER_PROFILE_NAME_SUCCESS: {
             type:  typeof CHECK_USER_PROFILE_NAME_SUCCESS,
             payload: UserModel
          },
     RESET_USER_PROFILE_NAME_VALID: {
             type: typeof  RESET_USER_PROFILE_NAME_VALID
          },
     SET_SELECTED_PROFILE_ID: {
             type:  typeof SET_SELECTED_PROFILE_ID,
             payload:string
          },
     GET_USER_PROFILE_ATTEMPT: {
             type:  typeof GET_USER_PROFILE_ATTEMPT,
             payload: string
          },
     GET_USER_PROFILE_FAILURE: {
             type: typeof  GET_USER_PROFILE_FAILURE,
             payload: ErrorModel
          },
     GET_USER_PROFILE_SUCCESS: {
             type:  typeof GET_USER_PROFILE_SUCCESS,
             payload:UserModel
          },
     EDIT_USER_PROFILE_ATTEMPT: {
             type:  typeof EDIT_USER_PROFILE_ATTEMPT,
             payload:UserModel
          },
     EDIT_USER_PROFILE_FAILURE: {
             type: typeof  EDIT_USER_PROFILE_FAILURE,
             payload: ErrorModel
          },
     EDIT_USER_PROFILE_SUCCESS: {
             type:  typeof EDIT_USER_PROFILE_SUCCESS,
             payload: any
          },
     REGISTER_USER_ATTEMPT: {
             type:  typeof REGISTER_USER_ATTEMPT,
             payload: RegistrationModel
          },
     REGISTER_USER_FAILURE: {
             type:  typeof REGISTER_USER_FAILURE,
             payload: ErrorModel
          },
     REGISTER_USER_SUCCESS: {
             type: typeof  REGISTER_USER_SUCCESS,
             payload: any
          }
};


export const actionCreators = {
  checkUserProfileNameAttempt: ( payload:string ): Actions[typeof CHECK_USER_PROFILE_NAME_ATTEMPT] => ({
    type: CHECK_USER_PROFILE_NAME_ATTEMPT, payload
  }),

  checkUserProfileNameFailure: ( payload:ErrorModel ): Actions[typeof CHECK_USER_PROFILE_NAME_FAILURE] => ({
    type: CHECK_USER_PROFILE_NAME_FAILURE, payload
  }),

  checkUserProfileNameSuccess: (payload: UserModel): Actions[typeof CHECK_USER_PROFILE_NAME_SUCCESS] => ({
    type: CHECK_USER_PROFILE_NAME_SUCCESS, payload,
  }),

  resetUserNameVailid: ( ): Actions[typeof RESET_USER_PROFILE_NAME_VALID ] => ({
    type: RESET_USER_PROFILE_NAME_VALID
  }),

  setProfileSelectedId: ( payload: string ): Actions[typeof SET_SELECTED_PROFILE_ID ] => ({
    type: SET_SELECTED_PROFILE_ID, payload
  }),

  getUserProfileAttempt: (payload: string): Actions[typeof GET_USER_PROFILE_ATTEMPT ] => ({
    type: GET_USER_PROFILE_ATTEMPT, payload
  }),

  getUserProfileFailure: (payload: ErrorModel ): Actions[typeof GET_USER_PROFILE_FAILURE ] => ({
    type: GET_USER_PROFILE_FAILURE, payload
  }),

  getUserProfileSuccess: ( payload:UserModel ): Actions[typeof GET_USER_PROFILE_SUCCESS ] => ({
    type: GET_USER_PROFILE_SUCCESS, payload
  }),

  userRegistrationAttempt: (payload: RegistrationModel ): Actions[typeof REGISTER_USER_ATTEMPT ] => ({
    type: REGISTER_USER_ATTEMPT, payload
  }),

  userRegistrationFailure: (payload: ErrorModel ): Actions[typeof REGISTER_USER_FAILURE ] => ({
    type: REGISTER_USER_FAILURE, payload
  }),

  userRegistrationuccess: (payload: RegistrationModel): Actions[typeof REGISTER_USER_SUCCESS ] => ({
    type: REGISTER_USER_SUCCESS, payload
  }),

  updateUserProfileAttempt: (payload: any): Actions[typeof EDIT_USER_PROFILE_ATTEMPT ] => ({
    type: EDIT_USER_PROFILE_ATTEMPT, payload
  }),

  updateUserProfileFailure: (payload: ErrorModel): Actions[typeof EDIT_USER_PROFILE_FAILURE ] => ({
    type: EDIT_USER_PROFILE_FAILURE, payload
  }),

  updateUserProfileSuccess: (payload: UserModel): Actions[typeof EDIT_USER_PROFILE_SUCCESS ] => ({
    type: EDIT_USER_PROFILE_SUCCESS, payload
  })
};