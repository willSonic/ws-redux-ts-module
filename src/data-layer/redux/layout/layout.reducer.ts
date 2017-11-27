import { RootAction } from '../root-action';

import { HIDE_LOGIN_DIALOG,
        SHOW_LOGIN_DIALOG,
        SET_REQUESTED_URL,
        SHOW_LOGIN_DIALOG_SET_REQUESTED_URL } from './layout.actions';


export interface State {
  showLoginDialog:boolean;
  requestedURL:string;
}

const initialState: State = {
  showLoginDialog: false,
  requestedURL:''
};

export function  LayoutReducer(state = initialState, action: RootAction): State {
  switch (action.type) {
    case HIDE_LOGIN_DIALOG: {
      return {
        showLoginDialog: false,
        requestedURL:''
      };
    }
    case SHOW_LOGIN_DIALOG: {
      return {
        showLoginDialog: true,
        requestedURL:state.requestedURL
      };
    }

    case SET_REQUESTED_URL: {
      return {
        showLoginDialog: state.showLoginDialog,
        requestedURL:action.payload
      };
    }

    case SHOW_LOGIN_DIALOG_SET_REQUESTED_URL: {
      return {
        showLoginDialog: true,
        requestedURL:action.payload
      };
    }


    default:
      return state;
  }
}

export const getShowLoginDialog = (state: State) => state.showLoginDialog;
export const getRequestedURL = (state: State) => state.requestedURL;
