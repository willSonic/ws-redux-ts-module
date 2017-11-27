
export const SHOW_LOGIN_DIALOG = 'SHOW_LOGIN_DIALOG';
export const HIDE_LOGIN_DIALOG = 'HIDE_LOGIN_DIALOG';
export const SET_REQUESTED_URL  =  'SET_REQUESTED_URL';
export const SHOW_LOGIN_DIALOG_SET_REQUESTED_URL  = 'SHOW_LOGIN_DIALOG_SET_REQUESTED_URL';


export type Actions = {
     SHOW_LOGIN_DIALOG : {
             type: typeof SHOW_LOGIN_DIALOG
          },
     HIDE_LOGIN_DIALOG: {
             type:  typeof HIDE_LOGIN_DIALOG
          },
     SET_REQUESTED_URL: {
             type:  typeof SET_REQUESTED_URL,
             payload: string
          },
     SHOW_LOGIN_DIALOG_SET_REQUESTED_URL: {
             type: typeof  SHOW_LOGIN_DIALOG_SET_REQUESTED_URL,
             payload: string
          }
};


export const actionCreators = {
  showLoginDialog: ( ): Actions[typeof SHOW_LOGIN_DIALOG] => ({
    type: SHOW_LOGIN_DIALOG,
  }),

  hideLoginDialog: ( ): Actions[typeof HIDE_LOGIN_DIALOG] => ({
    type: HIDE_LOGIN_DIALOG,
  }),

  setRequestedURL: (payload: string): Actions[typeof SET_REQUESTED_URL] => ({
    type: SET_REQUESTED_URL, payload,
  }),

  showLoginDialogAndSetRequestedURL: (payload: string): Actions[typeof SHOW_LOGIN_DIALOG_SET_REQUESTED_URL] => ({
    type: SHOW_LOGIN_DIALOG_SET_REQUESTED_URL, payload,
  })
};