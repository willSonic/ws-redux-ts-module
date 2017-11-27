import { createSelector } from 'reselect';
import { RootAction } from '../root-action';
import { UserModel  } from '../../../business-layer/models/user.model';


import { REGISTER_USER_SUCCESS,
         EDIT_USER_PROFILE_SUCCESS,
         GET_USER_PROFILE_SUCCESS,
         CHECK_USER_PROFILE_NAME_SUCCESS,
         CHECK_USER_PROFILE_NAME_FAILURE,
          RESET_USER_PROFILE_NAME_VALID,
          SET_SELECTED_PROFILE_ID} from '../profile/profile.actions';

export  interface State {
  ids: string[];
  entities: { [id: string]: UserModel };
  selectedProfileId: string | '';
  validUserName:boolean;
}


export const initialState : State = {
  ids:[],
  entities: {},
  selectedProfileId: '',
  validUserName: false
};

export function ProfileReducer(state = initialState,  action: RootAction): State {
  switch (action.type) {
      case REGISTER_USER_SUCCESS:
      case EDIT_USER_PROFILE_SUCCESS:
      case GET_USER_PROFILE_SUCCESS:{
          //let user:UserModel;
          if(action.payload.hasOwnProperty('user') ||
             action.payload.hasOwnProperty('username')) {
              const user:UserModel = action.payload.hasOwnProperty('user')? <UserModel>(action.payload.user) : <UserModel>(action.payload);
              if( user.hasOwnProperty('id') && state.ids.indexOf( user.id ) > -1) {
                return state;
              }

              return {
                ids: [ ...state.ids, user.id ],
                entities: Object.assign({}, state.entities, {
                  [user.id]: user
                }),
                selectedProfileId: user.id,
                validUserName:  state.validUserName
              };

          }else {
             return state;
          }
      }

      case CHECK_USER_PROFILE_NAME_SUCCESS:{
           if(action.payload) {
                const validUserName = ((action.payload).hasOwnProperty('username'))?'inValid':'valid';
                return Object.assign({}, state, {validUserName:validUserName });
           }
           return state;
      }

      case CHECK_USER_PROFILE_NAME_FAILURE:{
            return Object.assign({}, state,   {validUserName:'valid' });
      }

      case RESET_USER_PROFILE_NAME_VALID:{
          return Object.assign({}, state, {validUserName:'invalid' });
      }

      case SET_SELECTED_PROFILE_ID:{
          if (state.ids.indexOf(action.payload) > -1) {
             return Object.assign({}, state, {selectedProfileId:action.payload });
          }else {
             return state;
          }
      }

      default: {
          return state;
        }
      }
}

/**
 * Because the data structure is defined within the reducer it is optimal to
 * locate our selector functions at this level. If store is to be thought of
 * as a database, and reducers the tables, selectors can be considered the
 * queries into said database. Remember to keep your selectors small and
 * focused so they can be combined and composed to fit each particular
 * use-case.
 */

export const getEntities = (state: State) => state.entities;

export const getIds = (state: State) => state.ids;

export const getSelectedProfileId = (state: State) => state.selectedProfileId;

export const getValidUserName = (state: State) => state.validUserName;

export const getSelectedProfile  = createSelector(getEntities, getSelectedProfileId, (entities, selectedProfileId) => {
  return entities[ selectedProfileId ];
});

