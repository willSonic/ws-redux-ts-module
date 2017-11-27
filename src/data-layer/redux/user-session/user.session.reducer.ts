import { UserModel  } from '../../../business-layer/models/user.model';
import { SessionModel  } from '../../../business-layer/models/session.model';

//import * as profileActions from '../profile/profile.actions';
//import * as userSessionActions from '../user-session/user.session.actions';
import { RootAction } from '../root-action';



import { LOGIN_USER_ATTEMPT,
         APP_START_CLEAR_LOGIN,
        LOGIN_USER_SUCCESS,
        GET_SESSION_USER_SUCCESS,
        LOGOUT_USER_SUCCESS,
        LOGIN_USER_FAILURE } from './user.session.actions';

import { REGISTER_USER_ATTEMPT,
         REGISTER_USER_SUCCESS } from '../profile/profile.actions';


export interface State {
  user: UserModel | null;
  token: string | undefined;
  loading: boolean;
  loaded:boolean;
  errorMessage:string | undefined;
}



export const initialState : State = {
  user:  null,
  token: '',
  loading: false,
  loaded: false,
  errorMessage: ''
};



export function  UserSessionReducer(state = initialState, action: RootAction): State {
  switch (action.type) {
    case REGISTER_USER_ATTEMPT:
    case LOGIN_USER_ATTEMPT:
    case APP_START_CLEAR_LOGIN: {
          localStorage.clear();
          return Object.assign({}, state, {user:{}, token:'', loading:false, loaded:false, errorMessage:'' });
    }
    case REGISTER_USER_SUCCESS:
    case LOGIN_USER_SUCCESS: {
          if(action.payload.hasOwnProperty('user')) {
             //const user:UserModel = <UserModel>(action.payload.user);
             const session:SessionModel = <SessionModel> action.payload;
             if (session && session.user && state.user && state.user.hasOwnProperty('id') && (state.user.id === session.user.id)) {
                return state;
             }
             if(session.token){
                 localStorage.setItem('Authorized',  session.token);
             }
             return Object.assign({}, state, session, {loading:false, loaded:true,  errorMessage:''});
          }else {
              return state;
          }
    }

    case GET_SESSION_USER_SUCCESS: {
         const session:SessionModel= <SessionModel> action.payload;
         if (state.user && session && session.user && (state.user.id === session.user.id)) {
            return state;
         }
         return Object.assign({}, state, session);
    }

    case LOGOUT_USER_SUCCESS: {
          localStorage.clear();
          return Object.assign({}, state, {user:{}, token:'', loading:false, loaded:false,  errorMessage:'' });
    }

    case LOGIN_USER_FAILURE:{
           const result:any = Object.assign({},  action.payload.message )
           console.log('UserSessionReducer ----- result =', result,'|--------')
           return Object.assign({}, { user:null,
                                     token:'',
                                     loading:false,
                                     loaded:false,
                                     errorMessage: result.data.error });
    }

    default: {
      return state;
    }
  }
}

export const getUser = (state:State) => state.user;

export const getToken = (state:State) => state.token;

export const getUserLoading = (state:State) => state.loading;

export const getUserLoaded = (state:State) => state.loaded;
